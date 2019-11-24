import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'
import VueLazyLoad from 'vue-lazyload'
import loading from './assets/images/loading.gif'
Vue.use(VueLazyLoad, {
  loading
})

import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue ({
  el: '#app',
  components: {App},
  template: '<App />',
  //安装路由
  router,
  store
})
// new Vue({
//   render: h => h(App),
// }).$mount('#app')
