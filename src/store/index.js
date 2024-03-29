// store对象
import Vue from 'vue'
import Vuex from 'vuex'
import beautiful from './modules/beautiful'


import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

// 生成并向外暴露一个store对象
export default new Vuex.Store({
  modules: {
    beautiful
  },
  state,
  mutations,
  actions,
  getters
})
