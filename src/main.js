import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'

import router from './router'
import store from './store'
import './veevalidate'

Vue.config.productionTip = false

new Vue ({
  el: '#app',
  components: {App},
  template: '<App />',
  //安装路由
  router,
  //状态集中管理对象
  store
})
// new Vue({
//   render: h => h(App),
// }).$mount('#app')
