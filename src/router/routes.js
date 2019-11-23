import Cyclopedia from '../pages/Cyclopedia/Cyclopedia'
import Drug from '../pages/Drug/Drug'
import Material from '../pages/Material/Material'
import Tool from '../pages/Tool/Tool'
import Zhuye from '../pages/Zhuye/Zhuye'
import Login from '../pages/Login/Login'
import Beautiful from '../pages/beautiful/beautiful.vue'
import Beautiful from '../pages/'

import Msite from '../pages/Msite/Msite.vue'
import Categroy from '../pages/Categroy/Categroy.vue'
import Sjld from '../pages/Sjld/Sjld.vue'
// import Cyclopedia from '../pages/Cyclopedia/Cyclopedia.vue'
//放置路由
export default [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/beautiful',
    component: Beautiful,
    children:[
      {
        path: '/beautiful/zhuye',
        component: Zhuye
      }
    ]
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
    path:'/categroy',
    component:Categroy,
  },
  {
    path:'/cyclopedia',
    component:Cyclopedia,
  },
  {
    path:'/sjld',
    component:Sjld,
  },
  {
    path:'/msite',
    component:Msite,
  },
  {
    path: '/',
    redirect: '/cyclopedia'
  }
] 