<template>
  <div id="g-baikeContent" v-if="cyclopedia[0]">
    <CyclopediaHeader />
    <div class="g-maxRoll" >
      <div class="maxRollContent">
        <!-- 导航 -->
        <ul class="g-baikeNav">
          <li class="nav-tab">
            <router-link to="/cyclopedia">
              <img v-show="$route.path !== '/cyclopedia'" class="icon" :src="cyclopedia[0].navUrl"></img>

              <img v-show="$route.path === '/cyclopedia'" class="icon" :src="cyclopedia[0].navActiveUrl"></img>
              <span>{{cyclopedia[0].name}}</span>
            </router-link>
          </li>
          <li class="nav-tab" v-for="(item, index) in cyclopedia[1]" :key="index">
            <router-link :to="{path: `/cyclopedia/${item.url}`, query: {Bk: item}}">
              <img v-show="$route.path !== `/cyclopedia/${item.url}`" class="icon" :src="item.navUrl"></img>

              <img v-show="$route.path === `/cyclopedia/${item.url}`" class="icon" :src="item.navActiveUrl"></img>
              <span>{{item.name}}</span>
            </router-link>
          </li>
        </ul>
        <!-- 轮播图 -->
        <div class="g-baikeSwiper" :class="{active:$route.path !== '/cyclopedia'}">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <a href="javascript:;">
                  <img src="https://img2.soyoung.com/item/20180706/2/20180706114811804.png" alt="">
                </a>
              </div>
              <div class="swiper-slide">
                <a href="">
                  <img src="https://img2.soyoung.com/item/20180706/1/20180706114937842.jpg" alt="">
                </a>
              </div>
              <div class="swiper-slide">
                <a href="">
                  <img src="https://img2.soyoung.com/item/20180706/3/20180706115022415.jpg" alt="">
                </a>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
        <!-- 一级路由的footer -->
        <CyclopediaFooter v-if="$route.path === '/cyclopedia'" :detail="cyclopedia[0].detail">
          <template slot="title">
            <p>— 热搜功效 —</p>
          </template>
          <template slot="picture">
            <ul class="content">
              <li v-for="(item, index) in cyclopedia[0].nav" :key="index">
                <a href="javascript:;">
                  <img :src="item.url" alt="">
                  <span>{{item.name}}</span>
                </a>
              </li>
            </ul>
          </template>
        </CyclopediaFooter>
        <!-- 二级路由footer -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'
  import 'swiper/css/swiper.min.css'
  import BScroll from 'better-scroll'
  import CyclopediaHeader from '../../components/CyclopediaHeader/CyclopediaHeader'
  import CyclopediaFooter from "../../components/CyclopediaFooter/CyclopediaFooter"
  import {mapState} from 'vuex'
  export default {
    data() {
      return {
        isShowFooter: true
      }
    },
    components: {
      CyclopediaHeader,
      CyclopediaFooter
    },
  
    computed: {
      ...mapState({
        cyclopedia: state => state.cyclopedia
      })
    },
    async mounted() {
      await this.$store.dispatch('cyclopediaAction')
      new Swiper('.swiper-container',{
        loop: true,
          pagination: {
            el: '.swiper-pagination',
          }
       })
    },
    watch: {
      cyclopedia() {
        this.$nextTick(() => { 
          new BScroll('.g-maxRoll', {
          click: true,
          scrollY: true,
          bounce: false
          })
        })
      }
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
          &.active
            display none 
          width 100%
          height 400px
          .swiper-container
          img 
            display block
        CyclopediaFooter
          &.active
            display none

</style>