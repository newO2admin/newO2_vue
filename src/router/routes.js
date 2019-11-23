import Msite from '../pages/Msite/Msite.vue'
import Categroy from '../pages/Categroy/Categroy.vue'
import Sjld from '../pages/Sjld/Sjld.vue'
import Cyclopedia from '../pages/Cyclopedia/Cyclopedia.vue'
import Footer from '../components/Footer/Footer.vue'
//放置路由
export default [
  {
    path: '/msite/:id',
    component: Msite,
    childen:[{
      path:'/msite/footer',
      component: Footer,
    },
    {
      path:'/msite',
      redirect: '/msite/footer'
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
    path: '/',
    redirect: '/msite/0'
  }
]