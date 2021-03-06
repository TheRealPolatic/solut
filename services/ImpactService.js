import { firestore } from '../plugins/firebase'

export default {
  getTotalImpact() {
    return firestore
      .collection('totalimpact')
      .doc('1')
      .get()
      .then((doc) => {
        if (doc.exists) {
          return { ...{ id: doc.id }, ...doc.data() }
        } else {
          throw new Error('Impact not found.')
        }
      })
      .catch((error) => {
        console.error(error)
      })
  },
}
