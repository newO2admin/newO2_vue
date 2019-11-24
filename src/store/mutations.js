import {SAVE_FOOTITEM} from './mutation-type'

export default{
  [SAVE_FOOTITEM](state,{footItems}){
    state.footItems = footItems
  }
}