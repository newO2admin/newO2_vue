<template>
  <div id="beautifulContainer">
    <!-- 返回上一页 头部 -->
    <div class="header" >
      <span class="back" @click="$router.replace('/msite')"> < </span>
      <span class="title">美丽日记</span>
    </div>
    <!-- 导航 -->
    <div class="nav_panesl">
      <div class="nav">
        <div class="drop-down">最热日记</div>
        <div class="drop-down" @click="openlist2()" :class="{action:isShowList}">全部项目</div>
        <div class="drop-down">最全部地区</div>
      </div>
      <list :item="item" v-show="isShowList" :isShowList="isShowList"/>
    </div>
    <div class="main-body wrapper">
      <div class="content" > 
        <a v-for="(user, index) in userArr" :key="index">
          <BeautifulShare :user="user" />
        </a>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
import {mapState} from 'vuex'
// import PullUp from '@better-scroll/pull-up'

import user from '../../../static/user.json'
import projectInfo from '../../../static/3.json'
import BeautifulShare from '../../components/beautifulShare/beautifulShare'
import List from '../../components/list/list'
import {SAVE_BEAUTIFUL} from '../../store/mutation-type'
  export default {
    components:{
      BeautifulShare,
      List
    },
    data(){
      return {
        item:[],
        isShowList: false
      }
    },
    mounted(){
      let bs = new BScroll('.wrapper', {
        // pullUpLoad: true
        scrollY: true,
        click:true
      })
      // console.log(this.$router.r)
      this.item = projectInfo.responseData.item
      // this.userArr = user.responseData.list
      // debugger
      this.$store.dispatch('getBeautifulAsync')
      // this.$store.commit(SAVE_BEAUTIFUL, {userArr})
    },
    methods:{
      openlist2(){
        this.isShowList = !this.isShowList
        // console.log(this.isShowList)
      },
      
    },
    computed: {
      ...mapState({
        userArr: state => state.beautiful.userArr
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #beautifulContainer
    .header
      width 100%
      height 90px
      line-height 90px
      font-size 40px
      // background pink 
      position relative
      border-bottom 1px solid #eee
      .back
        margin-left 10px
        color  #72dacf
      .title
        position absolute
        top 50%
        left 50%
        transform translate(-50%, -50%)
    
    
    .nav_panesl
      .nav
        width 100%
        height 83px
        display flex
        .drop-down
          width 33.3333%
          line-height 83px
          text-align center
          &.action
            color #2cc7c5
      
    .main-body
      width 100%
      position absolute
      top 173px
      height calc(100vh - 173px)
      overflow hidden

</style>
