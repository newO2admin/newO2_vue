import Msite from '../pages/Msite/Msite.vue'

//放置路由
export default [
  {
    path: '/msite',
    component: Msite,
  },
  {
    path: '/',
    redirect: '/msite'
  }
]