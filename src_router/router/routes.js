import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Message from '../pages/Message.vue'
import New from '../pages/New.vue'
import MessageDetail from '../pages/MessageDetail.vue'
export default [
  {
    path: '/home',
    component: Home,
    children:[
      {
        path:'/home/message',
        component: Message,
        children:[
          {
            path:'/home/message/detail/:id',
            component: MessageDetail,
          }
        ]
      },
      {
        path:'/home/new',
        component: New,
      },
      {
        path: '/home',
        redirect: '/home/new'
      }
    ]
  },
  {
    path:'/about',
    component:About,
  },
  // 自动跳转路由
  {
    path: '/',
    redirect: '/home'
  }
]
