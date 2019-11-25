import axios from 'axios'
import qs from 'qs'

const instance = axios.create({
  baseURL: '/api'
})

instance.interceptors.request.use(
  config => {
    if(config.method.toUpperCase() === 'POST') {
      config.data = qs.stringify(config.data)
    }

    let token = localStorage.getItem('token_key')
    if (config.headers.needToken) {
      if (token) {
        // console.log(token)
        config.headers.authorization = token
      }else {
        throw new Error('请先登录')
      }
    }


    return config
  }
)

instance.interceptors.response.use(
  response => response.data,
  error => {
    console.log('请求失败') 
  }
)

export default instance