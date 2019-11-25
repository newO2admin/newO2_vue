import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import { nextTick } from 'q'

//声明使用扩展库
Vue.use(VueRouter)

//1.生成路由器，管理路由
const router = new VueRouter({
  mode: 'hash',
  routes
})

//全局前置守卫:每次进入页面都到页面顶部
router.beforeEach((to, from, next) => {
  window.scrollTo(0,0)
  next()

})

export default router