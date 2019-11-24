<template>
    <div>
      <!-- 头部导航 -->
      <div class="header-nav" :style="{opacity:opacity}" ref="nav">
        <div class="header-nav-item" @click="maodian1" :class="{active:scrllTop>=0 && scrllTop<620}">商品</div>
        <div class="header-nav-item" @click="maodian2" :class="{active:scrllTop>=620 && scrllTop<910}">评价</div>
        <div class="header-nav-item" @click="maodian3" :class="{active:scrllTop>=910 && scrllTop<1400}">日记</div>
        <div class="header-nav-item" @click="maodian4" :class="{active:scrllTop>=1400 && scrllTop<4350}">详情</div>
        <div class="header-nav-item" @click="maodian5" :class="{active:scrllTop>=4350}">推荐</div>
      </div>
      <!-- 底部 -->
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
          <div class="iconfont icon-zixun nanan"></div>
          <div class="enen">咨询</div>
        </div>
      </div>
      <div  class="wrapper" ref="wrapper1">
        <div id="Ldetail" class="content">
          <!-- 轮播图 -->
          <div class="swiper-container">
            <ul class="swiper-wrapper">
              <li class="swiper-slide" v-for="item in 5" :key="item">
                <img v-lazy="`https://img2.soyoung.com/post/20190925/8/375da5729721fb20ae7b82aa72c0a8e4_400.png?imageView2/0/format/webp`" alt="">
              </li>
            </ul>
            <!-- 轮播导航图 -->
            <div class="swiper-pagination"></div>
          </div>
          <!-- 商品介绍 -->
          <div class="info-section">
            <div class="product-other">
              <div class="price">
                <i>￥</i>
                <em>980</em>
                <span>￥951</span>
                <img src="//mstatic.soyoung.com/m/static/img/product/vip_user_card.png" alt="">
              </div>
            </div>
            <div class="product-title">【玻尿酸】【伊婉C玻尿酸】 韩国进口 名医团队注射</div>
            <div class="city-order">
              <span>北京市</span>
              <span class="order-info">
                <img src="//static.soyoung.com/sy-pre/normal-tan-1572847805017.png " alt="">
                <span>发起预约数：2537</span>
              </span>
            </div>
            <div class="bar"></div>
            <div class="to-vip">
              <a class="md_heika_prod_id">
                <img src="//mstatic.soyoung.com/m/static/img/product/vipcard.png" alt="">
                <span>开通黑卡购买本商品更省<font style="color:#A97831">¥<big>158</big></font></span>
                <span class="xiaoyu">></span>
              </a>
            </div>
            <div class="sales">
              <div class="cuxiao">促销</div>
              <img src="//static.soyoung.com/sy-pre/xian-flag-1560219000655.png" alt="">
              <div>活动结束恢复¥980</div>
            </div>
            <div class="bar"></div>
            <div class="flag-class">
              <span>保障</span>
              <span>闪电/过期退</span>
              <span>先行赔付</span>
              <span>氧气保</span>
            </div>
            <div class="bar"></div>

          </div>
          <!-- 评价 -->
          <div class="relevan-eval">
            <div class="common-icon-title ">
              <span class="com-icon">
                <span class="pingjia">相关评价</span>
                <span class="tiaoshu">52条</span>
              </span>
              <span class="com-flag">
                <span>查看全部</span>
                <span>
                  >
                </span>
              </span>
            </div>
            <div class="fold">
              <span class="active">全部</span>
              <span>最新</span>
              <span>消费后评价（37）</span>
              <span>好评（50）</span>
              <span>差评（2）</span>
              <span>有图（39）</span>
              <span>有视频（1）</span>
              <span>很有用</span>
            </div>
            <div class="reval-list wrapper" ref="wrapper2">
              <div class="content">
                <div class="item" v-for="item in 5" :key="item">
                  <div class="eval-left">
                    <div class="one-head">
                      <img v-lazy="`https://img2.soyoung.com/user/1_100_100.png`" alt="">
                      <span>氧气0y7iw</span>
                    </div>
                    <div class="two-head"><img v-lazy="`https://static.soyoung.com/sy-pre/consum-img-1565068204832.png`" alt=""></div>
                    <p class="star-rank">环境:5.0 专业度:5.0</p>
                    <div class="eval-content">
                      相信很多人跟我一样，特别想知道伊婉玻尿酸能保持多久？其实，跟每个人的体质是有一定关系的。如果一个人新陈代谢较快，那么注射伊婉玻尿酸后，玻尿酸会随着新陈代谢的原因被逐渐吸收。
                      相反，如果新陈代谢较慢，注射伊婉玻尿酸后，注射材料流失慢，自然维持的时间也比较长。一般来说，爱运动的人、肠胃功能活跃的人比不爱运动的人、肠胃蠕动慢的人维持时间要短。
                    </div>
                  </div>
                  <img v-lazy="`https://img2.soyoung.com/tieba/android/shortpost/20190514/3/0d3320e68ccac32d61dfe6f01d6b7c6f_152_152.jpg`" class="eval-img" alt=""></img>
                </div>
              </div>
              
            </div>
          </div>
          <!-- 相关日记 -->
          <div class="bar"></div>
          <div class="detail-diary">
            <div class="common-icon-title ">
              <span class="com-icon">
                <span class="pingjia">相关评价</span>
                <span class="tiaoshu">52条</span>
              </span>
              <span class="com-flag">
                <span>查看全部</span>
                <span>
                  >
                </span>
              </span>
            </div>
            <div class="fold">
              <span class="active">全部</span>
              <span>最新</span>
              <span>消费后评价（37）</span>
              <span>好评（50）</span>
              <span>差评（2）</span>
              <span>有图（39）</span>
              <span>有视频（1）</span>
              <span>很有用</span>
            </div>
            <div class="main_jour">
              <div class="jour_icon">
                <img v-lazy="`https://img2.soyoung.com/user/20180724/2/cb84c3cd924511b30a861194b6e21b9d_100_100.png`" alt="">
                <div class="info">
                  <p>氧气YWY</p>
                  <p>2月15日</p>
                </div>
              </div>
              <div class="jour_pic">
                <img v-lazy="`https://img2.soyoung.com/tieba/ios/20190412/9/6ca820ad2be0a2f490624a0a7445aa66_301_301.jpg`" alt="">
                <img v-lazy="`https://img2.soyoung.com/face/tieba/web/20190215/2/b3b227cc37dda8733d04ef32a20404c1_301_301.jpg`" alt="">
              </div>
              <div class="jour_text ">
                      今天已经是第125天了，垫了鼻基底以后法令纹就没有以前那么深了，而且显的鼻子也立体些了，今年回北京发现皮肤好了很多，没有年前那么干了，可能是水光针起到作用了，贴面膜的时候精华也能很好的吸收，这周末他们医院
              </div>
            </div>
            
          </div>
          <!-- 详情 -->
          <div class="bar"></div>
          <div class="standShow">
            <div class="product-detail">
              <h2>商品详情</h2>
            </div>
            <div class="groupList">
              <div class="sub-title">
                <div>
                  <img src="//static.soyoung.com/sy-pre/img01-1552612200651.png" alt="">
                  <h3>项目价格表</h3>
                </div>
              </div>
              <ul class="details">
                <li class="top">
                  <span style="width:25%">项目名称</span>
                  <span style="width:25%">项目组合</span>
                  <span style="width:25%">医生/级别</span>
                  <span style="width:25%">新氧价</span>
                </li>
                <li class="bottom">
                  <span style="width:25%">伊婉C玻尿酸</span>
                  <span style="width:25%">伊婉C玻尿酸</span>
                  <span style="width:25%">医生</span>
                  <span style="width:25%">980</span>
                </li>
              </ul>
            </div>
            <div class="product-detail">
              <h2>图文详情</h2>
            </div>
            <div class="rich-text">
              <p>【温馨提示】</p>
              <p>1、此项目为韩国进口伊婉C玻尿酸1ml，可现场验药，所拍项目需一次性使用完毕，不包含丰唇，卧蚕、泪沟。</p>
              <p>2、本院为轮诊制，如您指定主任注射需加收注射费500元，指定院长注射需加收注射费1000元。</p>
              <p>
                <img v-lazy="`https://img2.soyoung.com/tieba/web/20191108/9/e51ab7d54c8f0390b5915aea1fa06bce_570.jpg`" alt="">
                <img class="p-img" v-lazy="`https://img2.soyoung.com/tieba/web/20191120/5/b3d78f9ff2f45a07916005e057b226cf_570.jpg`" alt="">
              </p>
            </div>
            
          </div>
          <!-- 为你推荐 -->
          <div class="bar"></div>
          <div class="tuijian1">
            <h2>为你推荐</h2>
          </div>

          <div class="gao"></div>
          
        </div>
      </div>
    </div>

</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import Swiper from 'swiper'
  import 'swiper/css/swiper.min.css'
  export default {
    data(){
      return {
        opacity: 0,
        isShowLine: false,
        scrllTop: 0
      }
    },
    methods: {
      maodian1(){
         this.scroll1.scrollTo(0, 0, 2000)
      },
      maodian2(){
         this.scroll1.scrollTo(0, -620, 2000)
      },
      maodian3(){
         this.scroll1.scrollTo(0, -910, 2000)
      },
      maodian4(){
         this.scroll1.scrollTo(0, -1400, 2000)
      },
      maodian5(){
         this.scroll1.scrollTo(0, -4510, 2000)
      },


    },
    computed: {
        
    },
    mounted(){
      new Swiper('.swiper-container',{
        autoplay: false,//可选选项，自动滑动
         pagination: {
                el: '.swiper-pagination',
                type: 'fraction',
                renderFraction: function (currentClass, totalClass) {
                  return '<span class="' + currentClass + '"></span>' +
                        '|' +
                        '<span class="' + totalClass + '"></span>';
                },
          },  
      })

      this.scroll2 = new BScroll(this.$refs.wrapper2, {
        scrollX: true,
        scrollY: false
      })

      this.scroll1 = new BScroll(this.$refs.wrapper1, {
        scrollX: false,
        scrollY: true,
        probeType:3,
      })
      this.scroll1.on('scroll', (pos) => {
          this.opacity =  -pos.y/100
          this.scrllTop = -pos.y
          // console.log(this.opacity)
          // console.log(this)
          //console.log(this.scrllTop)
      })
      
      

    }

  }
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
  .wrapper
    width 100%
    height calc(100vh - 100px)
    #Ldetail
      width 100%
      .swiper-container
        position relative
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
        .swiper-pagination
          position absolute
          bottom 40px
          left 650px
          width 64px
          height 48px
          background #eee 
          z-index 10  
          line-height 48px
          text-align center 
          border-radius 30px  
      .info-section
        padding-bottom 17px
        width 100%
        height 600px
        // background #f40
        border-top 1px solid #fff
        .product-other
          width 100%
          height 46px
          box-sizing border-box
          padding 0 30px
          margin-top 34px
          .price
            display flex
            align-items center
            i
              font-size 30px 
              color #FF527F
            em
              font-size 60px 
              line-height 60px
              color #FF527F 
            span 
              font-size 24px 
              color #A97831
              line-height 24px
              margin 0 10px
            img
              width 60px
              height 24px 
        .product-title
          box-sizing border-box
          width 100%
          height 92px
          padding 0px 30px  
          margin 30px 0px
          font-size 34px
          color #333  
        .city-order
          width 100%
          height 36px
          padding 0px 30px  
          margin-bottom 30px
          display flex
          justify-content space-between
          .order-info
            display flex
            justify-content center
            align-items center
            img
              width 40px
              height 40px
        .bar
          width 100%
          height 10px
          background #F3F7F7
        .to-vip
          width 100%
          height 80px
          background #F4EAD4
          .md_heika_prod_id
            width 100%
            height 80px 
            padding 0px 30px 
            display flex
            align-items center
            .xiaoyu
              margin 0 10px 0 200px
        .sales
          width 100%
          height 30px
          display flex
          padding 0 40px
          margin 30px 0
          align-items center
          font-size 24px
          img 
            width 28px
            height 28px
            margin 0 5px 0 15px
          div
            font-size 30px
        .flag-class
          width 100%
          height 96px
          padding 0 30px
          span 
            margin 0 10px
            line-height 96px
      .relevan-eval
        width 100%
        height 560px
        padding-left 20px
        background #fff
        .common-icon-title
          width 700px
          height 100px
          display flex
          justify-content space-between
          align-items center
          .com-icon
            .pingjia
              margin 0 10px 0 30px
              font-weight bold 
              font-size 30px
        .fold
          width 720px
          height 130px
          margin 0 0 20px 10px
          background #fff
          overflow hidden
          span
            float left 
            padding 10px
            margin 0 10px 10px 10px
            background-color #eeeeee
            border-radius 30px
            &.active
              color #2CC7C5 
        .reval-list   
          width 720px
          height 219px
          padding-left 10px
          margin-bottom 32px
          display flex
          overflow hidden
          .content
            display flex
            .item
              margin-left 20px
              display flex
              width 562px 
              height 218px
              border 1px solid #eee
              .eval-left
                width 342px
                height 198px
                margin-top 20px
                padding-left 20px
                .one-head
                  img
                    width 40px
                    height 40px
                    border-radius 50%
                    vertical-align middle
                .two-head
                  img
                    width 110px
                    height 30px
                .star-rank
                  font-size 12px
                .eval-content
                  margin-top 15px
                  overflow : hidden;
                  text-overflow: ellipsis;
                  display: -webkit-box;
                  -webkit-line-clamp: 2;
                  -webkit-box-orient: vertical;
              .eval-img
                width 220px
                height 220px
      .bar 
        width 100%
        height 10px
        background #F3F7F7
      .detail-diary
        width 730px
        height 950px
        padding-left 20px
        .common-icon-title
          width 700px
          height 100px
          display flex
          justify-content space-between
          align-items center
          .com-icon
            .pingjia
              margin 0 10px 0 30px
              font-weight bold 
              font-size 30px
        .fold
          width 720px
          height 130px
          margin 0 0 20px 10px
          background #fff
          overflow hidden
          span
            float left 
            padding 10px
            margin 0 10px 10px 10px
            background-color #eeeeee
            border-radius 30px
            &.active
              color #2CC7C5 
        .main_jour
          width 690px
          height 636px
          padding 18px 30px 0
          .jour_icon
            width 100%
            height 64px
            display flex
            img
              width 60px
              height 60px
              margin-right 10px
              border-radius 50%
          .jour_pic
            width 690px
            height 340px
            margin-top 20px
            img
              width 320px
              height 320px
              border-radius 30px
              padding 5px
          .jour_text 
            fon-size 28px
            color #777
            overflow : hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical; 
      .bar 
        width 100%
        height 10px
        background #F3F7F7
      .standShow
        border-top 1px solid #fff
        width 100%
        .product-detail
          margin-top 30px
          h2
            font-size 30px
            font-weight bold
            margin-left 30px
        .groupList
          width 100%
          height 302px
          .sub-title
            width 100%
            height 66px
            padding 30px 30px 0 30px
            margin-bottom 26px
            div
              display flex
              img
                width 36px
                height 36px
                margin-right 20px
              h3
                font-size 30px
          .details
            width 686px
            height 180px
            margin 0 auto
            border 2px solid #eee
            .top
              width 682px
              height 54px
              border-bottom 2px solid #eee
              display flex
              justify-content space-around
              span
                line-height 54px
                text-align center
                border-right 1px solid #eee
            .bottom
              width 682px
              height 126px
              display flex
              justify-content space-around
              span
                line-height 126px
                text-align center
                border-right 1px solid #eee
        .rich-text
          margin-top 30px  
          padding 0 30px 30px  
          width 100%
          p
            img 
              width 690px
              height 5058px
            .p-img
              width 690px
              height 1380px
      .tuijian1
        margin-top 30px
        h2
          font-size 30px
          font-weight bold
          margin-left 30px
      .gao
        width 100%
        height 200px
  .Ldetail-footer
    z-index 99
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
  .header-nav
    background #fff
    z-index 99
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

</style>
