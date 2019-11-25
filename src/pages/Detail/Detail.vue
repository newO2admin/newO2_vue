<template>
  <div id="detail">
    <div class="nav">
      <ul class="navList">
        <li class="navItem active">
          <em></em><span class="title">商品</span>
        </li>
        <li class="navItem">
          <em></em><span class="title">评论</span>
        </li>
        <li class="navItem">
          <em></em><span class="title">日记</span>
        </li>
        <li class="navItem">
          <em></em><span class="title">详情</span>
        </li>
        <li class="navItem">
          <em></em><span class="title">推荐</span>
        </li>
      </ul>
    </div>
    <div class="swiper-container swiper">
      <div class="swiper-wrapper swiper-list">
        <div class="swiper-slide swiper-item">
          <img src="../../assets/images/ad/imgAd.png">
        </div>
        <div class="swiper-slide swiper-item">
          <img src="../../assets/images/ad/imgAd.png">
        </div>
        <div class="swiper-slide swiper-item">
          <img src="../../assets/images/ad/imgAd.png">
        </div>
      </div>
    </div>
    <div class="sec-kill">
      <div class="price-box">
        <span class="oldPrice">$8666</span>
        <img class="vip-card" src="//static.soyoung.com/sy-pre/vip-card2-1558923023425.png" alt="">
        <span class="newPrice">活动减$5556</span>
      </div>
      <div class="time-box">
        <span class="tiemer">剩余活动时间</span>
        <span class="time">02：46：13</span>
      </div>
    </div>
    <section class="info-section">
      <div class="product-title">【鼻综合】北京隆鼻 进口假体耳软骨隆鼻综合•自然软糖鼻•俏立有孤度•真实可揉捏•吴晓辰推荐</div>
      <div class="city">北京市</div>
      <div class="inner"></div>
      <div class="vip">
        <div class="prod">
          <img src="https://mstatic.soyoung.com/m/static/img/product/vipcard.png" alt="">
          <span>开通黑卡购买本商品更省500元</span>
        </div>
      </div>
      <div class="flag">
        <div class="lingJuan">领劵</div>
        <div class="youHui">
          <div class="youHuiJuan">
            <div class="YHJItem">预约红包</div>
            <div class="YHJItem">满200减50</div>
            <div class="YHJItem">满100减20</div>
            <div class="YHJnum">3个></div>
          </div>
        </div>
      </div>
      <div class="inner"></div>
      <div class="sale">
        <div class="saleTitle">促销</div>
        <div>
          <img src="https://static.soyoung.com/sy-pre/xian-flag-1560219000655.png" alt="">
          <div>活动结束恢复¥13720，仅剩20个</div>
        </div>
      </div>
    </section>
    <div class="footer">
      <div class="price-box">
        <span>预定金：￥3000</span>
        <span>到院再付：￥8000</span>
      </div>
      <div class="crod">提交订单</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
  export default {
    mounted(){
      new Swiper('.swiper-container', {
        autoplay: true,//可选选项，自动滑动
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../assets/stylus/mixins.styl"
  #detail 
    .nav 
      width 100% 
      height 100px 
      background pink 
      position absolute 
      top 0 
      right 0 
      z-index 2
      .navList 
        display flex 
        align-items center 
        .navItem 
          display flex 
          align-items center 
          line-height 100px
          font-size 30px 
          margin-left 35px 
          width 20% 
          &.active 
            color green
    .swiper
      width 750px
      height 750px
      .swiper-list
        width 750px
        height 750px
        .swiper-item
          width 750px
          height 750px
          img 
            width 750px
            height 750px
    .sec-kill
      width 100%
      height 100px
      display flex
      box-sizing border-box
      .price-box
        width 60%
        background #FF3A73
        display flex
        flex-direction column 
        color #fff
        font-weight bold
        padding 10px
        position relative
        .oldPrice
          font-size 30px
          padding-left 10px
        .vip-card
          position absolute
          top 20px
          left 115px
          width 120px
          height 24px
        .newPrice
          font-size 20px
      .time-box
        width 40%
        background #FFE9E9
        display flex
        flex-direction column
        .tiemer
          width 240px
          height 22px
          text-align center
          padding-top 10px
          font-size 18px
          color #FF3A73
        .time
          width 240px
          height 78px
          line-height 78px
          text-align center
          color #FF3A73
    .info-section
      width 100%
      height 786px
      // background pink
      .product-title
        box-sizing: border-box;
        padding: 0 48px;
        margin: 48px 0;
        font-family: PingFangSC-Medium;
        font-size: 52px;
        line-height: 72px;
        max-height: 140px
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        background: #fff;
      .city
        font-size 20px
        float left 
        margin-left 20px
        margin-top -48px
      .inner
        width 100%
        height 10px
        background #eee
      .vip
        height 80px
        background #F4EAD4
        .prod
          box-sizing border-box
          height 80px
          line-height 80px
          padding 0 20px
          display flex
          align-items center
          img 
            width 48px
            height 34px
            margin-right 20px
      .flag
        height 152px
        background #fff
        display flex
        padding 50px 20px
        .lingJuan
          width 100px
          height 92px
          color #AAABB3
          font-size 32px
        .youHui
          width 650px
          height 36px
          display flex
          .youHuiJuan
            display flex
            .YHJItem
              margin-right 10px
              color #FF527F
            .YHJnum
              margin-left 160px
      .sale
        width 100%
        height 100px
        background pink 
        display flex
    .footer
      position fixed
      left 0
      bottom 0
      height 100px
      width 100%
      display flex
      display none
      z-index 5
      background #fff
      .price-box
        width 50%
        display flex
        flex-direction column
        margin 10px
        span 
          font-size 30px
      .crod
        width 180px
        height 100px
        line-height 100px
        text-align center
        font-size 30px
        color #fff
        background #FF3865
        position absolute
        right 0
        top 0
</style>