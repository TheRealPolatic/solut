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
  getUsers() {
    return firestore
      .collection('users')
      .get()
      .then((querySnapshot) => {
        return querySnapshot.docs.map((doc) => {
          return { ...{ id: doc.id }, ...doc.data() }
        })
      })
  },
  createUser(user) {
    // return firestore.collection('users').add(user)
    return firestore.collection('users').doc(user.id).set({ bookmarks: [] })
  },
  setUser(userId, data) {
    return firestore.collection('users').doc(userId).set(data)
  },
  updateUser(userId, data) {
    return firestore.collection('users').doc(userId).update(data)
  },
}
