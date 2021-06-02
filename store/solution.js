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
    return this.$fire.firestore
      .collection('solutions')
      .get()
      .then((querySnapshot) => {
        const solutions = querySnapshot.docs.map((doc) => {
          return { ...{ id: doc.id }, ...doc.data() }
        })
        commit('SET_SOLUTIONS', solutions)
      })
      .catch((error) => {
        console.error(error)
      })
  },
  fetchSolution(context, solutionId) {
    return this.$fire.firestore
      .collection('solutions')
      .doc(solutionId)
      .get()
      .then((doc) => {
        if (doc.exists) {
          return { ...{ id: doc.id }, ...doc.data() }
        } else {
          console.error('Requested solution does not exist.')
        }
      })
  },
}
