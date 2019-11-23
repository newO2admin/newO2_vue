import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'
import VueLazyload from 'vue-lazyload'
import jz from './assets/jz.jpg'
import router from './router'

Vue.config.productionTip = false


Vue.use(VueLazyload, {
  preLoad: 1,
  error: jz,
  loading: jz,
})

new Vue ({
  el: '#app',
  components: {App},
  template: '<App />',
  //安装路由
  router
})
// new Vue({
//   render: h => h(App),
// }).$mount('#app')
