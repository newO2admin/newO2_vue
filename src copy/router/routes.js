import Msite from '../pages/Msite/Msite.vue'
import Lcategory from '../pages/Lcategory/Lcategory.vue'
import Ldetail from '../pages/Ldetail/Ldetail.vue'

//放置路由
export default [
  {
    path: '/msite',
    component: Msite,
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
    redirect: '/lcategory'
  }
]