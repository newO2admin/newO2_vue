import Msite from '../pages/Msite/Msite.vue'
import Beautiful from '../pages/beautiful/beautiful.vue'

//放置路由
export default [
  {
    path: '/msite',
    component: Msite,
  },
  {
    path: '/beautiful',
    component: Beautiful,
  },

  {
    path: '/',
    redirect: '/msite'
  }
]