import SolutionService from '~/services/SolutionService'
import { firestore, storage } from '../plugins/firebase'

export const state = () => ({
  solutions: [],
  newSolution: {},
})

export const getters = {}

export const mutations = {
  SET_SOLUTIONS(state, solutions) {
    state.solutions = solutions
  },
  //   SET_NEW_SOLUTION(state, solution) {
  //     state.newSolution = { ...state.newSolution, ...solution }
  //   },
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
    console.log(solution)

    const postData = {
      title: solution.title,
      introduction: solution.introduction,
      categories: solution.categories,
      materials: solution.materials,
      tools: solution.tools,
    }
    let id
    let ext
    let blob
    let r

    firestore
      .collection('solutions')
      .add(postData)
      .then((data) => {
        id = data.id
        return id
      })
      .then(async (id) => {
        const filename = solution.image.name
        ext = filename.slice(filename.lastIndexOf('.'))
        r = await fetch(solution.image.blob)
        blob = await r.blob()
        return storage.ref(`solutions/${id}${ext}`).put(blob)
      })
      .then(() => {
        return storage.ref(`solutions/${id}${ext}`).getDownloadURL()
      })
      .then((url) => {
        return firestore.collection('solutions').doc(id).update({ imageUrl: url })
      })
      .then(async () => {
        // https://stackoverflow.com/questions/52873516/vue-js-returns-ob-observer-data-instead-of-my-array-of-objects
        let steps = JSON.parse(JSON.stringify(solution.steps))

        let actions = steps.map((step) => {
          return new Promise(async (resolve) => {
            let stepData = {
              'description': step.description,
            }
            if (step.stepImage.length) {
              const filename = step.stepImage[0].name
              ext = filename.slice(filename.lastIndexOf('.'))

              r = await fetch(step.stepImage[0].blob)
              blob = await r.blob()
              await storage.ref(`solutions/${id}_${filename}`).put(blob)
              let url = await storage.ref(`solutions/${id}_${filename}`).getDownloadURL()
              console.log(url)
              stepData['stepImage'] = url
            }
            resolve(stepData)
          })
        })
        Promise.all(actions).then((data) => {
          firestore.collection('solutions').doc(id).update({ steps: data })
        })
      })
      .catch((error) => {
        console.log(error)
      })
    // return SolutionService.createSolution(solution).catch((error) => console.error(error))
  },
  updateSolution(context, { solutionId, updatedSolution }) {
    return SolutionService.updateSolution(solutionId, updatedSolution).catch((error) => console.error(error))
  },
}
