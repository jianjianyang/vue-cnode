<template>
  <div class="about">
    <div class="about-left">
      <div class="panel">
        <div class="header">
          <ul class="breadcrumb">
            <li><a href="/">主页</a><span class="divider">/</span></li>
            <li class="active">关于</li>
          </ul>
        </div>
        <div class="inner topic">
          <div class="topic_content">
            <div class="markdown-text"><h3>关于</h3>
              <p>CNode 社区为国内最大最具影响力的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p>
              <p>CNode 社区由一批热爱 Node.js 技术的工程师发起，目前已经吸引了互联网各个公司的专业技术人员加入，我们非常欢迎更多对 Node.js 感兴趣的朋友。</p>
              <p>CNode 的 SLA 保证是，一个9，即 90.000000%。</p>
              <p>社区目前由 <a href="http://cnodejs.org/user/alsotang" target="_blank">@alsotang</a> 在维护，有问题请联系：<a
                href="https://github.com/alsotang" target="_blank">https://github.com/alsotang</a></p>
              <p>请关注我们的官方微博：<a href="http://weibo.com/cnodejs" target="_blank">http://weibo.com/cnodejs</a></p>
              <h3>移动客户端</h3>
              <p>客户端由 <a href="https://cnodejs.org/user/soliury" target="_blank">@soliury</a> 开发维护。</p>
              <p>源码地址： <a href="https://github.com/soliury/noder-react-native" target="_blank">https://github.com/soliury/noder-react-native</a>
                。</p>
              <p>立即体验 CNode 客户端，直接扫描页面右侧二维码。</p>
              <p>另，安卓用户同时可选择：<a href="https://github.com/TakWolf/CNode-Material-Design" target="_blank">https://github.com/TakWolf/CNode-Material-Design</a>
                ，这是 Java 原生开发的安卓客户端。</p>
            </div>

            <div class="about-friend-links">
              <h3>友情链接</h3>

              <a href="https://www.huoban.com/" target="_blank">
                <img src="//dn-cnode.qbox.me/Ftmw28ed0I_rir7YYz3c_jVPkCGx">
              </a>

              <a href="http://100offer.com/" target="_blank">
                <img src="//dn-cnode.qbox.me/FmU1Ik57z6wrl9JDTNdcYBTDetFq">
              </a>

              <a href="https://www.teambition.com/" target="_blank">
                <img src="//dn-cnode.qbox.me/FkMR_SqpCp4Q0eDIaWrQlALiXdmP">
              </a>

              <a href="http://yunzhihui.com/" target="_blank">
                <img src="//dn-cnode.qbox.me/Fq2cV_14IFHwelZ-6jey42Z0-eOR">
              </a>

              <a href="http://www.jiguang.cn/" target="_blank">
                <img src="//dn-cnode.qbox.me/FijGJbij9GObh5AXw-Vyu5LGn08a">
              </a>

              <a href="http://segmentfault.com/" target="_blank">
                <img src="//o4j806krb.qnssl.com/public/images/temp/sf.png">
              </a>

              <a href="http://ionichina.com/" target="_blank">
                <img src="//o4j806krb.qnssl.com/public/images/temp/ionichina.png">
              </a>

            </div>

            <div class="">
              <h3>LOGO</h3>
              <p>
                白底： <a href="/public/images/cnodejs.svg" target="_blank">/public/images/cnodejs.svg</a>
              </p>
              <p>
                黑底： <a href="/public/images/cnodejs_light.svg" target="_blank">/public/images/cnodejs_light.svg</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="about-right">
      <sidebar></sidebar>
    </div>
  </div>
</template>

<script>
  import  sidebar from '@/components/sidebar/sidebar'
  export default {
    name: "about",
    components:{
      sidebar
    }
  }
</script>

<style scoped lang="scss">
  .about{
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: #e1e1e1;
  }
  .about-left{
    width: 74%;
    background-color:white;
  }
  .about-right{
    width: 25%;
    background-color: #e1e1e1;
  }
  .panel {
    margin: 0 auto;
    .header {
      width: 100%;
      height: 40px;
      padding: 10px;
      background-color: #f6f6f6;
      border-radius: 3px 3px 0 0;
      .breadcrumb {
        list-style-type: none;
        display: flex;
        .active {
          margin-left: 14px;
          color: #999
        }
      }
    }
  }

  .topic_content {
    padding: 10px;
    border-top: 1px solid #e5e5e5;
    margin: 30px 0 15px;
    border-bottom: 1px solid #eee;
    color: inherit;

  }

  .topic_content h3 {
    font-size: 26px;
    font-weight: bold;
    margin: 30px 0 15px;
    border-bottom: 1px solid #eee;
  }

  .topic_content p {
    font-size: 15px;
    line-height: 1.7em;
    overflow: auto;
  }

  .about-friend-links img {
    width: 250px;
    height: 60px;
  }
</style>
