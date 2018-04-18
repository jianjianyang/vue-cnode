<template>
  <div class="edit">
    <div class="edit-left">
      <div class="panel">
        <div class="header">
          <ul class="breadcrumb">
            <li><a href="/">主页</a><span class="divider">/</span></li>

            <li class="active">发布话题{{aaa}}</li>

          </ul>
        </div>
        <div class="inner post">


          <form id="create_topic_form" method="post" v-on:submit.prevent="click">

            <fieldset>
              <span class="tab-selector">选择版块：</span>
              <select name="tab" id="tab-value" v-model="value" >
                <option value="">请选择</option>

                <option value="share">分享</option>


                <option value="ask">问答</option>


                <option value="job">招聘</option>


                <option value="dev">客户端测试</option>


              </select>
              <span id="topic_create_warn"></span>
              <textarea autofocus="" class="span9" id="title" name="title" rows="1" placeholder="标题字数 10 字以上"
                        v-model="title"></textarea>
              <textarea autofocus="" class="span10" v-model="content"></textarea>
              <div class="editor_buttons">
                <input type="submit" class="span-primary submit_btn" data-loading-text="提交中" value="提交">
              </div>

            </fieldset>
          </form>
        </div>

      </div>
    </div>
    <div class="edit-right">
      <div id="sidebar">
        <div class="panel">
          <div class="header">
            <span class="col_fade">Markdown 语法参考</span>
          </div>
          <div class="inner">
            <ol>
              <li><tt>### 单行的标题</tt></li>
              <li><tt>**粗体**</tt></li>
              <li><tt>`console.log('行内代码')`</tt></li>
              <li><tt>```js\n code \n```</tt> 标记代码块</li>
              <li><tt>[内容](链接)</tt></li>
              <li><tt>![文字说明](图片链接)</tt></li>
            </ol>
            <span><a href="https://segmentfault.com/markdown" target="_blank">Markdown 文档</a></span>
          </div>
        </div>

        <div class="panel">
          <div class="header">
            <span class="col_fade">话题发布指南</span>
          </div>
          <div class="inner">
            <ol>
              <li>尽量把话题要点浓缩到标题里</li>
              <li>代码含义和报错可在 <a href="http://segmentfault.com/t/node.js">SegmentFault</a> 提问</li>
            </ol>
          </div>
        </div>

      </div>
    </div>
  </div>

</template>

<script>
  import  sidebar from '@/components/sidebar/sidebar'
  export default {
    name: "create",
    components:{
      sidebar
    },
    data() {
      return {
        title: '',
        content: '',
        id:'',
        value:''
      }
    },
    methods: {
      click() {
        this.axios.post(global.globalData.api + '/topics/update', {
          accesstoken: 'cc929971-cef8-4b8a-8275-3fd145914c31',
          title: this.title,
          topic_id:this.id,
          tab: 'dev',
          content:this.content
        }).then((res)=>{
          console.log(res)
          this.$router.push("/topic/"+res.data.topic_id)
        })
        this.title='';
        this.content=""
      }
    },
    created(){
      console.log(this.props)
      this.id = this.$route.params.userId
      console.log(this.id)
      this.axios.get(global.globalData.api + '/topic/' + this.id, {
        params: {
          mdrender:false
        }
      }).then((res) => {
        console.log(res.data.data);
        this.list = res.data.data;
        console.log(this.list)
        this.value = this.list.tab;
        this.title=this.list.title;
        this.content=this.list.content
      });
    }
  }
</script>
<style scoped lang="scss">
  .edit{
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: #e1e1e1;
  }
  .edit-left{
    width: 74%;
    background-color:white;
  }
  .edit-right{
    width: 25%;
    background-color:white;
  }
  .panel {
    margin-bottom: 13px;
  }

  .panel .header {
    padding: 10px;
    background-color: #f6f6f6;
    border-radius: 3px 3px 0 0;
  }

  .breadcrumb {
    padding: 0;
    margin: 0;
    border: none;
    background: 0 0;
    display: flex;
    list-style-type: none;
  }

  .breadcrumb > li {
    text-shadow: none;
  }

  .breadcrumb > .active {
    color: #999;
  }

  .panel .inner {
    padding: 10px;
    border-radius: 0 0 3px 3px;
  }

  form {
    margin: 0 0 20px;
  }

  select {
    width: 220px;
    border: 1px solid #ccc;
    height: 30px;
    line-height: 30px;
  }

  textarea#title {
    margin-top: 10px;
    width: 98%;
    height: 30px;
    border: 1px solid #ccc;
    border-radius: 10px;
  }

  .span10 {
    width: 100%;
    height: 200px;
    margin-top: 10px;
  }

  .span-primary {
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
</style>
