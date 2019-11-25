

import {
  SAVE_FOOTITEM,
  SAVE_USER,
  SAVE_TOKEN,
  SAVE_CYCLOPEDIA,
  SAVE_CATEGORYS,
  SAVE_CATEGORYS_ITEM
} from './mutation-type'

export default{
  //czc
  [SAVE_FOOTITEM](state,{footItems}){
    state.footItems = footItems
  },
  //保存user信息gjy
  [SAVE_USER](state, {user}) {
    // console.log(user)
    state.user = user
  },
  //保存token gjy
  [SAVE_TOKEN](state, {token}) {
    //存储到本地
    // console.log(token)
    localStorage.setItem('token_key', token)
    state.token = token
  },
  //保存医美百科gjy
  [SAVE_CYCLOPEDIA](state, {cyclopedia}) {
    // console.log(cyclopedia)
    state.cyclopedia = cyclopedia
  },

  //保存筛选商家信息lp
  [SAVE_CATEGORYS](state, {categorys}){
    state.categorys = categorys
    //console.log(categorys)
  },
  //保存单个商家信息lp
  [SAVE_CATEGORYS_ITEM](state, {categorysItem}){
    state.categorysItem = categorysItem
  }
}
