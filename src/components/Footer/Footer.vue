<template>
  <div>
    <div class="footer">
      <div class="foot">
        <div class="footLeft">
          <ul class="footLeftList">
            <li class="footLeftItem" v-for="(footItem, index) in rFootDatas" :key="index">
              <div class="footerBox">
                <img class="boxImg" v-lazy="footItem.bigImg" alt="">
                <p class="boxTitle">{{footItem.bigTitle}}</p>
              </div>
              <div class="footIcon">
                <img class="icon1" v-lazy="footItem.sameImg" alt="">
                <i class="userName">{{footItem.smallTitle}}</i>
              </div>
              <div class="footLike">
                <i>❤</i>
                <span>{{footItem.number}}</span>
              </div>
            </li>
          </ul>
        </div>
        <div class="footRight">
          <ul class="footRightList">
            <li class="footRightItem" v-for="(footItem, index) in lFootDatas" :key="index">
              <div class="footerBox">
                <img class="boxImg" v-lazy="footItem.bigImg" alt="">
                <p class="boxTitle">{{footItem.bigTitle}}</p>
              </div>
              <div class="footIcon">
                <img class="icon1" v-lazy="footItem.sameImg" alt="">
                <i class="userName">{{footItem.smallTitle}}</i>
              </div>
              <div class="footLike">
                <i>❤</i>
                <span>{{footItem.number}}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
 import {mapState} from 'vuex'
  export default {
   data(){
     return{
       lFootDatas:[],
       rFootDatas:[]
     }
   },
   mounted(){
    
    this.$store.dispatch('getFootItemAction')
   },
   computed:{
     ...mapState({
       footItems: state => state.footItems
     }),
     newCategorys(){
       return this.categorys
       console.log(this.categorys)
     }
   },
   watch:{
    footItems(){
        this.$nextTick(() =>{
          this.lFootDatas = this.footItems[0]
          this.rFootDatas = this.footItems[1]
        })
      }
   }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
 .footer
    width 100%
    background #eee
    // background pink
    .foot
      width 100%
      // background green
      box-sizing border-box 
      padding 0 30px
      display flex
      .footLeft
        width 50%
        // background #ee5
        .footLeftList
          .footLeftItem
            .footerBox
              .boxImg
                border-radius 40px
              .boxTitle
                background #fff
                display block
                white-space  nowrap
                overflow hidden
                text-overflow  ellipsis
                padding 20px
            .footIcon
              background #fff
              width 50px
              height  50px
              border-radius 50%
              position absolute
              .icon1
                z-index 2
                display block
                width 40px
                height 40px
                border-radius 50%
                position absolute
                left 10px
                top 10px
              .userName
                z-index 2
                display block
                white-space  nowrap
                overflow hidden
                text-overflow  ellipsis
                position absolute
                left 60px
                top 10px
                width 140px
                height 36px
          .footLike
            background #fff
            position relative
            height 50px
            i 
              position absolute
              left 250px
              top 10px
              height 36px
            span
              position absolute
              left 280px
              top 10px
              height 36px
      .footRight
        width 50%
        background #eee
        .footerBox
          .boxImg
            border-radius 40px
          .boxTitle
            background #fff
            display block
            white-space  nowrap
            overflow hidden
            text-overflow  ellipsis
            padding 20px
        .footIcon
          background #fff
          width 50px
          height  50px
          border-radius 50%
          position absolute
          .icon1
            z-index 2
            display block
            width 40px
            height 40px
            border-radius 50%
            position absolute
            left 10px
            top 10px
          .userName
            z-index 2
            display block
            white-space  nowrap
            overflow hidden
            text-overflow  ellipsis
            position absolute
            left 60px
            top 10px
            width 140px
            height 36px
      .footLike
        background #fff
        position relative
        height 50px
        i 
          position absolute
          left 250px
          top 10px
          height 36px
        span
          position absolute
          left 280px
          top 10px
          height 36px
</style>
