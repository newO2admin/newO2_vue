<template>
  <div id="beautifulContainer">
    <!-- 返回上一页 头部 -->
    <div class="header">
      <span class="back"> < </span>
      <span class="title">美丽日记</span>
    </div>
    <!-- 导航 -->
    <div class="nav">
      <div class="drop-down">最热日记</div>
      <div class="drop-down">全部项目</div>
      <div class="drop-down">最全部地区</div>
    </div>
    <div class="pan">

    </div>
    <div class="main-body wrapper">
      <div class="content"> 
        <BeautifulShare/>
        <BeautifulShare/>
        <BeautifulShare/>
        <BeautifulShare/>
        <BeautifulShare/>
      </div>

        
     
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
// import PullUp from '@better-scroll/pull-up'

import BeautifulShare from '../../components/beautifulShare/beautifulShare'
  export default {
    components:{
      BeautifulShare
    },
    mounted(){
      let bs = new BScroll('.wrapper', {
        // pullUpLoad: true
        scrollY: true
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
    .nav
      width 100%
      height 83px
      display flex
      .drop-down
        width 33.3333%
        line-height 83px
        text-align center
    .main-body
      width 100%
      height calc(100vh - 173px)
      overflow hidden

</style>
