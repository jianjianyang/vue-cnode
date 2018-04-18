<template>
  <div>
    <div id="sidebar">

      <!--<div class="panel">-->

      <!--<div class="inner">-->
      <!--<p>CNode：Node.js专业中文社区</p>-->

      <!--<div>-->
      <!--您可以-->
      <!--<a href="/signin">登录</a>-->
      <!--或-->
      <!--<a href="/signup">注册</a>-->
      <!--, 也可以-->
      <!--<a href="/passport/github">-->
      <!--<span class="span-info">-->
      <!--通过 GitHub 登录-->
      <!--</span>-->
      <!--</a>-->
      <!--</div>-->
      <!--</div>-->

      <!--</div>-->
      <div class="panel" >
        <slot name="slide-header">
        <div class="header">
          <span class="col_fade">个人信息</span>
        </div>
        <div class="inner">
          <div class="user_card">
            <div>
              <a class="user_avatar" href="/user/jianjianyang">
                <img src="https://avatars1.githubusercontent.com/u/37734926?v=4&amp;s=120" title="jianjianyang">
              </a>
              <span class="user_name"><a class="dark" href="/user/jianjianyang">jianjianyang</a></span>

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
        </slot>
      </div>
      <div class="panel">
        <div class="inner">
          <a href="/create" id="create_topic_btn">
            <span class="span-success">发布话题</span>
          </a>
        </div>
      </div>

      <div class="panel">
        <div class="inner ads">


          <a href="https://render.alipay.com/p/s/taobaonpm_click/image_click_25" target="_blank"
             class="banner sponsor_outlink" data-label="aliyun">
            <img src="//dn-cnode.qbox.me/Fu6b5DIbI_Va2i5oFjIByRGizFuP">
          </a>


          <div class="sep10"></div>

          <a
            href="http://www.ucloud.cn/site/active/gift.html?utm_source=cnodejs&amp;utm_medium=content_pic_pc&amp;utm_campaign=multicloud&amp;utm_content=gift&amp;ytag=cnodejs"
            target="_blank" class="banner sponsor_outlink" data-label="ucloud-banner">
            <img src="//dn-cnode.qbox.me/FgQS-GQDfqwAD_v0NuhyYUOUk5MG">
          </a>


          <div class="sep10"></div>

          <a href="https://0x7.me/UDyj" target="_blank" class="banner sponsor_outlink" data-label="qiniu-sidebar">
            <img src="//dn-cnode.qbox.me/Fv9R31Y6ySKKJi95ldk9TRkJ7o5O">
          </a>


          <div class="sep10"></div>

          <a href="https://enhancer.io" target="_blank" class="banner sponsor_outlink" data-label="enhancer.io">
            <img src="//dn-cnode.qbox.me/Fq72q-0Z18wsDDuHAHsUik1PlIeK">
          </a>


          <div class="sep10"></div>

          <a href="https://www.aliyun.com/product/nodejs?ref=cnode" target="_blank" class="banner sponsor_outlink"
             data-label="alinode">
            <img src="//dn-cnode.qbox.me/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_">
          </a>

        </div>
      </div>

     <slot name="other"></slot>
      <div class="panel">
        <div class="header">
          <span class="col_fade">无人回复的话题</span>
        </div>
        <div class="inner">

          <ul class="unstyled">
            <li v-for="item in arr">
              <div>
                <a class="dark topic_title" :href="'/topic/'+item.id">
                  {{item.title}}
               </a>
              </div>
            </li>
          </ul>

        </div>
      </div>


      <div class="panel">
        <div class="header">
          <span class="col_fade">积分榜</span>
          &nbsp;
          <a class="dark" href="/users/top100">TOP 100 &gt;&gt;</a>
        </div>
        <div class="inner">

          <ul>

            <li>
              <span class="top_score">20925</span>
              <span class="user_name"><a href="/user/i5ting">i5ting</a></span>
            </li>


            <li>
              <span class="top_score">14840</span>
              <span class="user_name"><a href="/user/alsotang">alsotang</a></span>
            </li>


            <li>
              <span class="top_score">9345</span>
              <span class="user_name"><a href="/user/leapon">leapon</a></span>
            </li>


            <li>
              <span class="top_score">8750</span>
              <span class="user_name"><a href="/user/jiyinyiyong">jiyinyiyong</a></span>
            </li>


            <li>
              <span class="top_score">6880</span>
              <span class="user_name"><a href="/user/yakczh">yakczh</a></span>
            </li>


            <li>
              <span class="top_score">6295</span>
              <span class="user_name"><a href="/user/im-here">im-here</a></span>
            </li>


            <li>
              <span class="top_score">5970</span>
              <span class="user_name"><a href="/user/DevinXian">DevinXian</a></span>
            </li>


            <li>
              <span class="top_score">5315</span>
              <span class="user_name"><a href="/user/magicdawn">magicdawn</a></span>
            </li>


            <li>
              <span class="top_score">5310</span>
              <span class="user_name"><a href="/user/atian25">atian25</a></span>
            </li>


            <li>
              <span class="top_score">4740</span>
              <span class="user_name"><a href="/user/captainblue2013">captainblue2013</a></span>
            </li>


          </ul>

        </div>
      </div>


      <div class='panel'>
        <div class='header'>
          <span class='col_fade'>友情社区</span>
        </div>
        <div class='inner'>
          <ul class="friendship-community">
            <li>
              <a href="https://ruby-china.org/" target="_blank">
                <img src="//o4j806krb.qnssl.com/public/images/ruby-china-20150529.png">
              </a>
            </li>
            <div class="sep10"></div>
            <li>
              <a href="http://golangtc.com/" target="_blank">
                <img src="//o4j806krb.qnssl.com/public/images/golangtc-logo.png">
              </a>
            </li>
            <div class="sep10"></div>
            <li>
              <a href="http://phphub.org/" target="_blank">
                <img src="//o4j806krb.qnssl.com/public/images/phphub-logo.png">
              </a>
            </li>
            <div class="sep10"></div>
            <li>
              <a href="https://testerhome.com/" target="_blank">
                <img src="//dn-cnode.qbox.me/FjLUc7IJ2--DqS706etPQ1EGajxK">
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="panel">
        <div class="header">
          <span class="col_fade">客户端二维码</span>
        </div>
        <div class="inner cnode-app-download">
          <img width="200" src="//dn-cnode.qbox.me/FtG0YVgQ6iginiLpf9W4_ShjiLfU">
          <br>
          <a href="https://github.com/soliury/noder-react-native" target="_blank">客户端源码地址</a>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "sidebar",
    data(){
      return{
        list:"",
        arr:''
      }
    },
    created(){
      this.axios.get(global.globalData.api + '/topics', {
        params: {
          limit: 50,
        }
      }).then((res) => {
        console.log(res.data.data)
        this.list=res.data.data;
        this.arr=this.list.filter((i)=>{
          return i.reply_count==0;
        })
        console.log(this.arr)
      });

    }
  }
</script>

<style scoped lang="scss">
  ul{
    list-style-type: none;
  }
  .panel .inner {
    padding: 10px;
    border-radius: 0 0 3px 3px;
    background-color: #fff;
    font-size: 13px;
  }

  .panel .inner {
    color: black;
  }

  .panel .inner, .panel .inner li {
    line-height: 2em;
    text-overflow: ellipsis;
  }

  li a {
    color: black;
  }

  .panel {
    margin-bottom: 13px;
  }

  #sidebar {
    width: 100%;
    font-size: 14px;
    float: right;
    margin-bottom: 20px;
  }

  p {
    display: block;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
  }

  body, input, p, textarea {
    font-size: 14px;
    word-break: break-word;
  }

  #body-you {
    padding-left: 0;
    padding-right: 0;
  }

  .inner img {
    height: auto;
    max-width: 100%;
    vertical-align: middle;
    border: 0;
  }

  .topic_title {
    max-width: 98%;
    -o-text-overflow: ellipsis;
    white-space: nowrap;
    display: inline-block;
    vertical-align: middle;
    color: black;
    font-size: 14px;
    text-overflow: ellipsis;
    overflow: hidden;
    line-height: 30px;
  }

  ul {
    padding-left: 0 !important;
  }

  #sidebar .header {
    color: #51585c;
    border-radius: 3px 3px 0 0;
    padding: 10px;
    background-color: #f6f6f6;
  }

  .friendship-community img {
    width: 50%;
  }

  ol {
    padding-left: 0 !important;
  }

  .cnode-app-download {
    text-align: center;
  }

  .user_card .user_avatar img {
    width: 48px;
    height: 48px;
  }
  .friendship-community img {
    width: 150px;
  }
  .panel .inner .friendship-community li {
    line-height: 4em;
  }
</style>
