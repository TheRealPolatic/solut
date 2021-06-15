import { auth } from '~/plugins/firebase'

export default ({ store }) => {
  return new Promise((resolve, reject) => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        return resolve(store.commit('user/SET_AUTHENTICATED', true))
      }
      return resolve()
    })
  })
}
