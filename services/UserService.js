import { firestore } from '~/plugins/firebase'

export default {
  getUser(userId) {
    return firestore
      .collection('users')
      .doc(userId)
      .get()
      .then((doc) => {
        if (doc.exists) {
          return { ...{ id: doc.id }, ...doc.data() }
        } else {
          throw new Error('User not found.')
        }
      })
      .catch((error) => {
        console.error(error)
      })
  },
  createUser(user) {
    return firestore.collection('users').add(user)
  },
  setUser(userId, user) {
    return firestore.collection('users').doc(userId).set(user)
  },
  updateUser(userId, data) {
    return firestore.collection('users').doc(userId).update(data)
  },
}
