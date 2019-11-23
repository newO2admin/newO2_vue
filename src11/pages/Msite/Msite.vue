<template>
  <div id="miste">
   <div class="top">
     <div class="topMain">
        <span class="cityName">北京</span>
        <span><i class="iconfont icon-caret-down"></i></span>
        <div  class="input">
          <span><i class="iconfont icon-search"></i></span>
        </div>
      </div>
     <img class="login-icon" src="//mstatic.soyoung.com/m/static/fe_m/view/home/img/login-713931fb83.png">
   </div>
    <nav class="msite_nav">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img class="swiper-lazy img swiper-lazy-loaded" src="https://img2.soyoung.com/upload/20191115/3/f165dbafc9fc366053daf74da2db7e15.png?imageView2/0/format/webp">
          </div>
          <div class="swiper-slide">
            <img class="swiper-lazy img swiper-lazy-loaded" src="https://img2.soyoung.com/upload/20191118/6/aab7bf58780bbbf605185e58c9749398.jpg?imageView2/0/format/webp">
          </div>
          <div class="swiper-slide">
            <img class="swiper-lazy img swiper-lazy-loaded" src="https://img2.soyoung.com/upload/20190828/8/30759ba66fc5ef672146880005e2ff04.jpg?imageView2/0/format/webp">
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </nav>
  </div>
</template>
<script type="text/ecmascript-6">
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
  export default {
    mounted(){
      new Swiper('.swiper-container', {
        autoplay: true,//可选选项，自动滑动
        pagination: {
          el: '.swiper-pagination',
        },
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
 #miste
  .top
    width 750px
    height 104px
    padding 20px
    display flex 
    box-sizing border-box
    .topMain
      display flex 
      .cityName
        vertical-align middle
        font-size 32px
      .input
        width 472px
        height 64px
        border-radius 20px
        line-height 64px
        background #eee
        .iconfont
          display flex
          width 10px
          height 10px
          z-index 3
          color red
    .login-icon
      margin-left 20px
      width 60px
      height 60px
    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 260px
      background #fff
      box-sizing border-box !import
      padding 0 60px
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
            height 100%
            border-radius 20px
          .swiper-pagination
            width 10px
            height 2px

</style>
