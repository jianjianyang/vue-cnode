<template>
  <div class="replies">
    <div class="replies-left">
      <div class="panel">
        <div class="header">
          <ul class="breadcrumb">
            <li>
              <a href="/">主页</a><span class="divider">/</span>
              <a :href="'/user/'+list.loginname">{{list.loginname}}的主页</a>
            </li>
          </ul>
        </div>
        <div class="yy"></div>
        <div class="panel">
          <div class="header">
            <span class="col_fade">{{list.loginname}}参与的话题</span>
          </div>
          <div class="inner">
            <div class="cell" v-if="length==0">
              <p>无话题</p>
            </div>
            <div class="cell" v-for="item in arr">
              <a class="user_avatar pull-left" :href="'/user/'+item.author.loginname">
                <img :src="item.author.avatar_url">
              </a>
              <span class="reply_count pull-left">
    <span class="count_of_replies" title="回复数">
      12
    </span>
    <span class="count_seperator">/</span>
    <span class="count_of_visits" title="点击数">
      3150
    </span>
  </span>
              <a class="last_time pull-right" href="/topic/5abda42674fe2526d62220d4#5ac9cc37729b245529cb58a4">
                <img class="user_small_avatar" src="https://avatars1.githubusercontent.com/u/17040010?v=4&amp;s=120">
                <span class="last_active_time">{{item.last_reply_at | isDate}}</span>
              </a>
              <div class="topic_title_wrapper">

                <a class="topic_title" :href="'/topic/'+item.id" :title="item.title">
                  {{item.title}}
                </a>
              </div>
            </div>
            <div class="cell" v-if="length!=0">
              <am-pagination :total="10" v-model="pageNum1"></am-pagination>
            </div>

          </div>

        </div>
      </div>
    </div>
    <div class="replies-right">
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
      </sidebar>
    </div>

  </div>
</template>

<script>
  import  sidebar from '@/components/sidebar/sidebar'
  export default {
    name: "topics",
    components:{
      sidebar
    },
    data() {
      return {
        list: '',
        arr: '',
        length: '',
        loginname: '',
        pageNum1: 0,
        url:''
      }
    },
    created() {
      let id = this.$route.params.userId
      console.log(id)
      this.axios.get(global.globalData.api + '/user/' + id, {
        params: {}
      }).then((res) => {
        this.list = res.data.data
        console.log(this.list);
        this.loginname = this.list.loginname
        this.arr = this.list.recent_replies
        this.length = this.arr.length
        this.url=this.list.avatar_url
        console.log(this.lengths)
      });
    },
  }
</script>

<style scoped lang="scss">
  .replies{
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: #e1e1e1;
  }
  .replies-left{
    width: 74%;
    background-color:white;
  }
  .replies-right{
    width: 25%;
    background-color: #e1e1e1;
  }
  .panel {


    .header {
      width: 100%;
      height: 40px;
      padding: 10px;
      background-color: #f6f6f6;
      border-radius: 3px 3px 0 0;
    }
    .inner.userinfo {
      padding: 10px;
      border-top: 1px solid #e5e5e5;
      background-color: #fff;
      line-height: 2em;
    }
  }

  .user_big_avatar img {
    width: 40px;
    height: 40px;
    border-radius: 3px;
  }

  .user_big_avatar {
    float: left;
    margin-right: 10px;
  }

  .user_profile {
    margin-top: 20px;
    clear: left;
  }

  .unstyled {
    margin-left: 0;
    list-style: none;
    padding: 0;
    margin: 0 0 10px 25px;
  }

  .col_fade {
    color: #ababab;
  }

  .yy {
    width: 100%;
    height: 30px;
    background-color: #e1e1e1;
  }

  .panel .cell {
    padding-right: 10px;
    background: #fff;
    border-top: 1px solid #f0f0f0;
    position: relative;
    padding: 10px 0 10px 10px;
    font-size: 14px;
    border-bottom: 1px solid #e1e1e1;
  }

  .pull-left {
    float: left;
  }

  .cell .reply_count {
    width: 70px;
    display: inline-block;
    text-align: center;
  }

  .pull-left {
    float: left;
  }

  a.topic_title {
    max-width: 70%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: inline-block;
    vertical-align: middle;
    font-size: 16px;
    line-height: 30px;
  }

  .last_time .user_small_avatar {
    height: 18px;
    width: 18px;
    vertical-align: middle;
    margin-right: .5em;
    border-radius: 3px;
  }

  .last_time .last_active_time {
    text-align: right;
    min-width: 50px;
    display: inline-block;
    white-space: nowrap;
  }

  .last_time {
    font-size: 11px;
    display: inline-block;
    margin-left: 20px;
    color: #777;
  }

  .user_avatar img {
    width: 30px;
    height: 30px;
    border-radius: 3px;
  }

  .topic_title_wrapper {
    white-space: nowrap;
  }

  a.topic_title {
    max-width: 70%;
    white-space: nowrap;
    display: inline-block;
    vertical-align: middle;
    font-size: 16px;
    line-height: 30px;
    color: #08c;
    text-decoration: none;
  }

  a.last_time {
    text-decoration: none;
    margin-right: 8px;
  }

  .pull-right {
    float: right;
  }

  .last_time {
    font-size: 11px;
    display: inline-block;
    margin-left: 20px;
    color: #777;
  }
</style>

