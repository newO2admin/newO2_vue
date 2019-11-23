import {
  SAVE_USER,
  SAVE_TOKEN
} from './mutations-type'

export default {
  [SAVE_USER](state, {user}) {
    console.log(user)
    state.user = user
  },
  [SAVE_TOKEN](state, {token}) {
    //存储到本地
    console.log(token)
    localStorage.setItem('token_key', token)
    state.token = token
  }
}