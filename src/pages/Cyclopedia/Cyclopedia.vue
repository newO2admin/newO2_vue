<template>
  <div id="g-baikeContent">
    <CyclopediaHeader />
    <div class="g-maxRoll">
      <div class="maxRollContent">
        <!-- 导航 -->
        <ul class="g-baikeNav" v-if="cyclopedia[0]">
          <li class="nav-tab" v-for="(item, index) in cyclopedia" :key="index">
            <router-link :to="{path: `/cyclopedia/${item.url}`, query: {Bk: item}}">
              <img v-show="$route.path !== `/cyclopedia/${item.url}`" class="icon" :src="item.navUrl"></img>

              <img v-show="$route.path === `/cyclopedia/${item.url}`" class="icon" :src="item.navActiveUrl"></img>
              <span>{{item.name}}</span>
            </router-link>
          </li>
        </ul>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import CyclopediaHeader from '../../components/CyclopediaHeader/CyclopediaHeader'
  import {mapState} from 'vuex'
  export default {
    data() {
      return {
      }
    },
    components: {
      CyclopediaHeader
    },
   
    computed: {
      ...mapState({
        cyclopedia: state => state.cyclopedia
      })
    },
     mounted() {
      this.$nextTick(() => {
        new BScroll('.g-maxRoll', {
          click: true,
          scrollY: true,
          bounce: false
        })
      })
      this.$store.dispatch('cyclopediaAction')
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

</style>
