<template>
  <div id="shareContainer">
    <div class="user_name">
      <img :src="user.avatar.u" alt="">
      <div class="info">
        <p class="title">
          <span class="naem">{{user.user_name}}</span>
          <span class="vip"></span>
        </p>
        <p class="time">{{user.create_date_str}}</p>
      </div>
    </div>
    <div class="user_photo">
      <span class="left">
        <img :src="user.top.img.u" alt="">
        <i>Before</i>
      </span>
      <span class="right">
        <img :src="user.middle.img.u" alt="">
        <i>D+{{user.top.day_num}}天</i>
      </span>
    </div>
    <p class="describe">
      {{user.top.summary}}
    </p>
    <div class="label">
      <span class="topic" v-for="(item, index) in itemArr" :key="index" >
        <span class="topic_id">#</span>
        <span class="topci_text">{{item.item_name}}</span>
      </span>
    </div>
    <p class="pirce">
      <i></i>
      <span class="place">
        <span>【{{user.end.item_name}}】</span>
        <span>{{user.end.hospital_name}}</span>
      </span>
      <span class="pirce_num">¥{{user.end.price}}</span>
    </p>
    <div class="reading">
      <span class="left">{{user.end.view_cnt}}人已看</span>
      <div class="heart">
        <span class="center">icon图标 {{user.end.comment_cnt}}</span>
        <span class="right">icon图标 {{user.end.favor_cnt}}</span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props:{
      user: {
        type:Object,
        required:true
      }
    },
    // data(){
    //   // item :[]
    // },
    // mounted(){

    // },
    computed: {
      itemArr(){
        let {user} = this
        let classArr = []
        classArr = user.item
        return classArr
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #shareContainer
    width 750px
    height 700px
    padding 18px 30px 0 30px
    border-bottom 20px solid #f3f3f7
    // background green 
    .user_name
      width 690px
      height 64px
      // background pink
      display flex
      img 
        width 60px
        height 64px
        border-radius 50%
      .info
        margin-left 20px
        font-size 24px
        .title
          color #000
          display flex
          .vip
            width 72px
            height 28px
            margin-left 10px
            background url(../../assets/vip.png) no-repeat
            background-size 1650px 20px
            background-position 0px 0px
        .time
          color #cecece
    .user_photo
      width 100%
      height 340px
      margin-top 20px
      display flex
      span
        width 50%
        height 100%
        border-radius 20px
        overflow hidden
        position relative
        img 
          width 100%
          height 100%
        i 
          padding-right 20px
          color #fff
          position absolute 
          bottom 0 
          left 0
          background rgba(0, 0, 0, 0.4)
          margin-left 20px
          border-radius 20px
        &.right
          margin-left 10px
          i
            background rgba(44, 199, 197, 0.4)
    .describe
      width 100%
      height 80px
      margin 10px 0 0 0
      // white-space nowrap
      // text-overflow ellipsis
      // overflow hidden
      line-height 40px
      overflow hidden
      text-overflow ellipsis
      display -webkit-box
      -webkit-line-clamp 2
      -webkit-box-orient vertical
    .label
      width 100%
      height 36px
      // display flex
      // background pink
      margin-right 50px
      white-space nowrap
      text-overflow ellipsis
      overflow hidden
      .topic 
        margin-right 20px
        white-space nowrap
        text-overflow ellipsis
        // overflow hidden
        span 
          color #AAABB3
    .pirce
      width 100%
      height 42px
      background #F5F5F5
      // padding 14px
      margin-top 14px
      border-radius 100px
      // display flex
      // justify-content flex-start
      line-height 42px
      position relative
      i 
        background url(../../assets/02.png) no-repeat
        background-size 24px 24px
        width 24px
        height 24px
        // vertical-align text-top
        // background-position 
        position absolute
        top 50%
        left 10px
        margin-top -12px
      .place
        height 24px
        width  570px
        position absolute
        left 0
        right 0
        margin auto
        color #AEAEAE
      .pirce_num
        position absolute
        right 10px
        color #FF527F
    .reading
      width 100%
      height 76px
      // background pink
      display flex
      color #777777
      position relative
      .left
        color #777777
        height 40px
        margin 18px  66px 18px 0
      .heart 
        position absolute
        right 0 
        height 40px
        margin 18px  0 18px 0
        






   
          


          
            
          
          
      


      
        

      
          

</style>
