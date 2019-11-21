<template>
  <div id="g-baikeContent">
    <CyclopediaHeader />
    <div class="g-maxRoll">
      <div class="maxRollContent">
        <!-- 导航 -->
        <ul class="g-baikeNav">
          <li class="nav-tab" :class="{active:isShowNav}">
            <a href="">
              <img class="icon" src="//mstatic.soyoung.com/m/static/fe_m/view/wiki/img/icon_first_xiangmu1@2x-d1ee44e28c.png"></img>
              <!-- <img class="icon hover" src="//mstatic.soyoung.com/m/static/fe_m/view/wiki/img/icon_first_xiangmu@2x-8ab35d18d8.png"></img> -->
              <span>项目库</span>
            </a>
          </li>
          <li class="nav-tab" :class="{active:!isShowNav}">
            <a href="">
              <img class="icon" src="//mstatic.soyoung.com/m/static/fe_m/view/wiki/img/icon_first_drug1@2x-6bc3b4f6f9.png"></img>
              <!-- <img class="icon hover" src="//mstatic.soyoung.com/m/static/fe_m/view/wiki/img/icon_first_drug@2x-1b83dad8e3.png"></img> -->
              <span>药品库</span>
            </a>
          </li>
          <li class="nav-tab" :class="{active:!isShowNav}">
            <a href="">
              <img class="icon" src="//mstatic.soyoung.com/m/static/fe_m/view/wiki/img/icon_first_tool1@2x-a8ce8df63f.png"></img>
              <!-- <img class="icon hover" src="//mstatic.soyoung.com/m/static/fe_m/view/wiki/img/icon_first_tool@2x-3e3209b2ae.png"></img> -->
              <span>仪器库</span>
            </a>
          </li>
          <li class="nav-tab">
            <a href="">
              <img class="icon" src="//mstatic.soyoung.com/m/static/fe_m/view/wiki/img/icon_first_material1@2x-b27e2cc93e.png"></img>
              <!-- <img class="icon hover" src="//mstatic.soyoung.com/m/static/fe_m/view/wiki/img/icon_first_material@2x-1dcc78ac0d.png"></img> -->
              <span>材料库</span>
            </a>
          </li>
        </ul>
        <!-- 轮播图 -->
        <div class="g-baikeSwiper">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <a href="">
                  <img src="https://img2.soyoung.com/item/20180706/2/20180706114811804.png" alt="">
                </a>
                <!-- <div>
                  <a href="">
                    <img src="//mstatic.soyoung.com/m/static/fe_m/view/wiki/img/img_huodong@2x-5b8c7b944f.png" alt="">
                    <div>暑期人气项目</div>
                    <h4>居毕业热门整形项目榜首之一</h4>
                  </a>
                  <div>
                    <a href="">
                      <span>胶原蛋白隆鼻</span>
                    </a>
                    <a href="">
                      <span>更多...</span>
                    </a>
                  </div>
                </div> -->
              </div>
              <div class="swiper-slide">
                <a href="">
                  <img src="https://img2.soyoung.com/item/20180706/1/20180706114937842.jpg" alt="">
                </a>
                <!-- <div>
                  <a href="">
                    <img src="//mstatic.soyoung.com/m/static/fe_m/view/wiki/img/img_huodong@2x-5b8c7b944f.png" alt="">
                    <div>暑期人气项目</div>
                    <h4>居毕业热门整形项目榜首之一</h4>
                  </a>
                  <div>
                    <a href="">
                      <span>胶原蛋白隆鼻</span>
                    </a>
                    <a href="">
                      <span>更多...</span>
                    </a>
                  </div>
                </div> -->
              </div>
              <div class="swiper-slide">
                <a href="">
                  <img src="https://img2.soyoung.com/item/20180706/3/20180706115022415.jpg" alt="">
                </a>
                <!-- <div>
                  <a href="">
                    <img src="//mstatic.soyoung.com/m/static/fe_m/view/wiki/img/img_huodong@2x-5b8c7b944f.png" alt="">
                    <div>暑期人气项目</div>
                    <h4>居毕业热门整形项目榜首之一</h4>
                  </a>
                  <div>
                    <a href="">
                      <span>胶原蛋白隆鼻</span>
                    </a>
                    <a href="">
                      <span>更多...</span>
                    </a>
                  </div>
                </div> -->
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
        <!-- 热搜 -->
        <div class="g-topSearch">
          <div class="topSearch-text">
            <p>— 热搜功效 —</p>
          </div>
          <div class="topSearch-list">
            <ul class="content">
              <li>
                <a href="">
                  <img src="https://img2.soyoung.com/item/20180306/5/20180306140651565.jpg" alt="">
                  <span>瘦脸</span>
                </a>
              </li>
              <li>
                <a href="">
                  <img src="https://img2.soyoung.com/item/20180306/2/20180306140700553.jpg" alt="">
                  <span>瘦腿</span>
                </a>
              </li>
              <li>
                <a href="">
                  <img src="https://img2.soyoung.com/item/20180306/0/20180306140704176.jpg" alt="">
                  <span>隆鼻</span>
                </a>
              </li>
              <li>
                <a href="">
                  <img src="https://img2.soyoung.com/item/20180306/3/20180306140712290.jpg" alt="">
                  <span>垫下巴</span>
                </a>
              </li>
              <li>
                <a href="">
                  <img src="https://img2.soyoung.com/item/20180306/1/20180306140718148.jpg" alt="">
                  <span>面部填充</span>
                </a>
              </li>
              <li>
                <a href="">
                  <img src="https://img2.soyoung.com/item/20180306/6/20180306140723628.jpg" alt="">
                  <span>美白</span>
                </a>
              </li>
              <li>
                <a href="">
                  <img src="https://img2.soyoung.com/item/20180306/5/20180306140727748.jpg" alt="">
                  <span>补水保湿</span>
                </a>
              </li>
              <li>
                <a href="">
                  <img src="https://img2.soyoung.com/item/20180306/9/20180306140732342.jpg" alt="">
                  <span>丰胸</span>
                </a>
              </li>
              <li>
                <a href="">
                  <img src="https://img2.soyoung.com/item/20180306/7/20180306140735385.jpg" alt="">
                  <span>半永久妆</span>
                </a>
              </li>          
            </ul>
          </div>
        </div>
        <!-- 详情 -->
        <div class="g-detail">
          <div>
            <div class="topBlank"></div>
            <div class="main">
              <div class="name">
                <a href="">
                  <p>玻尿酸</p>
                </a> 
              </div>
              <ul>
                <li>
                  <span>注射除皱</span>
                </li>
                <li>
                  <span>玻尿酸塑型</span>
                </li>
                <li>
                  <span>玻尿酸塑型</span>
                </li>
                <li>
                  <span>玻尿酸塑型</span>
                </li>
                <li>
                  <span>玻尿酸塑型</span>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div class="topBlank"></div>
            <div class="main">
              <div class="name">
                <a href="">
                  <p>玻尿酸</p>
                </a> 
              </div>
              <ul>
                <li>
                  <span>玻尿酸塑型</span>
                </li>
                <li>
                  <span>玻尿酸塑型</span>
                </li>
                <li>
                  <span>玻尿酸塑型</span>
                </li>
                <li>
                  <span>玻尿酸塑型</span>
                </li>
                <li>
                  <span>玻尿酸塑型</span>
                </li>
                <li>
                  <span>玻尿酸塑型</span>
                </li>
                <li>
                  <span>玻尿酸塑型</span>
                </li>
                <li>
                  <span>玻尿酸塑型</span>
                </li>
                <li>
                  <span>玻尿酸塑型</span>
                </li>
                <li>
                  <span>玻尿酸塑型</span>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div class="topBlank"></div>
            <div class="main">
              <div class="name">
                <a href="">
                  <p>玻尿酸</p>
                </a> 
              </div>
              <ul>
                <li>
                  <span>玻尿酸塑型</span>
                </li>
                <li>
                  <span>玻尿酸塑型</span>
                </li>
                <li>
                  <span>玻尿酸塑型</span>
                </li>
                <li>
                  <span>玻尿酸塑型</span>
                </li>
                <li>
                  <span>玻尿酸塑型</span>
                </li>
              </ul>
            </div>
          </div>
          
          
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper' 
  import 'swiper/css/swiper.min.css'
  import BScroll from 'better-scroll'
  import CyclopediaHeader from '../../components/CyclopediaHeader/CyclopediaHeader'
  export default {
    data() {
      return {
        isShowNav: true
      }
    },
    components: {
      CyclopediaHeader
    },
    mounted() {
      new Swiper('.swiper-container', {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
        },
      }),
      new BScroll('.g-maxRoll', {
        scrollY: true
      }),
      new BScroll('.topSearch-list', {
        startX: 0,
        scrollX: true
      })
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #g-baikeContent
    .g-maxRoll
      margin-top 88px
      height calc(100vh - 88px)
      overflow hidden
      .maxRollContent
        .g-baikeNav
          background-color #88b9da 
          display flex
          .nav-tab     
            width 25%
            height 96px
            &.active
              background-color: #6ea4dd
            a
              height 100%
              display flex
              flex-direction column
              justify-content space-around
              .icon
                display block
                width 60px
                height 40px
                margin auto 
              span 
                display block
                font-size 24px
                color #ffffff
                text-align center 
        .g-baikeSwiper
          width 100%
          height 400px
          .swiper-container
          img 
            display block
        .g-topSearch
          height 297px
          .topSearch-text
            margin-top 28px
            margin-bottom 40px
            text-align center
            p
              font-size 30px
              line-height 30px
          .topSearch-list
            width 750px
            height 227px
            overflow hidden
            .content
              height 227px
              display flex
              // flex-grow 1
              // flex-shrink 1
              position absolute
              // overflow hidden
              li
                // display flex
                width 160px
                height 197px
                margin-bottm 30px
                a
                  display flex
                  flex-direction column
                  text-align center
                  img 
                    width 120px
                    height 120px
                    margin 0 10px 20px 30px
                    border-radius 50%
                  span 
                    font-size 26px
                    padding-top 28px
                    color #333
        .g-detail
          .topBlank
            height 20px
            width 100%
            background-color #f3f7f7
          .main
            .name
              heihgt 88px
              margin-left 30px
              padding-top 32px
              padding-bottom 36px
              a
                p
                  width 720px 
                  height 30px
                  font-size 30px
                  padding-left 20px
                  border-left 4px solid #31cac4
                  color #333
            ul
              display flex
              flex-wrap wrap
              padding-bottom 36px
              margin 0 30px
              li
                width 168px
                height 64px
                margin-right 6px
                margin-bottom 4px
                background-color #f5f5f5
                text-align center 
                &:nth-child(4n)
                  margin-right 0
                span 
                  height 64px
                  line-height 64px
                  color #333
                  font-size 24px



</style>