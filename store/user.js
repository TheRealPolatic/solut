import UserService from '~/services/UserService'

export const state = () => ({
  user: {},
})

export const getters = {}

export const mutations = {
  SET_USER(state, user) {
    state.user = user
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
  fetchUser({ commit }, userId) {
    return UserService.getUser(userId)
      .then((user) => {
        return user
      })
      .catch((error) => {
        console.error(error)
      })
  },
}
