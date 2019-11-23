import Vue from 'vue'
import {
  getBeautiful
} from '../../api'

import {SAVE_BEAUTIFUL} from '../mutation-type'

const state = {
  userArr: [],
}


const actions = {
  async getBeautifulAsync({commit}){
    console.log('action')
    let result = await getBeautiful()
    console.log(result)
    if(result.code === 0){
      commit(SAVE_BEAUTIFUL, {userArr: result.data.responseData.list})
    }
  }
}

const mutations = {
  [SAVE_BEAUTIFUL](state, {userArr}){
    state.userArr = userArr
  }
}

const getters = {
  
}

export default {
  state,
  actions,
  mutations,
  getters
}
