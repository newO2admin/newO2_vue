
import ajax from './ajax'

/* 获取城市数据 */
export const getCityDatas = () => ajax({
  url: '/city_datas'
})

/* 获取默认数据 */
export const getDefaultDatas = () => ajax({
  url: '/default_datas'
})

/* 获取筛选数据 */
export const getFilterDatas = () => ajax({
  url: '/filter_datas'
})

