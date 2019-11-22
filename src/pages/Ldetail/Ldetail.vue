<template>
  <div id="Ldetail">
    <div class="header-nav">
      <div class="header-nav-item active">商品</div>
      <div class="header-nav-item">评价</div>
      <div class="header-nav-item">日记</div>
      <div class="header-nav-item">详情</div>
      <div class="header-nav-item">推荐</div>
    </div>
    <div class="swiper-container">
      <ul class="swiper-wrapper">
        <li class="swiper-slide">
          <img src="https://img2.soyoung.com/post/20190925/7/22b5750d3d36a672c6551acccac4aa10_400.png?imageView2/0/format/webp" alt="">
        </li>
        <li class="swiper-slide">
          <img src="https://img2.soyoung.com/post/20190910/1/f486a58ee5f25de04f81b538c0b2c5e9_400.png?imageView2/0/format/webp" alt="">
        </li>
        <li class="swiper-slide">
          <img src="https://img2.soyoung.com/post/20190925/8/375da5729721fb20ae7b82aa72c0a8e4_400.png?imageView2/0/format/webp" alt="">
        </li>
        <li class="swiper-slide">
          <img src="https://img2.soyoung.com/post/20190910/1/f486a58ee5f25de04f81b538c0b2c5e9_400.png?imageView2/0/format/webp" alt="">
        </li>
      </ul>
    </div>
    <div class="Ldetail-footer">
      <div class="footer-total">
        <div class="footer-total-top">
          <span>预约金 : </span>
          <span class="footer-total-top-number">
            <em>￥</em>2560
          </span>
          <span class="iconfont iconicontishi"></span>
        </div>
        <div class="footer-total-bottom">到院再付 ：￥ 998</div>
      </div>
      <div class="footer-order">提交订单</div>
      <div class="footer-msg">
        <div class="iconfont iconzixun nanan"></div>
        <div class="enen">咨询</div>
      </div>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'
  import 'swiper/css/swiper.min.css'
  export default {
    mounted(){
      new Swiper('.swiper-container',{
        autoplay: true,//可选选项，自动滑动
        
      })

      console.log('xxxx')
    }
  }
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
  #Ldetail
    .header-nav
      position fixed
      left 0
      top 0
      opacity 1
      width 100%
      height 100px
      display flex
      align-items center
      justify-content space-around
      .header-nav-item
        font-size 30px
        &.active
          border-bottom 5px solid #29D6C7
    .swiper-container
      width 100%
      height 750px
      .swiper-wrapper
        height 750px
        .swiper-slide
          width 750px
          height 750px
          float left
          img 
            display block
            width 750px
            height 750px


    .Ldetail-footer
      width 100%
      height 100px
      position fixed
      left 0
      bottom 0
      background  #fff
      .footer-total
        float left
        width 320px
        height 100px
        padding-left 20px
        .footer-total-top
          width 250px
          height 28px
          margin 18px 0px
          span 
            &.footer-total-top-number
              color #FF3A78
              font-size 36px  
            em
              color #FF3A78
              font-size 24px
      .footer-msg
        box-sizing border-box
        float right
        width 101px
        height 100px
        padding 20px 0 0 30px
        .nana
          padding-left 20px

      .footer-order
        float right
        width 180px
        height 100px
        background #FF3A78
        line-height 100px
        text-align center
        font-size 28px
        color #fff

</style>
