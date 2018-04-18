<template>
  <div id="app">
    <am-topbar>
      <am-topbar-brand>
        <router-link to="/">
          <img width="120px"  src="https://o4j806krb.qnssl.com/public/images/cnodejs_light.svg" alt="">
        </router-link>
      </am-topbar-brand>
      <am-topbar-toggle></am-topbar-toggle>
      <am-topbar-collapse>
        <am-topbar-form>
          <am-form-group size="sm">
            <am-input placement="请输入要查询的内容"></am-input>
          </am-form-group>
        </am-topbar-form>
        <am-nav :pill="true" :topbar="true">
          <am-nav-item  :to="'/'">首页</am-nav-item>
          <am-nav-item  :to="'/my/messages'">
            <span class="noread" v-if="noread!=0">{{noread}}</span>
            未读消息
          </am-nav-item>
          <am-nav-item :to="'/getstart'">新手入门</am-nav-item>
          <am-nav-item :to="'/api'">api</am-nav-item>
          <am-nav-item :to="'/about'">关于</am-nav-item>
          <am-nav-item :to="'/signup'">注册</am-nav-item>
          <am-nav-item :to="'/signin'">登陆</am-nav-item>
        </am-nav>
      </am-topbar-collapse>
    </am-topbar>
    <div class="main">
      <div  class="view">
          <keep-alive>
            <router-view class="router-view"></router-view>
          </keep-alive>

      </div>
    </div>
    <div id="footer">
      <div id="footer_main">
        <div class="links">
          <a class="dark" href="/rss">RSS</a>
          |
          <a class="dark" href="https://github.com/cnodejs/egg-cnode/">源码地址</a>
        </div>
        <div class="col_fade">
          <p>CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p>
          <p>服务器赞助商为
            <a href="http://www.ucloud.cn/?utm_source=zanzhu&amp;utm_campaign=cnodejs&amp;utm_medium=display&amp;utm_content=yejiao&amp;ytag=cnodejs_logo" target="_blank" class="sponsor_outlink" data-label="ucloud_bottom">
              <img src="//dn-cnode.qbox.me/FuIpEaM9bvsZKnQ3QfPtBHWQmLM9" title="ucloud" alt="ucloud" width="92px">
            </a>
            ，存储赞助商为
            <a href="http://www.qiniu.com/?ref=cnode" target="_blank" class="sponsor_outlink" data-label="qiniu_bottom">
              <img src="//dn-cnode.qbox.me/Fg0jtDIcTqVC049oVu5-sn6Om4NX" title="七牛云存储" alt="七牛云存储" width="115px">
            </a>
            ，由<a href="https://www.aliyun.com/product/nodejs?ref=cnode" target="_blank" class="sponsor_outlink" data-label="alinode_bottom">
              <img src="//dn-cnode.qbox.me/FpMZk31PDyxkC8yStmMQL4XroaGD" title="alinode" alt="alinode" height="54px" width="166px">
            </a>提供应用性能服务。
          </p>
          <p>新手搭建 Node.js 服务器，推荐使用无需备案的 <a href="https://www.digitalocean.com/?refcode=eba02656eeb3">DigitalOcean(https://www.digitalocean.com/)</a></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

  export default {
    data () {
      return {
        noread:'',
      }
    },
    methods: {

    },
    created(){
      this.axios.get(global.globalData.api+'/message/count',{
        params: {
          accesstoken:'cc929971-cef8-4b8a-8275-3fd145914c31'
        }
      }).then((res)=>{
        console.log(res.data.data)
        this.noread=res.data.data;
      })
    }

  }
</script>

<style lang="scss" scoped="" type="text/css">

  html,body,#app{
    width: 100%;
    min-height: 100px;
    background-color: #e1e1e1;
    list-style-type: none;
  }
  .am-topbar{
    background: #443535 !important;
    padding:0 57px;
    margin-bottom:15px;
  }
  .am-form-inline .am-form-field{
    width:240px;
    border-radius:25px;
    height:25px;
    border:none;
    background: #5d5858;
  }
  .am-topbar-brand {
    line-height: 42px;
  }
  .am-topbar-form {
    margin-top: 13px;
  }
  .am-topbar-nav {
    float: right;
    margin-top: 0;
  }
  .main{
    width: 90%;
    max-width: 1400px;
    min-width: 960px;
    margin: 30px auto;
    .view{
      width: 100%;
      background: white;
      margin-bottom:40px;
       .router-view{
       }
    }
  }
  #footer {
    background: #fff;
  }
  #footer_main {
    width: 90%;
    max-width: 1400px;
    min-width: 960px;
    margin: 0 auto;
    color: #e2e2e2;
    padding: 20px 0;
    font-size: 13px;
    line-height: 2em;
  }
  #sidebar-mask {
    background-color: #333;
    width: 100%;
    height: 100%;
    filter: alpha(opacity=60);
    opacity: .6;
    z-index: 99;
    position: absolute;
    top: 0;
    left: 0;
    display: none;
  }
  body, input, p, textarea {
    font-size: 14px;
    word-break: break-word;
  }
  .noread{
    width: 20px;
    height: 20px;
    padding: 1px 5px;
    border-radius: 50%;
    background-color: #80bd01;
    color: #fff;
    margin-right: .5em;
  }
</style>
