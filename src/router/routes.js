import Msite from '../pages/Msite/Msite.vue'
import Categroy from '../pages/Categroy/Categroy.vue'
import Beautiful from '../pages/Beautiful/Beautiful.vue'
import Cyclopedia from '../pages/Cyclopedia/Cyclopedia.vue'
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
    path:'/cyclopedia',
    component:Cyclopedia,
  },
  {
    path:'/beautiful',
    component:Beautiful,
  },
  {
    path: '/',
    redirect: '/msite'
  }
]