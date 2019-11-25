<template>
  <div id="miste">
   <div class="top">
     <div class="topMain">
        <span class="cityName">北京市></span>
        <span><i class="iconfont icon-caret-down"></i></span>
        <div  class="input">
          <span><i class="iconfont icon-search"></i></span>
          <span class="title">瘦脸针</span>
        </div>
      </div>
     <img class="login-icon" src="//mstatic.soyoung.com/m/static/fe_m/view/home/img/login-713931fb83.png">
   </div>
   <!-- 轮播图 -->
    <nav class="msite_nav">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img class="imgItem" src="https://img2.soyoung.com/upload/20191115/3/f165dbafc9fc366053daf74da2db7e15.png?imageView2/0/format/webp">
          </div>
          <div class="swiper-slide">
            <img class="imgItem" src="https://img2.soyoung.com/upload/20191118/6/aab7bf58780bbbf605185e58c9749398.jpg?imageView2/0/format/webp">
          </div>
          <div class="swiper-slide">
            <img class="imgItem" src="https://img2.soyoung.com/upload/20190828/8/30759ba66fc5ef672146880005e2ff04.jpg?imageView2/0/format/webp">
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </nav>
    <!-- 导航小图标 -->
    <nav class="msite_nav_ico">
      <div class="swiper-container ico_container">
        <div class="swiper-wrapper ico_wrapper">
          <div class="swiper-slide ico_slide">
            <a href="javascript:" class="link_to_pro" @click="goPath('/categroy')">
              <div class="pro_container">
                <img src="../../assets/images/nav/1.webp">
              </div>
              <span>面部跳转</span>
            </a>
            <a href="javascript:" class="link_to_pro"  @click="goPath('/detail')">
              <div class="pro_container">
                <img src="../../assets/images/nav/2.webp">
              </div>
              <span>面部详情</span>
            </a>
            <a href="javascript:" class="link_to_pro">
              <div class="pro_container">
                <img src="../../assets/images/nav/3.webp">
              </div>
              <span>面部轮廓</span>
            </a>
            <a href="javascript:" class="link_to_pro">
              <div class="pro_container">
                <img src="../../assets/images/nav/4.webp">
              </div>
              <span>面部轮廓</span>
            </a>
            <a href="javascript:" class="link_to_pro">
              <div class="pro_container">
                <img src="../../assets/images/nav/5.webp">
              </div>
              <span>面部轮廓</span>
            </a>
            <a href="javascript:" class="link_to_pro">
              <div class="pro_container">
                <img src="../../assets/images/nav/1.webp">
              </div>
              <span>面部轮廓</span>
            </a>
            <a href="javascript:" class="link_to_pro">
              <div class="pro_container">
                <img src="../../assets/images/nav/2.webp">
              </div>
              <span>面部轮廓</span>
            </a>
            <a href="javascript:" class="link_to_pro">
              <div class="pro_container">
                <img src="../../assets/images/nav/3.webp">
              </div>
              <span>面部轮廓</span>
            </a>
            <a href="javascript:" class="link_to_pro">
              <div class="pro_container">
                <img src="../../assets/images/nav/4.webp">
              </div>
              <span>面部轮廓</span>
            </a>
            <a href="javascript:" class="link_to_pro">
              <div class="pro_container">
                <img src="../../assets/images/nav/5.webp">
              </div>
              <span>面部轮廓</span>
            </a>
          </div>
          <div class="swiper-slide ico_slide">
            <a href="javascript:" class="link_to_pro">
              <div class="pro_container">
                <img src="../../assets/images/nav/1.webp">
              </div>
              <span>面部轮廓</span>
            </a>
            <a href="javascript:" class="link_to_pro">
              <div class="pro_container">
                <img src="../../assets/images/nav/2.webp">
              </div>
              <span>面部轮廓</span>
            </a>
            <a href="javascript:" class="link_to_pro">
              <div class="pro_container">
                <img src="../../assets/images/nav/3.webp">
              </div>
              <span>面部轮廓</span>
            </a>
            <a href="javascript:" class="link_to_pro">
              <div class="pro_container">
                <img src="../../assets/images/nav/4.webp">
              </div>
              <span>面部轮廓</span>
            </a>
            <a href="javascript:" class="link_to_pro">
              <div class="pro_container">
                <img src="../../assets/images/nav/5.webp">
              </div>
              <span>面部轮廓</span>
            </a>
            <a href="javascript:" class="link_to_pro">
              <div class="pro_container">
                <img src="../../assets/images/nav/1.webp">
              </div>
              <span>面部轮廓</span>
            </a>
            <a href="javascript:" class="link_to_pro">
              <div class="pro_container">
                <img src="../../assets/images/nav/2.webp">
              </div>
              <span>面部轮廓</span>
            </a>
            <a href="javascript:" class="link_to_pro">
              <div class="pro_container">
                <img src="../../assets/images/nav/3.webp">
              </div>
              <span>面部轮廓</span>
            </a>
            <a href="javascript:" class="link_to_pro">
              <div class="pro_container">
                <img src="../../assets/images/nav/4.webp">
              </div>
              <span>面部轮廓</span>
            </a>
            <a href="javascript:" class="link_to_pro">
              <div class="pro_container">
                <img src="../../assets/images/nav/5.webp">
              </div>
              <span>面部轮廓</span>
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </nav>
    <!-- 导航小广告 -->
    <nav class="nav_ad wrapper"> 
      <ul class="ad_list content">
        <li class="ad_item" @click="goPath('/cyclopedia')">
          <div class="title">医美百科</div>
          <div class="subtitle">项目知识</div>
        </li>
        <li class="ad_item" @click="goPath('/sjld')">
          <div class="title">美丽日记</div>
          <div class="subtitle">项目知识</div>
        </li>
        <li class="ad_item">
          <div class="title">医美百科</div>
          <div class="subtitle">项目知识</div>
        </li>
        <li class="ad_item">
          <div class="title">医美百科</div>
          <div class="subtitle">项目知识</div>
        </li>
        <li class="ad_item">
          <div class="title">医美百科</div>
          <div class="subtitle">项目知识</div>
        </li>
        <li class="ad_item">
          <div class="title">医美百科</div>
          <div class="subtitle">项目知识</div>
        </li>
      </ul>
    </nav>
    <!-- 广告图片 -->
    <div class="imgAd">
      <img src="../../assets/images/ad/imgAd.png" alt="">
    </div>
    <!-- 底部横向滑动 -->
    <div class="feed-tab">
      <div class="tab">
        <ul class="tabList">
          <li class="tabItem" 
          :class="{active:show===index}" 
          v-for="(footItem, index) in datas" :key="index" 
          @click="toShow(index)"
          >
           <span>{{footItem}}</span>
          </li>
        </ul>
      </div>
    </div>
    <!-- 底部内容 -->
    <Footer/>
    <div class="footText">没有更多....</div>
  </div>
</template>
<script type="text/ecmascript-6">
import Swiper from 'swiper'
import BScroll from 'better-scroll'
import 'swiper/css/swiper.min.css'

import Footer from '../../components/Footer/Footer'
import datas from '../../data/foot.json'
import footDatas from '../../data/footItem.json'
  export default {
    components:{
      Footer
    },
    data(){
      return {
        show: 0,
        datas:[],
        lFootDatas:[],
        rFootDatas:[]
      }
    },
    mounted(){
      // this.$store.dispatch('getFootItemAction')
      this.datas = datas
      new BScroll('.wrapper', {
        scrollX: true,
        click:true
      })
      new BScroll('.tab', {
        scrollX: true,
        click:true
      })
      new Swiper('.swiper-container', {
        autoplay: true,//可选选项，自动滑动
        pagination: {
          el: '.swiper-pagination',
        },
      })
      new Swiper('.ico_container', {
        pagination: {
          el: '.swiper-pagination',
        },
      })
    },
    methods:{
      goPath(path){
        this.$router.replace(path)
      },
      toShow(index){
        this.show = index
        // this.$router.replace(`/msite/${index}`)
      }
    },
    computed:{
    
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../assets/stylus/mixins.styl"
 #miste
  .top
    width 750px
    height 104px
    padding 20px
    display flex 
    box-sizing border-box
    position fixed
    top 0px
    left 0px
    z-index 5
    background #fff
  .topMain
    display flex 
    .cityName
      vertical-align middle
      position relative
      top 10px
      font-size 32px
      .iconfont
        position absolute
        left 0px
        top 10px
        margin-top 10px
    .input
      width 472px
      height 64px
      position relative
      border-radius 20px
      line-height 64px
      background #eee
      margin-left 10px
      .iconfont
        display block
        position absolute
        left 5px
        top 0px
        width 10px
        height 10px
        z-index 6
        color grey
        // background red
      .title
        display block
        margin-left 40px
        color grey
  .login-icon
    margin-left 30px
    position absolute
    right 40px
    top 20px
    width 60px
    height 60px
  .msite_nav
    margin-top 104px
    height 260px
    background #fff
    box-sizing border-box 
    .swiper-container
      width 690px
      height 240px
      .swiper-wrapper
        width 690px
        height 240px
        .swiper-slide
          display flex
          justify-content center
          align-items flex-start
          flex-wrap wrap
          width 690px
          height 240px
          .imgItem
            border-radius 20px
            width 690px
            height 240px
  .msite_nav_ico
    width 100%
    height 268px
    .ico_container
      width 100%
      height 100%
      .ico_wrapper
        width 100%
        height 100%
        .ico_slide
          display flex
          justify-content center
          align-items flex-start
          flex-wrap wrap
          height 100%
          overflow hidden
          .link_to_pro
            width 20%
            .pro_container
              display block
              width 100%
              text-align center
              padding-bottom 10px
              font-size 0
              img
                margin-top 10px
                display inline-block
                width 80px
                height 80px
            span
                display block
                width 100%
                text-align center
                font-size 13px
  .nav_ad  
    margin-top 10px
    width 100%
    height 116px
    padding 40px
    position relative
    overflow hidden
    .ad_list
      display flex
      padding-right 20px
      // word-wrap normal
      position absolute
      left 0
      top 0
      .ad_item
        width 190px
        height 100px
        // background pink
        border-radius 20px
        box-shadow: 0 4.5px 12px 0 rgba(0, 0, 0, 0.1);
        padding 20px
        margin-left 20px
        border 1px solid #eee
        &:nth-child(1)
          background-image url(//mstatic.soyoung.com/m/static/fe_m/view/home/img/wiki-06085b14f7.png) 
          background-repeat no-repeat
          background-position 135px 50px 
          background-size 50px
        &:nth-child(2)
          background-image url(//mstatic.soyoung.com/m/static/fe_m/view/home/img/diary-9600fbed24.png) 
          background-repeat no-repeat
          background-position 135px 50px 
          background-size 50px
        &:nth-child(3)
          background-image url(//mstatic.soyoung.com/m/static/fe_m/view/home/img/doctor-5b5ac5d1d3.png) 
          background-repeat no-repeat
          background-position 135px 50px 
          background-size 50px
        &:nth-child(4)
          background-image url(//mstatic.soyoung.com/m/static/fe_m/view/home/img/wiki-06085b14f7.png) 
          background-repeat no-repeat
          background-position 135px 50px 
          background-size 50px
        &:nth-child(5)
          background-image url(//mstatic.soyoung.com/m/static/fe_m/view/home/img/diary-9600fbed24.png) 
          background-repeat no-repeat
          background-position 135px 50px 
          background-size 50px
        &:nth-child(6)
          background-image url(//mstatic.soyoung.com/m/static/fe_m/view/home/img/doctor-5b5ac5d1d3.png) 
          background-repeat no-repeat
          background-position 135px 50px 
          background-size 50px
        .subtitle
          font-size 12px
          color #666
          font-family: PingFangSC-Regular, Arial, Helvetica, sans-serif;
        .title
          font-size 30px
          color #333
  .imgAd
    img
      display block
  .feed-tab
    width 100%
    height 94px
    background #eee
    position relative
    overflow hidden
    .tab
      white-space nowrap
      position absolute
      left 0
      top 0
      display flex
      width 730px
      height 74px
      // background yellowgreen
      margin 0 20px
      .tabList
        display flex
        .tabItem
          font-size 34px
          margin-left 20px
          height 74px
          line-height 74px
        .active
          z-index 3
          bottom-border-1px(#0FD3B3)
          font-size 38px
  
  .footText
    background #eee
    display block
    font-size 30px
    text-align center
    height 60px
    line-height 60px
</style>
