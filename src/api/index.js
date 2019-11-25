
import ajax from './ajax'

/* 获取城市数据 */
export const getCityDatas = () => ajax({
  url: '/city_datas'
})

/* 获取默认数据 */
export const getDefaultDatas = () => ajax({
  url: '/default_datas'
})

/* 获取筛选数据 */
export const getFilterDatas = () => ajax({
  url: '/filter_datas'
})


//lmx
export const getBeautiful = () => ajax({ 
  url: '/beautiful'
})
//czc
export const getFootItem = () => ajax({
  url:'/footItem'
})


//获取手机短信验证码gjy
export const sendCode = phone => ajax({
  url: '/sendcode',
  params: {
    phone
  }
})

//手机验证码登陆gjy
export const loginPhone = (phone, code) => ajax({
  url: '/login_sms',
  method: 'POST',
  data: {
    phone,
    code
  }
})

//用户名密码登录gjy
export const loginPhoneOrEmail = (phoneOrEmail, pwd) => ajax({
  url: '/login_pwd',
  method: 'POST',
  data: {
    phoneOrEmail,
    pwd
  }
})

//自动登录gjy
export const autoLogin = () => ajax({
  url: '/auto_login',
  headers: {
    needToken: true
  }
})

//获取医美百科gjy
export const cyclopedia = () => ajax({
  url: '/yimei_baike'
})
