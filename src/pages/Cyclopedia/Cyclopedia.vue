<template>
  <div id="g-baikeContent">
    <CyclopediaHeader />
    <div class="g-maxRoll">
      <div class="maxRollContent">
        <!-- 导航 -->
        <ul class="g-baikeNav">
          <li class="nav-tab" :class="{active:$route.path === '/cyclopedia/zhuye'}">
            <router-link to="/cyclopedia/zhuye">
              <img v-show="$route.path !== '/cyclopedia/zhuye'" class="icon" src="//mstatic.soyoung.com/m/static/fe_m/view/wiki/img/icon_first_xiangmu1@2x-d1ee44e28c.png"></img>
              <img v-show="$route.path === '/cyclopedia/zhuye'" class="icon" src="//mstatic.soyoung.com/m/static/fe_m/view/wiki/img/icon_first_xiangmu@2x-8ab35d18d8.png"></img>
              <span>项目库</span>
            </router-link>
          </li>
          <li class="nav-tab" :class="{active:$route.path === '/cyclopedia/drug'}">
            <router-link to="/cyclopedia/drug">
              <img v-show="$route.path !== '/cyclopedia/drug'" class="icon" src="//mstatic.soyoung.com/m/static/fe_m/view/wiki/img/icon_first_drug1@2x-6bc3b4f6f9.png"></img>
              <img v-show="$route.path === '/cyclopedia/drug'" class="icon" src="//mstatic.soyoung.com/m/static/fe_m/view/wiki/img/icon_first_drug@2x-1b83dad8e3.png"></img>
              <span>药品库</span>
            </router-link>
          </li>
          <li class="nav-tab" :class="{active:$route.path === '/cyclopedia/tool'}">
            <router-link to="/cyclopedia/tool">
              <img v-show="$route.path !== '/cyclopedia/tool'" class="icon" src="//mstatic.soyoung.com/m/static/fe_m/view/wiki/img/icon_first_tool1@2x-a8ce8df63f.png"></img>
              <img v-show="$route.path === '/cyclopedia/tool'" class="icon" src="//mstatic.soyoung.com/m/static/fe_m/view/wiki/img/icon_first_tool@2x-3e3209b2ae.png"></img>
              <span>仪器库</span>
            </router-link>
          </li>
          <li class="nav-tab" :class="{active:$route.path === '/cyclopedia/material'}">
            <router-link to="/cyclopedia/material">
              <img v-show="$route.path !== '/cyclopedia/material'" class="icon" src="//mstatic.soyoung.com/m/static/fe_m/view/wiki/img/icon_first_material1@2x-b27e2cc93e.png"></img>
              <img v-show="$route.path === '/cyclopedia/material'" class="icon" src="//mstatic.soyoung.com/m/static/fe_m/view/wiki/img/icon_first_material@2x-1dcc78ac0d.png"></img>
              <span>材料库</span>
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
      new BScroll('.g-maxRoll', {
        click: true,
        scrollY: true,
        bounce: false
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

</style>