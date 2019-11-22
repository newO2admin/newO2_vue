import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'

import router from './router'

Vue.config.productionTip = false

new Vue ({
  el: '#app',
  components: {App},
  template: '<App />',
  //安装路由
  router,
})
// new Vue({
//   render: h => h(App),
// }).$mount('#app')
