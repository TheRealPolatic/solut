import UserService from '~/services/UserService'

export const state = () => ({
  user: {},
  authenticated: false,
})

export const getters = {}

export const mutations = {
  SET_USER(state, user) {
    state.user = user
  },
  SET_AUTHENTICATED(state, status) {
    state.authenticated = status
  },
}

export const actions = {
  fetchCurrentUser({ commit }, userId) {
    return UserService.getUser(userId)
      .then((user) => {
        commit('SET_USER', user)
      })
      .catch((error) => {
        console.error(error)
      })
  },
  fetchUser(context, userId) {
    return UserService.getUser(userId)
      .then((user) => {
        return user
      })
      .catch((error) => {
        console.error(error)
      })
  },
  createUser(context, user) {
    return UserService.createUser(user).catch((error) => console.error(error))
  },
  updateUser(context, { userId, data }) {
    return UserService.updateUser(userId, data).catch((error) => console.error(error))
  },
}
