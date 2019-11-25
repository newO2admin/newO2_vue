<template>
  <div id="shopContainer">
    <section class="banner">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in 4">
            <img class="imgItem" src="../../assets/image/e625282ad8ae50dfc5f41751f48e6571_100_100.jpg">
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <div class="info">
        <div class="product-other">
          <span class="qian">￥</span>
          <span class="qian-num">55800</span>
          <span class="vip">￥53800</span>
          <span class="heika"></span>
        </div>
        <div class="product-title">
          【鼻综合】【全鼻0假体鼻综合】师俊莉医生全耳软骨鼻尖＋改良版自体真皮脂肪瓣鼻背，结合而成！
        </div>
        <div class="city-order">
          <span class="city">北京市</span>
          <div class="order-info">
            <span class="icon-info"></span>
            <span class="info-text">发起预约数：1083</span>
          </div>
        </div>
        <div class="to-vip">
          <a>
            <div>
              <img src="../../assets/image/e625282ad8ae50dfc5f41751f48e6571_100_100.jpg" alt="">
              <span>
                开通黑卡购买本商品更省
                <span>¥370元</span>
              </span>
            </div>
            <span> > </span>
          </a>
        </div>
        <div class="extra-info">
          <div class="flag-class">
            <div class="flag-title">领劵</div>
            <div class="flag-list">
              <a class="flag-item">
                <div class="item-left">
                  <span class="left-title-money">
                    <span class="coupon-title">预约金红包</span>
                  </span>
                  <span class="coupon-text">满500减120</span>
                </div>
                <div class="item-right">
                  1个
                  <span class="icon-text"> > </span>
                </div>
              </a>
              <a class="flag-item">
                <div class="item-left">
                  <span class="left-title-money">
                    <span class="coupon-title">预约金红包</span>
                  </span>
                  <span class="coupon-text">满500减120</span>
                </div>
                <div class="item-right">
                  1个
                  <span class="icon-text"> > </span>
                </div>
              </a>
            </div>
          </div>
          <div class="flag-class">
            <div class="flag-title">促销</div>
            <div class="flag-list">
              <a class="flag-item">
                <div class="item-left">
                  <img src="../../../static/image/xian-flag-1560219000655.png" alt="">
                  <span class="left-title">活动结束恢复¥3680</span>
                </div>
              </a>
            </div>
          </div>
          <div class="flag-class">
            <div class="flag-title">服务</div>
            <div class="flag-list">
              <a class="flag-item">
                <div class="item-left">
                  <img src="../../../static/image/xian-flag-1560219000655.png" alt="">
                  <span class="left-title">
                    <span class="money-sty">￥263.73</span>
                    ×12期，支持花呗
                  </span>
                </div>
                <div class="item-right">
                  <span class="icon-text"> > </span>
                </div>
              </a>
            </div>
          </div>
          <div class="flag-class">
            <div class="flag-title">保障</div>
            <div class="flag-list">
              <a class="flag-item">
                <div class="item-left">
                  <img src="../../../static/image/xian-flag-1560219000655.png" alt="">
                  <span class="left-title">闪电/过期退</span>
                  <img src="../../../static/image/xian-flag-1560219000655.png" alt="">
                  <span class="left-title">先行赔付</span>
                  <img src="../../../static/image/xian-flag-1560219000655.png" alt="">
                  <span class="left-title">氧气保</span>
                </div>
                <div class="item-right">
                  <span class="icon-text"> > </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="eval">
      <div class="relevan-eval">
        <div class="common-icon-title">
          <span class="con-icon">
            <span class="icon-text">|</span>
            <span class="title-sty">相关评价
              <u>303条</u>
            </span>
          </span>
          <a class="com-flag">
            查看全部
            <span> > </span>
          </a>
        </div>
        <nav>
          <NavItem/>
          <NavItem/>
          <NavItem/>
          <NavItem/>
          <NavItem/>
          <NavItem/>
          <NavItem/>
          <NavItem/>
        </nav>
      </div>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
import Swiper from 'swiper'

import NavItem from '../../components/list/navItem'
  export default {
    components:{
      NavItem
    },
    mounted(){
      new Swiper('.swiper-container', {
        // autoplay: true,
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #shopContainer
    width 100%
    height 100%
    .banner
      .swiper-wrapper
        width 100%
        height 750px
        img
          width 750px
          height 750px
      .info
        width 100%
        height 820px
        .product-other
          width 100%
          height 46px
          margin-top 34px
          padding 0 30px
          .qian
            width 30px
            height 42px
            font-size 30px
            color #FF527F
          .qian-num
            width 176px
            height 46px
            font-size 46px
            color #FF527F
          .vip
            width 94px
            height 23px
            font-size 23px
            color #A97831
        .product-title
          width 100%
          height 92px
          padding 0 30px
          margin 30px 0
          font-size 34px
          overflow : hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        .city-order
          width 100%
          height 36px
          padding 0 30px
          margin-bottom 30px
          display flex
          justify-content space-between
          color #777777
        .to-vip
          border-top 10px solid #f3f7f7
          padding 0 30px
          height 80px
          // line-height 80px
          background-color #F4EAD4
          a
            display flex
            justify-content space-between
            img
              width 48px
              height 34px
              // line-height 34px
            span 
              line-height 80px
        .extra-info
          width 100%
          height 378px
          .flag-class
            width 100%
            // height 152px
            padding 30px 0
            display flex
            border-bottom 10px solid #f3f7f7
            .flag-title
              width 100px
              // height 92px
              color #AAABB3
              text-align center
              font-size 30px
            .flag-list
              width 650px
              // height 92px
              .flag-item
                display flex
                justify-content space-between
                font-size 28px
                .item-left
                  display flex
                  width 80%
                  -webkit-box-align: center
                  img 
                    width 28px
                    height 28px
                    line-height 28px
                    margin-right 8px
                  .left-title
                    .money-sty
                      color #FC5D7B
                  .left-title-money
                    // width 100%
                    // height 34px
                    margin-right 14px
                    // padding 0 30px
                    .coupon-title
                      color #FC5D7B
                      background #FEEEF1
                      width 120px
                      // height 34px
                  .coupon-text
                    background url(../../../static/image/coupon-bg-9f6ca2c51a.png) center center no-repeat
                    background-size 100% 100%
                    margin-left 10px 
                    // display block
                    text-align center
                    width 186px
                    height 36px
                    color #FC5D7B
                    padding 0 10px
                .item-right
                  margin-right 30px
                  color #777777
                  font-size 30px
    .eval
      width 100%
      height 560px
      border-bottom 10px solid #f3f7f7
      .relevan-eval
        padding-left 20px 
        width 100%
        height 560px
        .common-icon-title
          width 100%
          height 100px
          padding 30px 30px 30px 0
          font-size 30px
          display flex
          justify-content space-between
          .con-icon
            height 42px
            line-height 42px
            .icon-text
              color #31cac4
              margin-right 8px
            .title-sty
              u
                text-decoration none 
                color #333
                font-size 26px
          .com-flag
            color #333






    

</style>
