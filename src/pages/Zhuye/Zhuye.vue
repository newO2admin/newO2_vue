<template>
  <div id="g-baikeZhuye">
    <!-- 轮播图 -->
    <div class="g-baikeSwiper">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <a href="javascript:;">
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
    <CyclopediaFooter :detail="Bk.detail">
      <template slot="title"> 
        <p>— 热搜功效 —</p>
      </template>
      <template slot="picture">
        <ul class="content">
          <li v-for="(item, index) in Bk.nav" :key="index">
            <a href="javascript:;">
              <img :src="item.url" alt="">
              <span>{{item.name}}</span>
            </a>
          </li>         
        </ul>
      </template>
    </CyclopediaFooter>
  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'
  import 'swiper/css/swiper.min.css'
  import CyclopediaFooter from "../../components/CyclopediaFooter/CyclopediaFooter"
  export default {
    data() {
      return {
        Bk: {}
      }
    },
    components: {
      CyclopediaFooter
    },
    mounted() {
      new Swiper('.swiper-container', {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
        }
      })
      if (sessionStorage.getItem('zhuye')) {
        let Bk = JSON.parse(sessionStorage.getItem('zhuye'))
        this.Bk = Bk
      }else {
        this.Bk =  this.$route.query.Bk
      }
      window.addEventListener('beforeunload', () => {
        sessionStorage.setItem('zhuye', JSON.stringify(this.Bk))
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #g-baikeZhuye
    .g-baikeSwiper
      width 100%
      height 400px
      .swiper-container
      img 
        display block
</style>
