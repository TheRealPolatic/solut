import SolutionService from '~/services/SolutionService'

export const state = () => ({
  solutions: [],
})

export const getters = {}

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
      .then((pill) => {
        return pill
      })
      .catch((error) => {
        console.error(error)
      })
  },
}
