import {
  SAVE_USER,
  SAVE_TOKEN,
  SAVE_CYCLOPEDIA
} from './mutations-type'

export default {
  //保存user信息
  [SAVE_USER](state, {user}) {
    // console.log(user)
    state.user = user
  },
  //保存token
  [SAVE_TOKEN](state, {token}) {
    //存储到本地
    // console.log(token)
    localStorage.setItem('token_key', token)
    state.token = token
  },
  //保存医美百科
  [SAVE_CYCLOPEDIA](state, {cyclopedia}) {
    // console.log(cyclopedia)
    state.cyclopedia = cyclopedia
  }
}