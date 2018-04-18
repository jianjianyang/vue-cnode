<template>
  <div class="messages">
    <div class="messages-left">
    <div class="panel">
      <div class="header">
        <ul class="breadcrumb">
          <li>
            <a href="/">主页</a><span class="divider">/</span>
            <a>新消息</a>
          </li>
        </ul>
      </div>
      <div class="cell" v-for="item in hasnot">
		<span>
			<a :href="'/user/'+item.author.loginname" target="_blank" @click="hasread(item.id)">{{item.author.loginname}}</a>
			在话题
			<a :href="'/topic/'+item.topic.id" target="_blank" @click="hasread(item.id)"
      >这是一个测试</a>
			中@了你
		</span>
      </div>
      <div class="inner" v-if="length==0">
        <p>无消息</p>
      </div>
    </div>
    <div class="yy"></div>
    <div class="panel">
      <div class="header">
        <span class="col_fade">过往消息</span>
      </div>
      <div class="cell" v-for="item in has">
		<span>
			<a href="/user/dingding12" target="_blank">{{item.author.loginname}}</a>
			在话题
			<a :href="'/topic/'+item.topic.id" target="_blank">这是一个测试</a>
			中@了你
		</span>
      </div>
    </div>
    </div>
    <div class="messages-right">
           <sidebar></sidebar>
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
        has: '',
        hasnot: '',
        length: ''
      }
    },
    created() {
      this.axios.get(global.globalData.api + '/messages', {
        params: {
          accesstoken: 'cc929971-cef8-4b8a-8275-3fd145914c31'
        }
      }).then((res) => {
        console.log(res.data.data);
        this.has = res.data.data.has_read_messages;
        this.hasnot = res.data.data.hasnot_read_messages;
        this.length = this.hasnot.length
      });
      this.axios.post(global.globalData.api+"/message/mark_all" , {
        accesstoken: 'cc929971-cef8-4b8a-8275-3fd145914c31'
      }).then((res) => {
        console.log(res)
      });
    },
    methods: {
      hasread(id) {
        console.log(id)
        this.axios.post(global.globalData.api+'/message/mark_one/' + id, {
          accesstoken: 'cc929971-cef8-4b8a-8275-3fd145914c31'
        }).then((res) => {
          console.log(res)
        })
      }
    },
  }
</script>
<style scoped lang="scss">
  ul {
    list-style-type: none;
  }
  .messages{
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: #e1e1e1;
  }
  .messages-left{
    width: 74%;
    background-color:white;
  }
  .messages-right{
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
    .inner p {
      padding: 10px;
      border-top: 1px solid #e5e5e5;
      background-color: #fff;
      line-height: 2em;
    }
  }

  .yy {
    width: 100%;
    height: 30px;
    background-color: #e1e1e1;
  }

  .panel .cell {
    width: 95.7%;
    padding-right: 10px;
    background: #fff;
    border-top: 1px solid #f0f0f0;
    position: relative;
    padding: 10px 0 10px 10px;
    font-size: 14px;
    border-bottom: 1px solid #e1e1e1;
  }
</style>

