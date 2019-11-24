import ajax from './ajax'


//获取手机短信验证码
export const sendCode = phone => ajax({
  url: '/sendcode',
  params: {
    phone
  }
})

//手机验证码登陆
export const loginPhone = (phone, code) => ajax({
  url: '/login_sms',
  method: 'POST',
  data: {
    phone,
    code
  }
})

//用户名密码登录
export const loginPhoneOrEmail = (phoneOrEmail, pwd) => ajax({
  url: '/login_pwd',
  method: 'POST',
  data: {
    phoneOrEmail,
    pwd
  }
})

//自动登录
export const autoLogin = () => ajax({
  url: '/auto_login',
  headers: {
    needToken: true
  }
})

//获取医美百科
export const cyclopedia = () => ajax({
  url: '/yimei_baike'
})