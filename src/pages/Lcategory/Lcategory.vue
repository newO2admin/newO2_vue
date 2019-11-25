<template>
  <div>
      <div id="lcategory">
        <div class="lcategory_header">
          <span class="header_title">
            <span class="header_title_text ">面部轮廓</span>
          </span> 
          <span class="lcategory_back" @click="$router.replace('/msite')"> < </span> 
        </div>
        <div class="filter-group">
          <div class="inner">
            <a href="javascript:" :class="{active:cityLight}" @click="cityLightClick">
              <div>
                <span>北京市</span>
                <span class="iconfont icon-arrow-down"></span>
              </div>
            </a>      
            <a href="javascript:" :class="{active:meirongLight}"  @click="meirongLightClick">
              <div class="henxian">
                <span>{{name}}</span>
                <span class="iconfont icon-arrow-down"></span>
              </div>
            </a>       
            <a href="javascript:" :class="{active:paixuLight}"  @click="paixuLightClick">
              <div>
                <span>智能排序</span>
                <span class="iconfont icon-arrow-down"></span>
              </div>
            </a>
          </div>
        </div>
        <div class="blank"></div>
        <div class="wrapper">
          <ul class="product-list">
            <li class="product-item" v-for="item in 10" :key="item" @click="$router.push('/ldetail')">
              <a href="javascript:" class="link-info">
                <img class="hot_pic" v-lazy="`https://img2.soyoung.com/post/20191113/7/dc60bd535b2dc189b165050a1500a084_400.png`" alt="">
                <div class="hot_text">
                  <h3>【面部吸脂】【全脸吸脂升级版】瘦脸紧致提升三合一，逆向V脸提升，不戴头套0压迫，重塑上镜小脸</h3>
                  <h4>巩敏 北京艺美医疗美容诊所</h4>
                  <h4>发起预约数: 15131</h4>
                  <div class="price">
                    <span>
                      ¥
                      <em>12800</em>
                    </span>
                    <u>￥</u>
                    <u>12800</u>
                    <img class="vip" src="../../assets/hk.jpg" alt="">
                  </div>
                </div>
              </a>
              <span class="paihang">
                <img src="//mstatic.soyoung.com/m/static/img/product/crown@x.png" alt="">
                <span>北京市面部轮廓月销TOP3</span>
              </span>
              <a class="flag-link" href="javascript:">
                <div class="flag-item">
                  <div class="flag-icon">
                    <span class="iconfont iconjuan"></span>
                    <span>尾款红包</span>
                  </div>
                  <div class="flag-text">
                    <span>付尾款，最高立减¥300</span>
                  </div>
                </div>
              </a>
            </li>
          
            
          </ul>      
        </div>
      </div>
      <!-- 遮罩 -->
      <div class="mask" v-show="cityLight || meirongLight || paixuLight">
        <div class="wrapper" ref="wrapper1">
          <ul class="yiji content" v-show="meirongLight">
            <li  v-for="(item, index) in menu1_info" @click="dianji1(index)" :class="{active:yijiIndex==index}" :key="index">{{item.name}}</li>
          </ul>
        </div>
        <div class="wrapper" ref="wrapper2">
          <ul class="yiji content" v-show="yijiIndex && this.meirongLight">
            <li  v-for="(item, index) in son" @click="dianji2(index)" :class="{active:yijiIndex2==index}" :key="index">{{item.name}}</li>
          </ul>
        </div>
        <div class="wrapper" ref="wrapper4">
          <ul class="yiji content" v-show="yijiIndex2 && yijiIndex && this.meirongLight">
            <li  v-for="(item, index) in son_son" @click="dianji3(index)" :class="{active:yijiIndex3==index}" :key="index">{{item.name}}</li>
          </ul>
        </div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { responseData } from '../../../datas/111.json'
  import BScroll from 'better-scroll'
  import getCityDatas from '../../api'
  export default {
    data(){
      return {
        cityLight: false,
        meirongLight: false,
        paixuLight: false,
        menu1_info: [],
        yijiIndex: 0,
        yijiIndex2: 0,
        yijiIndex3: 0,
        son:[],
        son_son: [],
        name:'面部轮廓',
        father_Name: '',
        //son_Name:'',

      }
    },
    methods:{
      cityLightClick(){
        this.cityLight = !this.cityLight,
        this.meirongLight = false,
        this.paixuLight = false
      },
      meirongLightClick(){
        this.cityLight = false,
        this.meirongLight = !this.meirongLight,
        this.paixuLight = false
        if (!this.meirongLight) {
          this.yijiIndex = 0 
          this.yijiIndex2 = 0
          this.yijiIndex3 = 0
        }
      },
      paixuLightClick(){
        this.cityLight = false,
        this.meirongLight = false,
        this.paixuLight = !this.paixuLight
      },
      dianji1(index){
        this.yijiIndex2 = 0
        this.yijiIndex = index
        let xyz = this.menu1_info[index]
        this.son = xyz.son
        this.father_Name = xyz.name
        console.log(this.son)

        if (this.yijiIndex===0) {
          this.name = xyz.name
          console.log('ccc')
          this.yijiIndex = 0 
          this.yijiIndex2 = 0
          this.yijiIndex3 = 0

          this.cityLight = false
          this.meirongLight = false
          this.paixuLight = false
        }
      },
      dianji2(index){
        this.yijiIndex3 = 0
        this.yijiIndex2 = index
        let xyz = this.son[index]
        this.son_son = xyz.son
        //console.log(this.son_son)
        if (!xyz.son) {
          this.name = this.father_Name

          this.yijiIndex = 0 
          this.yijiIndex2 = 0
          this.yijiIndex3 = 0

          this.cityLight = false
          this.meirongLight = false
          this.paixuLight = false
        }

      },

      dianji3(index){
        this.yijiIndex3 = index
        let xyz = this.son_son[index]
        if (!xyz.son) {
          this.name = xyz.name

          this.yijiIndex = 0 
          this.yijiIndex2 = 0
          this.yijiIndex3 = 0

          this.cityLight = false
          this.meirongLight = false
          this.paixuLight = false
        }
      }

    },
    mounted(){
        this.scroll3 = new BScroll('.wrapper', {
            scrollY: true, // 设置纵向滑动
             click: true,  //设置是否可以点击
          })
        // console.log('xxx')
        // console.log(responseData.menu1_info)
        this.menu1_info = responseData.menu1_info
        /* 发请求 */
        let cityDatas = getCityDatas()
        //console.log(cityDatas)

        this.scroll1 = new BScroll(this.$refs.wrapper1, {
          scrollX: false,
          scrollY: true,
          bounce: {
            top: false,
            bottom: false,
          },
          click: true,
        })

        this.scroll2 = new BScroll(this.$refs.wrapper2, {
          scrollX: false,
          scrollY: true,
          bounce: {
            top: false,
            bottom: false,
          },
          click: true,
        })

        this.scroll4 = new BScroll(this.$refs.wrapper4, {
          scrollX: false,
          scrollY: true,
          bounce: {
            top: false,
            bottom: false,
          },
          click: true,
        })
      
    }
  }
</script>

<style  lang='stylus' rel='stylesheet/stylus'>
  #lcategory
    width 100%
    .lcategory_header
      position fixed
      z-index 99
      width 100%
      height 90px
      background #fff
      .header_title
        position absolute
        top 50%
        left 50%
        transform translate(-50%, -50%)
        width 50%
        color #fff
        text-align center
        .header_title_text
          font-size 40px
          color #000
          display block
      .lcategory_back
        position absolute
        top 0
        left 0 
        font-size 40px
        line-height 90px
        font-weight bold
        color #72dacf
        padding 0 24px
    .blank
      width 100%
      height 163px
    .filter-group
      position fixed
      z-index 99
      left 0
      top 90px
      box-sizing border-box
      border-top 1px solid #eeeeee
      border-bottom 1px solid #eeeeee
      width 100%
      height 73px
      background #fff
      .inner
        width 100%
        height 73px
        display flex
        justify-content space-between
        align-items center
        a
          display block
          width 33.33%
          height 42px
          line-height 42px
          text-align center
          font-size 28px 
          &.active
            color #69D7CC
          .henxian
            box-sizing border-box
            border-right 1px solid #eeeeee
            border-left 1px solid #eeeeee
    .wrapper
      height calc(100vh - 163px)
      .product-list
        width 100%
        background #F3F7F7
        .product-item
          width 100%
          height 351px
          padding 30px
          margin-bottom 30px
          background #fff
          .link-info
            display block
            display flex
            width 100%
            height 184px
            background #fff  
            .hot_pic
              width 180px
              height 180px
              margin-right 20px
            .hot_text
              width 490px
              height 184px
              h3
                width 490px
                height 72px
                font-size 28px
                overflow : hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
              h4
                width 490px
                height 34px
                padding-top 10px
                font-size 22px
                line-height 34px
                color #777
              .price
                justify-items center
                width 490px
                height 44px
                line-height 44px
                display flex
                padding-top 8px
                span 
                  display block
                  margin-right 10px
                  font-size 22px
                  color #ff527f
                  em
                    font-size 36px
                    font-family PingFangSC-Regular, Arial, Helvetica, sans-serif
                    color #ff527f  
                u
                  font-size 30px
                  color #DBB276
                  text-decoration none
                .vip
                  display block
                  width 60px
                  height 23px
                  line-height 40px
                  margin 10px 0 0 10px
          .paihang
            display flex
            width 344px
            height 42px 
            line-height 30px        
            background #FDF5E1
            border 1px solid #F5EABD
            margin 12px 0 0 200px
            padding 6px 12px
            vertical-align middle
            span 
              font-size 24px
              color #D19C42
            img 
              display block
              width 28px
              height 28px
              margin 0 8px 0 4px
          .flag-link
            display block
            width 100%
            height 62px
            padding 18px 0 16px
            margin-top 18px
            .flag-item
              display flex
              .flag-icon
                display flex
                width 173px 
                height 28px
                .span
                  display block
                  font-size 12px
                  margin 0 10px
              .flag-text
                padding-left 20px
                border-left 1px solid #eee
  .mask
    //display none
    z-index 99
    position fixed
    top 162px
    bottom 0px
    left 0px
    right 0px
    background #fff
    display flex
    .wrapper
      height 1160px
      overflow hidden
      .yiji
        float left
        li
          box-sizing border-box
          width 230px
          height 80px
          line-height 80px
          padding 0 16px
          border-bottom 1px solid #eee
          background #eee
          &.active
            border-left 5px solid #69D7CC
            background #fff
            color #69D7CC

</style>
