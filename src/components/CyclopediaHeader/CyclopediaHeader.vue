<template>
  <div>
    <header class="g-baikeHeader">
      <div class="iconfont icon-fanhui fanhui" @click="$router.push('/login')"></div>
      <span></span>
      <i class="iconfont icon-sousu search"></i>
    </header>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .g-baikeHeader
    width 750px
    height 88px
    position fixed
    top 0
    left 0
    z-index 10
    display flex
    justify-content: space-between
    .fanhui
      padding 30px
    span
      display inline-block
      width 150px
      height 38px
      margin-top 24px
      background url('//mstatic.soyoung.com/m/static/fe_m/view/wiki/img/img_baike@2x-19d9e7cf9d.png')
      background-repeat no-repeat
      background-size contain
    .search
      padding 30px
    
 
</style>
