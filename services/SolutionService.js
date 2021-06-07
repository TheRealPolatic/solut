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
          console.error('Requested solution does not exist.')
        }
      })
  },
}
