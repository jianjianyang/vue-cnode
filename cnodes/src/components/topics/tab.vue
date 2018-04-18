<template>
  <div class="tab">
    <div class="tab-left">
    <div class="header topic_header">
      <div class="topic_full_title">
        <!--<span class="put_top">置顶</span>-->
        <span v-if="list.top" class="top">置顶</span>
        <span v-if="'ask'===list.tab" class="share">问答</span>
        <span v-if="'share'===list.tab&&!list.top&&!list.good" class="share">分享</span>
        <span v-if="list.good" class="good">精华</span>
        <strong>{{list.title}}</strong>
      </div>
      <div class="changes">
        <span>
          发布于 {{list.create_at | isDate}}
        </span>
        <span>
          作者
          <router-link :to="/user/+loginname">
            {{loginname}}
          </router-link>
        </span>
        <span>
         {{list.visit_count}} 次浏览
        </span>
        <span>
            最后一次编辑是 {{list.last_reply_at | isDate}}
          </span>
        <span> 来自 分享</span>
        <input class="span-success " type="submit" value="收藏" action="collect" @click="submit" v-if="!list.is_collect">
        <input class="span-common" type="submit" value="取消收藏" action="de_collect" @click="unsubmit" v-if="list.is_collect">
      </div>
      <div>
        <router-link :to="'/topic/'+list.id+'/edit'">
          <input class="span-success " type="submit" value="编辑" v-if="loginname=='jianjianyang'">
        </router-link>

      </div>
    </div>
    <div v-html="list.content" class="tab-html">
    </div>
    <div class="yy"></div>
    <div class="panel">
      <div class="header">
        <span class="col_fade">{{length}}回复</span>
      </div>

      <div class="cell reply_area reply_item
  reply_highlight" v-for="(item,index) in arr" :reply_id="arr[index].id" reply_to_id="" :id="arr[index].id">
        <div class="author_content">
          <a :href="'/user/'+item.author.loginname" class="user_avatar">
            <img :src="item.author.avatar_url"></a>
          <div class="user_info">
            <a class="dark reply_author" :href="'/user/'+item.author.loginname">{{item.author.loginname}}</a>
            <a class="reply_time" :href="'#'+arr[index].id">{{index+1}}楼•{{item.create_at | isDate}}</a>
          </div>
          <div class="user_action">
      <span>
        <i class="fa up_btn fa-thumbs-o-up" title="喜欢"></i>
        <span class="up-count" @click="link(item.id,index)">
          <span class="am-icon-thumbs-up " v-if="!item.is_uped"></span>
          <span class="am-icon-thumbs-up am-success" v-if="item.is_uped"></span>
         {{ups(index)}}
        </span>
      </span>
            <span>
          <i class="fa fa-reply reply2_btn" title="回复">
             <span class="am-icon-share" @click="shares(index)"></span>
          </i>
      </span>
          </div>
        </div>
        <div class="reply_content from-Lizhooh" v-html="item.content">
        </div>
        <div v-if="share==index">
          <textarea autofocus="" class="span10" v-model="contents='@'+item.author.loginname"></textarea>
          <div class="editor_buttons">
            <input type="submit" class="span-primary submit_btn" value="回复" @click="replys(index)">
          </div>
        </div>
      </div>
    </div>
    <div class="yy"></div>
    <div class="yys">添加回复</div>
    <textarea autofocus="" class="span10" v-model="content"></textarea>
    <div class="editor_buttons">
      <input type="submit" class="span-primary submit_btn" value="回复" @click="reply">
    </div>
    </div>
    <div class="tab-right">
        <sidebar>
          <div slot="slide-header">
            <div class="header">
              <span class="col_fade">个人信息</span>
            </div>
            <div class="inner">
              <div class="user_card">
                <div>
                  <a class="user_avatar" :href="'/user/'+loginname">
                    <img :src="url">
                  </a>
                  <span class="user_name"><a class="dark" :href="'/user/'+loginname">{{loginname}}</a></span>

                  <div class="board clearfix">
                    <div class="floor">
                      <span class="big">积分: 0 </span>
                    </div>
                  </div>
                  <div class="space clearfix"></div>
                  <span class="signature">
        “
            这家伙很懒，什么个性签名都没有留下。
        ”
    </span>
                </div>
              </div>
            </div>
          </div>
          <div slot="other">
            <div class="panel">
              <div class="header">
                <span class="col_fade">作者其他的话题</span>
              </div>
            </div>
            <div class="inners">
              <ul class="unstyled">
                <li v-for="item in other">
                  <div>
                    <a class="dark topic_title" :href="'/topic/'+item.id">
                      {{item.title}}
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </sidebar>
    </div>
  </div>
</template>

<script>
  import  sidebar from '@/components/sidebar/sidebar'
  export default {
    name: 'tab',
    components:{
      sidebar
    },
    data() {
      return {
        list: [],
        arr: [],
        length: 0,
        loginname: "",
        id: "",
        content: "",
        contents: "",
        url:'',
        share:null,
        other:''
      }
    },
    created() {
     this.route()

    },
    methods: {
      shares(index){
        this.share=index;
      },
      route() {
        let id = this.$route.params.userId
        console.log(id)
        this.axios.get(global.globalData.api + '/topic/' + id, {
          params: {
            mdrender: true,
            accesstoken: 'cc929971-cef8-4b8a-8275-3fd145914c31',
          }
        }).then((res) => {
          this.list = res.data.data;
          this.arr = this.list.replies;
          this.length = this.arr.length;
          this.loginname = this.list.author.loginname;
          this.url=this.list.author.avatar_url
          this.axios.get(global.globalData.api+'/user/' + this.loginname, {
            params: {}
          }).then((res) => {
            console.log(res.data.data.recent_topics)
            this.other=res.data.data.recent_topics;
          });
        });
      },

      submit() {
        this.list.is_collect = !this.list.is_collect;
        this.axios.post(global.globalData.api+'/topic_collect/collect', {
          accesstoken: 'cc929971-cef8-4b8a-8275-3fd145914c31',
          topic_id: this.list.id,
        }).then((res) => {
          console.log(res.data)
        })
      },
      unsubmit() {
        this.list.is_collect= !this.list.is_collect;
        this.axios.post(global.globalData.api+'/topic_collect/de_collect', {
          accesstoken: 'cc929971-cef8-4b8a-8275-3fd145914c31',
          topic_id: this.list.id,
        }).then((res) => {
          console.log(res.data)
        })
      },
      reply() {
        console.log(this.list.id)
        console.log(this.content)
        this.axios.post(global.globalData.api+'/topic/' + this.list.id + '/replies', {
          accesstoken: 'cc929971-cef8-4b8a-8275-3fd145914c31',
          content: this.content,
        }).then((res) => {
          this.content = ""
          console.log(res.data)
          this.route()
        })
      },
      replys(index) {
        console.log(this.arr[index].id)
        console.log(this.contents)
        this.axios.post(global.globalData.api+'/topic/' + this.list.id + '/replies', {
          accesstoken: 'cc929971-cef8-4b8a-8275-3fd145914c31',
          content: this.contents,
          reply_id: this.arr[index].id
        }).then((res) => {
          this.content = ""
          console.log(res.data)
          this.route()
          this.share=null;
        })
      },
      ups(index) {
        return this.arr[index].ups.length
      },
      link(id, index) {
        console.log(id, index)
        this.arr[index].is_uped=! this.arr[index].is_uped;
        this.axios.post(global.globalData.api+'/reply/' + id + '/ups', {
          accesstoken: 'cc929971-cef8-4b8a-8275-3fd145914c31',
        }).then((res) => {
          if (res.data.action == 'up') {
            this.arr[index].ups.push([]);
          } else if (res.data.action == 'down') {
            console.log("down")
            this.arr[index].ups.pop([]);
          }
        })
      }
    }
  }
</script>

<style lang="scss">
  .tab{
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: #e1e1e1;
  }
  .tab-left{
    width: 74%;
    background-color:white;
  }
  .tab-right{
    width: 25%;
    background-color: #e1e1e1;
  }
  .tab .header.topic_header, .panel .inner {
    background-color: #fff;
  }

  .tab .header {
    padding: 10px;
    background-color: #f6f6f6;
    border-radius: 3px 3px 0 0;
    border-bottom: 1px solid #e1e1e1;
  }

  .topic_full_title {
    font-size: 22px;
    font-weight: 700;
    margin: 8px 0;
    display: inline-block;
    vertical-align: bottom;
    width: 75%;
    line-height: 130%;
  }

  #content .changes {
    font-size: 12px;
    color: #838383;
  }

  .good, .top {
    background: #80bd01;
    padding: 2px 4px;
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -o-border-radius: 3px;
    color: #fff;
    font-size: 12px;
  }

  .changes > span:before {
    content: "•";
  }

  .topic_full_title > strong {
    font-size: 23px;
  }

  tab-html > .markdown-text {
    padding: 30px;
  }

  .markdown-text img {
    cursor: pointer;
    height: auto;
    max-width: 100%;
    vertical-align: middle;
    border: 0;
  }

  .tab p {
    font-size: 15px;
    line-height: 1.7em;
    overflow: auto;
  }

  .share {
    background-color: #e5e5e5;
    padding: 2px 4px;
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -o-border-radius: 3px;
    color: #fff;
    font-size: 12px;

  }

  .yy {
    width: 100%;
    height: 30px;
    background-color: #e1e1e1;
  }

  .cell.reply_highlight {
    background-color: #f4fcf0;
    border-bottom: 1px solid #e1e1e1;
  }

  .panel .cell {
    padding-right: 10px;
    background: #fff;
    border-top: 1px solid #f0f0f0;
  }

  .cell {
    position: relative;
    padding: 10px 0 10px 10px;
    font-size: 14px;
  }

  .author_content .user_avatar {
    display: inline-block;
    float: left;
  }

  a {
    color: #08c;
    text-decoration: none;
  }

  .user_info {
    margin-left: 10px;
    display: inline-block;
  }

  .user_action {
    float: right;
    margin-left: 20px;
    font-size: 15px;
  }

  .reply_content {
    padding-left: 50px;
    color: #333;
  }

  .span-success {
    border-radius: 3px;
    background-color: #80bd01;
    float: right;
  }

  .span-primary, .span-success {
    border: none;
    display: inline-block;
    float: none;
    padding: 3px 10px;
    margin: 0;
    font-size: 14px;
    transition: all .2s ease-in-out;
    letter-spacing: 2px;
    box-shadow: none;
    line-height: 2em;
    vertical-align: middle;
    color: #fff;
    cursor: pointer;
  }

  .span-common {
    display: inline-block;
    float: none;
    padding: 3px 10px;
    border: none;
    margin: 0;
    transition: all .2s ease-in-out;
    cursor: pointer;
    letter-spacing: 2px;
    border-radius: 3px;
    line-height: 2em;
    vertical-align: middle;
    background-color: #e5e5e5;
  }

  .user_avatar > img {
    width: 30px;
    height: 30px;
  }

  .span10 {
    width: 100%;
    height: 200px;
    margin-top: 10px;
  }

  .yys {
    background-color: #f6f6f6;
    padding: 10px;
  }

  .span-primary, .span-success {
    border: none;
    display: inline-block;
    float: none;
    padding: 3px 10px;
    margin: 0;
    font-size: 14px;
    transition: all .2s ease-in-out;
    letter-spacing: 2px;
    box-shadow: none;
    line-height: 2em;
    vertical-align: middle;
    color: #fff;
    cursor: pointer;
    border-radius: 3px;
    background-color: #08c;
  }
   .inners{
    padding: 10px;
    border-radius: 0 0 3px 3px;
    background-color: #fff;
    font-size: 13px;
  }
</style>
