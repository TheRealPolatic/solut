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
  getCategory(categoryId) {
    return firestore
      .collection('categories')
      .doc(categoryId)
      .get()
      .then((doc) => {
        if (doc.exists) {
          return { ...{ id: doc.id }, ...doc.data() }
        } else {
          throw new Error('Category not found.')
        }
      })
      .catch((error) => {
        console.error(error)
      })
  },
}
