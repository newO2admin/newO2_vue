import {
  SAVE_USER,
  SAVE_TOKEN
} from './mutations-type'

export default {
  getUserAction({commit}, {user}) {
    commit(SAVE_TOKEN, {token: user.token})
    delete user.token
    commit(SAVE_USER, {user})
  }
}