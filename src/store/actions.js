import {
  getFilterDatas
} from '../api'
import {
  SAVE_CATEGORYS,
} from "./mutation-type";


export default {
  async getFilterDatasAction({commit}, fn){
    //1. 发送请求获取数据
    let result = await getFilterDatas()
    if(result.code === 0){
      // 2. 调用mutation，将数据交给mutation
      commit(SAVE_CATEGORYS, {categorys: result.data})
      typeof fn === 'function' && fn()
    }
  },
}