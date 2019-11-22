import Msite from '../pages/Msite/Msite.vue'
import Beautiful from '../pages/beautiful/beautiful.vue'
import Lcategory from '../pages/Lcategory/Lcategory.vue'
import Ldetail from '../pages/Ldetail/Ldetail.vue'

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
    path: '/lcategory',
    component: Lcategory
  },
  {
    path: '/ldetail',
    component: Ldetail
  },
  {
    path: '/',
    redirect: '/msite'
  }
]