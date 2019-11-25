
import {
  getFootItem,
  autoLogin,
  cyclopedia,
  getFilterDatas
} from '../api'
import {
  SAVE_FOOTITEM,
  SAVE_USER,
  SAVE_TOKEN,
  SAVE_CYCLOPEDIA,
  SAVE_CATEGORYS,
} from './mutation-type'

export default{
  //czc
  async getFootItemAction({commit}){
    //1. 发送请求获取数据
    let result = await getFootItem()
    // console.log(result.data)
    if(result.code === 0){
      // 2. 调用mutation，将数据交给mutation
      commit(SAVE_FOOTITEM, {footItems: result.data})
    }
  },
  //把用户信息和token分别保存gjy
  getUserAction({commit}, {user}) {
    commit(SAVE_TOKEN, {token: user.token})
    delete user.token
    commit(SAVE_USER, {user})
  },
  //自动登录gjy
  async autoLoginAction({commit}) {
    let result = await autoLogin()
    if (result.code === 0) {
      commit(SAVE_USER, {user: result.data})
    }
  },
  //获取医美百科信息gjy
  async cyclopediaAction({commit}) {
    let result = await cyclopedia()
    if (result.code === 0) {
      commit(SAVE_CYCLOPEDIA, {cyclopedia: result.data})
    }
  },

  //获取筛选商家数据
  async getFilterDatasAction({commit}, fn){
    //1. 发送请求获取数据
    let result = await getFilterDatas()
    if(result.code === 0){
      // 2. 调用mutation，将数据交给mutation
      commit(SAVE_CATEGORYS, {categorys: result.data})
      typeof fn === 'function' && fn()
    }
  }
}