import Msite from '../pages/Msite/Msite.vue'
import Categroy from '../pages/Categroy/Categroy.vue'

//放置路由
export default [
  {
    path: '/msite',
    component: Msite,
  },
  {
    path:'/categroy',
    component:Categroy,
  },
  {
    path: '/',
    redirect: '/msite'
  }
]