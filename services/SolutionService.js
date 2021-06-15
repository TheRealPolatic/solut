import { firestore } from '../plugins/firebase'

export default {
  getSolutions() {
    return firestore
      .collection('solutions')
      .get()
      .then((querySnapshot) => {
        return querySnapshot.docs.map((doc) => {
          return { ...{ id: doc.id }, ...doc.data() }
        })
      })
      .catch((error) => {
        console.error(error)
      })
  },
  getSolution(solutionId) {
    return firestore
      .collection('solutions')
      .doc(solutionId)
      .get()
      .then((doc) => {
        if (doc.exists) {
          return { ...{ id: doc.id }, ...doc.data() }
        } else {
          throw new Error('Solution not found.')
        }
      })
      .catch((error) => {
        console.error(error)
      })
  },
  createSolution(solution) {
    return firestore.collection('solutions').add(solution)
  },
  updateSolution(solutionId, data) {
    return firestore.collection('solution').doc(solutionId).update(data)
  },
}
