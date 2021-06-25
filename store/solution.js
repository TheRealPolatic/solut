import SolutionService from '~/services/SolutionService'

export const state = () => ({
  solutions: [],
})

export const getters = {
  getSolutionById: (state) => (id) => {
    return state.solutions.find((solution) => solution.id === id)
  },
  getSolutionTotalImpactById: (state, getters) => (id) => {
    return getters.getSolutionById(id).impactUsers.reduce((total, user) => {
      return total + user.impacted
    }, 0)
  },
  getImpactedUsersBySolutionId: (state, getters, rootState, rootGetters) => (id) => {
    const solution = getters.getSolutionById(id)
    const users = solution.impactUsers.map((user) => rootGetters['user/getUserById'](user.id))

    return users
  },
  getSolutionsTotalImpact: (state, getters) => {
    return state.solutions.reduce((total, solution) => {
      return total + getters.getSolutionTotalImpactById(solution.id)
    }, 0)
  },
}

export const mutations = {
  SET_SOLUTIONS(state, solutions) {
    state.solutions = solutions
  },
}

export const actions = {
  fetchSolutions({ commit }) {
    return SolutionService.getSolutions()
      .then((solutions) => {
        commit('SET_SOLUTIONS', solutions)
      })
      .catch((error) => {
        console.error(error)
      })
  },
  fetchSolution(context, solutionId) {
    return SolutionService.getSolution(solutionId)
      .then((solution) => {
        return solution
      })
      .catch((error) => {
        console.error(error)
      })
  },
  createSolution(context, solution) {
    return SolutionService.createSolution(solution).catch((error) => console.error(error))
  },
  updateSolution(context, { solutionId, data }) {
    return SolutionService.updateSolution(solutionId, data).catch((error) => console.error(error))
  },
}
