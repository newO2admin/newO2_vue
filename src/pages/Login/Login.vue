<template>
  <div id="g-Login">
    <header>
      <i class="iconfont icon-quxiao chahao"></i>
      <div>
        <span>立即注册</span>
        <i class="iconfont icon-jinru jinru"></i>
      </div>
    </header>
    <nav>
      <p :class="{active:isPassWordLogin}" @click="isPassWordLogin=true">手机号快捷登录</p>
      <p :class="{active:!isPassWordLogin}" @click="isPassWordLogin=false">账号密码登录</p>
    </nav>
    <main>
      <form class="login-quick" :class="{on:!isPassWordLogin}" action="">
        <div class="form-group">
          <button type="button" class="form-select">
            <span>+86</span>
            <i class="iconfont icon-xiala xiala"></i>
          </button>
          <div class="input-wrap">
            <input type="tel" class="form-input" placeholder="请输入手机号">
          </div>
        </div>
        <div class="form-group">
          <div class="msg-wrap">
            <input type="number" maxlength="6" placeholder="请输入验证码" class="form-input">
          </div>
          <button type="button" class="msg-btn">获取验证码</button>
        </div>
        <p class="tip">未注册的手机将自动创建为新氧用户</p>
        <button type="button" class="form-submit" disabled>登录</button>
      </form>
      <form class="login-account" :class="{on:isPassWordLogin}" action="">
        <div class="form-group">
          <input type="text" class="form-input" placeholder="账号（手机/邮箱）">
        </div>
        <div class="form-group">
          <input type="text" class="form-input" placeholder="请输入密码">
        </div>
        <button type="button" class="form-submit" disabled>登录</button>
        <p class="js-btn">找回密码</p>
      </form>
    </main>
    <footer>
      <p class="other-title">
        <span>— 其他登陆方式 —</span>
      </p>
      <p class="other-type">
        <i class="iconfont icon-weibo"></i>
        <i class="iconfont icon-qq"></i>
        <i class="iconfont icon-weixin"></i>
      </p>
      <p class="other-warn">
        登录/注册代表您已同意
        <a href="https://www.soyoung.com/apps/usernotes">《新氧会员使用协议》</a>
      </p>
    </footer>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        isPassWordLogin: true 
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #g-Login
    height 1334px
    background-color pink
    header
      width 100%
      height 80px
      color #ffffff
      position relative
      .chahao
        position absolute
        top 30px
        left 30px
        font-size 32px
      div
        position absolute
        top 30px
        right 40px
        span
          font-size 24px
        .jinru
          font-size 24px
    nav
      height 80px
      margin 0 63px
      color #fff
      display flex  
      justify-content space-around
      p
        font-size 32px
        line-height 80px
        &.active
          box-sizing border-box
          border-bottom 6px solid rgba(255,255,255,.4)
    main
      height 452px
      margin-bottom 320px
      .login-quick
        height 100%
        margin 120px 63px 0
        &.on
          display none
        .form-group
          height 90px
          padding-right 20px
          margin-bottom 32px
          background-color rgba(255,255,255,.2)
          display flex
          align-items center
          justify-content space-between
          position relative
          .form-select
            width 104px
            height 50px
            border 2px solid transparent
            background-color transparent
            box-sizing border-box
            text-align center
            position relative
            font-size 32px
            color #fff
            outline none
            .xiala
              font-size 40px
              position absolute
              top 4px
          .input-wrap
            width 480px
            height 45px
            .form-input
              box-sizing border-box
              width 100%
              height 50px
              padding 0 20px
              line-height 50px
              font-size 28px
              color #ffffff
              background-color transparent
              border none
              outline none
            ::-webkit-input-placeholder
                color #ffffff
          .msg-wrap
            width 400px
            height 90px
            display flex
            align-items center
            .form-input
              width 100%
              height 50px
              box-sizing border-box
              padding 0 20px
              line-height 50px
              font-size 28px
              color #ffffff
              background-color transparent
              border none
              outline none
            ::-webkit-input-placeholder
                color #ffffff
          .msg-btn
            width 172px
            height 48px
            font-size 28px
            color #ffffff
            background-color transparent
            border 1px solid #ffffff
        .tip
          height 28px
          font-size 24px
          margin-top 16px
          color rgba(255,255,255,.6)
        .form-submit
          width 624px
          height 80px
          color #9F9F9F
          font-size 32px
          background-color rgba(255,255,255,.6)
          margin-top 100px
          padding 2px 12px
          border 0
      .login-account
        &.on
          display none
        height 496px
        margin 120px 63px 0 
        .form-group
          height 90px
          padding-right 20px
          margin-bottom 32px
          background-color rgba(255,255,255,.2)
          display flex
          align-items center
          position relative
          .form-input
            width 604px
            height 50px
            box-sizing border-box
            border none 
            outline none
            padding 0 20px
            background-color transparent
          ::-webkit-input-placeholder
            color #ffffff
        .form-submit
          width 624px
          height 80px
          color #9F9F9F
          font-size 32px
          background-color rgba(255,255,255,.6)
          margin-top 130px
          padding 2px 12px
          border 0
        .js-btn
          color #ffffff
          float right
          font-size 28px
          margin-top 16px

        
    footer
      text-align center 
      .other-title
        height 52px
        color #ffffff
        font 24px
      .other-type
        width 456px
        height 140px
        margin 0 147px
        display flex
        justify-content space-around
        justify-items center
        i
          display inline-block
          font-size 80px
          width 33.3%
          height 88px
          line-height 140px
          color #ffffff
      .other-warn
        height 84px
        padding-bottom 8px
        color #ffffff
        font 24px
        a
          color #ffffff

        
              
        

        


</style>
