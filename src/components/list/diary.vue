<template>
<div class="panels">
  <ul class="diary">.
    <li class="action">
      <span>|</span>
      <span>最热日记</span>
    </li>
    <li>
      <span>|</span>
      <span>最新回复</span>
    </li>
    <li>
      <span>|</span>
      <span>最新日记</span>
    </li>
    <li>
      <span>|</span>
      <span>诊断报告优先</span>
    </li>
  </ul>
</div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .panels
    // display none
    position fixed
    width 100%
    bottom 0
    top 173px
    left 0
    z-index 10
    background #fff
    .diary
      display none 
      li
        height 89px
        line-height 89px
        padding-bottom 1px
        overflow hidden
        font-size 24px
        padding 0 26px
        &.action
          color #2cc7c5

</style>
