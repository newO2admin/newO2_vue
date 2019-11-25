import {
  SAVE_CATEGORYS,
  SAVE_CATEGORYS_ITEM
} from './mutation-type'

export default {
  [SAVE_CATEGORYS](state, {categorys}){
    state.categorys = categorys
    //console.log(categorys)
  },
  [SAVE_CATEGORYS_ITEM](state, {categorysItem}){
    state.categorysItem = categorysItem
  },

}