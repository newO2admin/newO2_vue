import Vue from 'vue'
import VeeValidate from 'vee-validate'
import zh_CN from 'vee-validate/dist/locale/zh_CN'

Vue.use(VeeValidate)

VeeValidate.Validator.localize('zh_CN', {
  messages: zh_CN.messages,
  attributes: {
    phone: '手机号',
    code: '验证码',
    phoneOrEmail: '用户名',
    pwd: '密码'
  }
})

VeeValidate.Validator.extend('phone', {
  validate: value => {
    return /^1(3|4|5|6|7|8|9)\d{9}$/.test(value)
  },
  getMessage: field => field + '输入错误'
})

VeeValidate.Validator.extend('code1', {
  validate: value => {
    return /^\d{4,6}$/.test(value)
  },
  getMessage: field => field + '必须是4-6位的数字'
})

VeeValidate.Validator.extend('pwd', {
  validate: value => {
    return /(?=(.){6}$)(?=.*\d+.*$)(?=.*[a-z]+.*$)(?=.*[A-Z]+.*$)^.*/.test(value)
  },
  getMessage: field => field + '1.必须是6位2.必须包含至少一个大写字母3.必须包含至少一个小写字母4.必须包含至少1个数字'
})

VeeValidate.Validator.extend('phoneOrEmail', {
  validate: value => {
    return /(^[\w.\-]+@(?:[a-z0-9]+(?:-[a-z0-9]+)*\.)+[a-z]{2,3}$)|(^1[3-9]\d{9}$)/.test(value)
  },
  getMessage: field => field + '手机或邮箱输入错误'
})

export default VeeValidate
