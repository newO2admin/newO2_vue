
import ajax from './ajax'

/* 获取城市数据 */
export const getCityDatas = () => ajax({
  url: '/cityDatas'
})