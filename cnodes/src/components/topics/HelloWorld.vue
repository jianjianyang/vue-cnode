<template>
  <div class="Hellow">
    <div class="Hellow-left">
    <ul>
      <li v-for="item in data">
        <router-link :to="{query:{id:item.id}}">{{item.data}}</router-link>
      </li>
    </ul>
    <table class="am-table">
      <tbody>
      <tr v-for="(item,index) in list">
        <td>
          <router-link :to="/user/+item.author.loginname">
            <img :src="item.author.avatar_url">
          </router-link>
        </td>
        <td class="td_second">
          {{item.reply_count}}/{{item.visit_count}}
          <span v-if="item.top" class="top">置顶</span>
          <span v-if="'ask'===item.tab" class="share">问答</span>
          <span v-if="'share'===item.tab&&!item.top&&!item.good" class="share">分享</span>
          <span v-if="item.good" class="good">精华</span>
        </td>
        <td class="td_three">
          <router-link :to="'/topic/' + item.id">
            {{item.title}}
          </router-link>
        </td>
        <td class="td_four">
          <img :src="item.author.avatar_url">
          {{item.last_reply_at | isDate}}
        </td>
      </tr>
      </tbody>
    </table>
    <am-pagination :total="400" v-model="pageNum1" :page-size="5" @change="click"></am-pagination>
    </div>
    <div class="Hellow-right">
      <sidebar></sidebar>
    </div>

  </div>
</template>
<script>
  import  sidebar from '@/components/sidebar/sidebar'
  export default {
    name: 'HelloWorld',
    components:{
      sidebar
    },
    data() {
      return {
        data: [
          {id: 'all', data: "全部"},
          {id: 'good', data: "精华"},
          {id: 'share', data: "分享"},
          {id: 'ask', data: "问答"},
          {id: 'job', data: "招聘"},
          {id: 'dev', data: "客户端测试"},
        ],
        list: [],
        id: "",
        pageNum1: 1
      }
    },
    watch: {
      $route() {
        this.pageNum1 = 1
        this.click()
      }
    },
    methods: {
      click() {
        console.log(global.globalData)
        this.id = this.$route.query.id;
        this.axios.get(global.globalData.api + '/topics', {
          params: {
            limit: 40,
            tab: this.id,
            page: this.pageNum1
          }
        }).then((res) => {
          console.log(res.data.data)
          this.list = res.data.data
        });
      },
    },
    created() {
      this.pageNum1 = 1
      this.click()
    },
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .Hellow{
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: #e1e1e1;
  }
  .Hellow-left{
    width: 74%;
    background-color:white;
  }
  .Hellow-right{
    width: 25%;
    background-color: #e1e1e1;
  }
  sidebar{
    width: 30%;
  }
  ul {
    width: 100%;
    height: 40px;
    display: flex;
    line-height: 40px;
    background-color: #f6f6f6;
    list-style-type: none;
    li {
      width: 80px;
      height: 40px;
      color: white;
      text-align: center;
      a {
        width: 100%;
        height: 100%;
      }
    }
  }

  img {
    width: 30px;
    height: 30px;
  }

  .top, .good {
    display: inline-block;
    width: 32px;
    height: 18px;
    background: #80bd01;
    padding: 2px 4px;
    border-radius: 3px;
    color: #fff;
    font-size: 12px;
  }

  .share {
    display: inline-block;
    width: 32px;
    height: 18px;
    background-color: #e5e5e5;
    color: #999;
    padding: 2px 4px;
    border-radius: 3px;
    font-size: 12px;
  }

  .td_second {
    min-width: 130px;
  }

  .td_four {
    min-width: 110px;
  }

</style>
