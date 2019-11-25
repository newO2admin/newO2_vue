import Cyclopedia from '../pages/Cyclopedia/Cyclopedia'
import Drug from '../pages/Drug/Drug'
import Material from '../pages/Material/Material'
import Tool from '../pages/Tool/Tool'
import Login from '../pages/Login/Login'

//放置路由
export default [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/cyclopedia',
    component: Cyclopedia,
    children: [
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
      }
    ]
  },
  {
    path: '/',
    redirect: '/login'
  }
]