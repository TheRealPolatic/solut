import { firestore } from '../plugins/firebase'

export default {
  getCategories() {
    return firestore
      .collection('categories')
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
}
