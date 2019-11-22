<template>
  <div id="g-baikeZhuye">
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
    <CyclopediaFooter>
      <template slot="title">
        <p>— 热搜功效 —</p>
      </template>
      <template slot="picture">
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
      </template>
    </CyclopediaFooter>
  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'
  import 'swiper/css/swiper.min.css'
  import CyclopediaFooter from "../../components/CyclopediaFooter/CyclopediaFooter"
  export default {
    components: {
      CyclopediaFooter
    },
    mounted() {
      new Swiper('.swiper-container', {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
        },
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
