import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyB1Jb16EPfOSwI6txAr0bnC6OP4xjqMZC0',
  authDomain: 'solut-3961b.firebaseapp.com',
  projectId: 'solut-3961b',
  storageBucket: 'solut-3961b.appspot.com',
  messagingSenderId: '1023760805376',
  appId: '1:1023760805376:web:8bac431fb45dfc7a6c32e5',
  measurementId: 'G-0RTQKB8693',
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore()
export const auth = firebase.auth()
export const storage = firebase.storage()

// Export types that exists in Firestore
export const { Timestamp } = firebase.firestore

// Use emulator suite in local environment
if (location.hostname === 'localhost') {
  firestore.useEmulator('localhost', 8080)
  storage.useEmulator('localhost', 9199)
  auth.useEmulator('http://localhost:9099/', { disableWarnings: true })
}
