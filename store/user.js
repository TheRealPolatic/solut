import UserService from '~/services/UserService'
import { auth } from '~/plugins/firebase'

export const state = () => ({
  user: {},
  users: [],
  authenticated: false,
})

export const getters = {
  getUserById: (state) => (id) => {
    return state.users.find((user) => user.id === id)
  },
  getUserTotalImpactById: (state, getters, rootState, rootGetters) => (id) => {
    return rootGetters['solution/getSolutionsByUserId'](id).reduce((total, solution) => {
      return total + rootGetters['solution/getSolutionTotalImpactById'](solution.id)
    }, 0)
  },
}

export const mutations = {
  SET_USER(state, user) {
    state.user = user
  },
  SET_USERS(state, users) {
    state.users = users
  },
  SET_AUTHENTICATED(state, status) {
    state.authenticated = status
  },
  RESET_STATE(state) {
    state.user = {}
    state.authenticated = false
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
  fetchUsers({ commit }) {
    return UserService.getUsers()
      .then((users) => {
        commit('SET_USERS', users)
      })
      .catch((error) => {
        console.error(error)
      })
  },
  signUpUser({ dispatch }, { email, password, username }) {
    return auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        dispatch('setUser', { userId: userCredential.user.uid, data: { username, bookmarks: [] } })
      })
      .catch((error) => {
        console.error(error)
      })
  },
  signInUser(context, { email, password }) {
    return auth.signInWithEmailAndPassword(email, password).catch((error) => {
      console.error(error)
    })
  },
  signOutUser({ commit }) {
    return auth
      .signOut()
      .then(() => {
        commit('RESET_STATE')
      })
      .catch((error) => {
        console.error(error)
      })
  },
  setUser(context, { userId, data }) {
    return UserService.setUser(userId, data).catch((error) => {
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
