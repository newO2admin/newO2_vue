import {
  SAVE_USER,
  SAVE_TOKEN,
  SAVE_CYCLOPEDIA
} from './mutations-type'
import {
  autoLogin,
  cyclopedia
} from '../api'

export default {
  //把用户信息和token分别保存
  getUserAction({commit}, {user}) {
    commit(SAVE_TOKEN, {token: user.token})
    delete user.token
    commit(SAVE_USER, {user})
  },
  //自动登录
  async autoLoginAction({commit}) {
    let result = await autoLogin()
    if (result.code === 0) {
      commit(SAVE_USER, {user: result.data})
    }
  },
  //获取医美百科信息
  async cyclopediaAction({commit}) {
    let result = await cyclopedia()
    if (result.code === 0) {
      commit(SAVE_CYCLOPEDIA, {cyclopedia: result.data})
    }
  }
}