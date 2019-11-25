import Cyclopedia from '../pages/Cyclopedia/Cyclopedia'
import Drug from '../pages/Drug/Drug'
import Material from '../pages/Material/Material'
import Tool from '../pages/Tool/Tool'
import Zhuye from '../pages/Zhuye/Zhuye'
import Login from '../pages/Login/Login'
import Beautiful from '../pages/beautiful/beautiful.vue'
import Userbeautiful from '../pages/userBeautiful/userBeautiful.vue'

import Msite from '../pages/Msite/Msite.vue'
import Ldetail from '../pages/Ldetail/Ldetail.vue'
import Lcategory from '../pages/Lcategory/Lcategory.vue'
// import Cyclopedia from '../pages/Cyclopedia/Cyclopedia.vue'
//放置路由
export default [
  {
    path: '/msite',
    component: Msite,
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/beautiful',
    component: Beautiful,
   
  },
  {
    path: '/userbeautiful',
    component: Userbeautiful
   },
  {
    path: '/cyclopedia',
    component: Cyclopedia,
    children: [
      {
        path: '/cyclopedia/zhuye',
        component: Zhuye
      },
      {
        path: '/cyclopedia/drug',
        component: Drug
      },
      {
        path: '/cyclopedia/tool',
        component: Tool
      },
      {
        path: '/cyclopedia/material',
        component: Material
      },
      {
        path: '/cyclopedia',
        redirect: '/cyclopedia/zhuye'
      }
    ]
  },
  {  
    path:'/lcategroy',
    component:Lcategory,
  },
  {  
    path:'/ldetail',
    component:Ldetail,
  },
  {
    path:'/cyclopedia',
    component:Cyclopedia,
  },
  {
    path:'/msite',
    component:Msite,
  },
  {
    path: '/',
    redirect: '/msite'
  }
] 