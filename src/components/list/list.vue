<template>
  <div class="panels">
    <div class="project">
      <div class="first_project">
        <ul class="first content">
          <li @click="getIndex(index,pro)" :class="{action: classIndex === index}" v-for="(pro,index) in item" :key="index">
            <span>|</span>
            <span>{{pro.name}}</span>
          </li>
        </ul>
      </div>
      <div class="second_project">
        <ul class="second content">
          <li @click="get2Index(index,pro)" :class="{action: class2Index === index}"  v-for="(pro, index) in second" :key="index">
            <span>|</span>
            <span>{{pro.name}}</span>
          </li>
        </ul>
      </div>
      <div class="third_project">
        <ul class="third content" >
          <li  @click="get3Index(index)" :class="{action: class3Index === index}" v-show="class2Index" v-for="(pro, index) in third" :key="index">
            <span>|</span>
            <span>{{pro.name}}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="region">
      <ul class="first content">
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
          <li>
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
          <li>
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
          <li>
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
          <li>
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
          <li>
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
          <li>
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
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  export default {
    props:{
      item:{
        type: Array,
        required: true
      },
      isShowList:{
        type: Boolean,
        required: true
      }
    },
    data(){
      return {
        classIndex: 0,
        class2Index:0,
        class3Index:0,
        second:[],
        third:[]
      }
    },
    mounted(){
      new BScroll('.first_project', {
        // pullUpLoad: true
        scrollY: true,
        click: true,
        
      })
      new BScroll('.second_project', {
        // pullUpLoad: true
        scrollY: true,
        click: true
      })
      new BScroll('.third_project', {
        // pullUpLoad: true
        scrollY: true,
        click: true
      })
    },
    methods:{
      getIndex(index,pro){
        this.classIndex = index
        this.class2Index = 0
        this.class3Index = 0
        this.second = pro.menu2
        // console.log(pro.menu2)
      },
      get2Index(index,pro){
        this.class2Index = index
        this.third = pro.item
        // console.log(index,pro)
      },
      get3Index(index){
        this.class3Index = index
        // this.third = pro.item
        console.log(index)
        // console.log(this._props.)
        this._props.isShowList = false
        // console.log( this.props.isShowList)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .panels
    position fixed
    width 100%
    bottom 0
    top 173px
    left 0
    z-index 10
    background #fff
    .project
      // display none
      display flex
      justify-content space-around
      background #fff
      overflow hidden
      .first_project
        height calc(100vh - 173px)
        position relative
        width 100%
        background-color #f5f5f5
        ul
          width 100%
          display flex
          flex-direction column
          position absolute
          li
            height 89px
            line-height 89px
            padding-bottom 1px
            overflow hidden
            font-size 30px
            padding 0 26px
            &.action
              color #2cc7c5
      .second_project
        height calc(100vh - 173px)
        position relative
        width 100%
        ul
          width 100%
          display flex
          flex-direction column
          position absolute
          li
            height 89px
            line-height 89px
            padding-bottom 1px
            overflow hidden
            font-size 24px
            padding 0 26px
            &.action
              color #2cc7c5
      .third_project
        height calc(100vh - 173px)
        position relative
        width 100%
        ul
          width 100%
          display flex
          flex-direction column
          position absolute
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
