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
          <button 
            type="button" 
            class="form-select"
            @click="changeSelect">
            <span ref="phoneWrap">+86</span>
            <i class="iconfont icon-xiala xiala" :style="{transform: `rotate(${count}deg)`}"></i>
          </button>
          <div class="input-wrap">
            <input 
              type="tel"
              maxlength="11"
              placeholder="请输入手机号"
              name="phone"
              v-validate="'required|phone'"
              v-model="phone"
              class="form-input"
              autocomplete="off"
            >
            <span style="color: red;" v-show="errors.has('phone')">{{errors.first('phone')}}</span>
          </div>
          <div class="bsWrapper"  :class="{active:isShowSelect}">
            <ul class="phoneSelect">
              <li :class="{active:isShowPhoneColor}" @click="isShowPhoneColor=true">
                <span ref="phone">+86</span>
                <span>中国大陆</span>
              </li>
              <li :class="{active:isShowPhoneColor}" @click="isShowPhoneColor=true">
                <span>+1</span>
                <span>美国</span>
              </li>
              <li>
                <span>+82</span>
                <span>韩国</span>
              </li>
              <li>
                <span>+81</span>
                <span>日本</span>
              </li>
              <li>
                <span>+61</span>
                <span>澳大利亚</span>
              </li>
              <li>
                <span>+1</span>
                <span>加拿大</span>
              </li>
              <li>
                <span>+44</span>
                <span>英国</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="form-group">
          <div class="msg-wrap">
          <input 
            type="number" 
            maxlength="6" 
            placeholder="请输入验证码"
            name="code1"
            v-validate="'required|code1'"
            v-model="code"
            class="form-input"
          >
          <span style="color: red;" v-show="errors.has('code1')">{{errors.first('code1')}}</span>
          </div>
          <button 
            type="button" class="msg-btn" @click.prevent="sendCode"
            :disabled="!isRightPhoneNumber || !! countDown"
          >{{countDown ? `${countDown}s` : '获取验证码'}}</button>
        </div>
        <p class="tip">未注册的手机将自动创建为新氧用户</p>
        <button class="form-submit" @click.prevent="login">登录</button>
      </form>
      <form class="login-account" :class="{on:isPassWordLogin}" action="">
        <div class="form-group">
          <div class="form-inputThree">
            <input 
              type="text" 
              placeholder="账号（手机/邮箱）"
              name="phoneOrEmail"
              v-validate="'required|phoneOrEmail'"
              v-model="phoneOrEmail"
              class="form-input" 
            >
            <span style="color: red;" v-show="errors.has('phoneOrEmail')">{{errors.first('phoneOrEmail')}}</span>
          </div>
        </div>
        <div class="form-group">
          <div class="form-inputThree">
            <input 
            type="text" 
            placeholder="请输入密码"
            name="pwd"
            v-validate="'required|pwd'"
            v-model="pwd"
            class="form-input" 
            >
            <span style="color: red;" v-show="errors.has('pwd')">{{errors.first('pwd')}}</span>
          </div>
        </div>
        <button type="button" class="form-submit" @click.prevent="login">登录</button>
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
  import BScroll from 'better-scroll'
  import {sendCode, loginPhone, loginPhoneOrEmail} from '../../api'
  export default {
    data() {
      return {
        isPassWordLogin: true, //判断是否手机号or密码登录
        isShowSelect: false, //判断是否显示下拉框
        isShowPhoneColor: false, //判断是否显示选中手机号的颜色
        count: 0,
        phone: '',
        code: '',
        phoneOrEmail: '',
        pwd: '',
        countDown: 0
      }
    },
    mounted() {
      new BScroll('.bsWrapper', {
        click: true,
        scrollY: true,
        scrollX: false,
        bounce: false
      })
      console.log(this.$validator)
    },
    methods: {
      changeSelect() {
        this.isShowSelect = !this.isShowSelect
        this.count += 180
      },
      async login() {
        let {isPassWordLogin, phone, pwd, phoneOrEmail, code} = this
        let names = isPassWordLogin ? ['phone', 'code'] : ['phoneOrEmail', 'pwd']
        const success = await this.$validator.validateAll(names)
        if (success) {
          console.log('前端验证成功')
          let result
          if (isPassWordLogin) {
            result = await loginPhone(phone, code)
            if (result.code === 0) {
              console.log(result)
              this.$router.push('/cyclopedia')
              this.$store.dispatch('getUserAction', {user: result.data})
            }else {
              console.log('手机号或验证码不正确')
            }
          }else {
            result = await loginPhoneOrEmail(phoneOrEmail, pwd)
        }
        }else {
          console.log('前端验证失败')
        }
      },
      async sendCode() {
        let result = await sendCode(this.phone)
        if (result.code === 0) {
           console.log('短信发送成功')
        }else {
          console.log('短信发送失败')
        }
        if (this.intervalId) return
        this.countDown = 10
        this.intervalId = setInterval(() => {
          this.countDown--
          console.log(this.countDown)
          this.countDown === 0 && clearInterval(this.intervalId)
        }, 1000);
      }
    },
    computed: {
      isRightPhoneNumber() {
        return /^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phone)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  loginBtn()
    width 624px
    height 80px
    color #9F9F9F
    font-size 32px
    background-color rgba(255,255,255,.6)
    margin-top 100px
    padding 2px 12px
    border 0
    outline: none

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
              transition all .8s
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
          .bsWrapper
            position absolute
            top 90px
            left 0
            height 0
            overflow hidden
            transition height .8s
            &.active
              height 560px
            .phoneSelect
              background-color white
              box-sizing border-box
              overflow hidden
              z-index 999
              overflow hidden
              li
                display flex
                justify-content space-between
                width 624px
                padding 0 30px
                height 90px
                line-height 90px
                color #777
                font-size 28px
                &.active
                  color #00b6b3
          .msg-wrap
            width 400px
            height 45px
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
          outline none
        .tip
          height 28px
          font-size 24px
          margin-top 16px
          color rgba(255,255,255,.6)
        .form-submit
          loginBtn()

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
          .form-inputThree
            height 45px
            .form-input
              width 604px
              height 50px
              box-sizing border-box
              border none 
              outline none
              padding 0 20px
              color #ffffff
              background-color transparent
            ::-webkit-input-placeholder
              color #ffffff
        .form-submit
          loginBtn()
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
