import {getFootItem} from '../api'
import {SAVE_FOOTITEM} from './mutation-type'

export default{
  async getFootItemAction({commit}){
    //1. 发送请求获取数据
    let result = await getFootItem
    if(result.code === 0){
      // 2. 调用mutation，将数据交给mutation
      commit(SAVE_FOOTITEM, {footItems: result.data})
    }
  },
}