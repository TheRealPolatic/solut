<template>
  <div class="m-6">
    <h1 class="text-dark font-bold text-2xl my">Profile</h1>
    <UserProfile :userinfo="currentUser"></UserProfile>
    <Statistics class="mt-8"></Statistics>
    <button class="text-sm mt-8" @click="signOut()">Log out</button> <br />
    <button @click="getUserId()">current user log</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { auth } from '~/plugins/firebase.js'

export default {
  async asyncData({ params, store }) {
    // Get Uid of current user
    const currentUid = 'Zmkw90GkkEEGirej05LGqyG5dnJi'
    // this.getUserId()

    // Set current user
    await store.dispatch('user/fetchCurrentUser', currentUid)
  },

  data() {
    return {
      currentUser: {},
    }
  },
  computed: {
    ...mapState('user', ['user']),
  },
  created() {
    this.currentUser = this.user
  },

  methods: {
    getUserId() {
      auth.onAuthStateChanged((user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          var currentUid = user.uid
          console.log(currentUid)
          // ...
        } else {
          // User is signed out
          // ...
          console.log('niet ingelogd')
        }
      })
    },
    signOut() {
      //   auth
      //     .signOut()
      //     .then(() => {
      //       // Sign-out successful.
      //       console.log('succesvol uitgelogd')
      //       this.$router.push('/login')
      //     })
      //     .catch((error) => {
      //       // An error happened.
      //     })
      // },
      this.$store.dispatch('user/signOutUser').then(() => {
        this.$router.push('/login')
      })
    },
  },
}
</script>

<style></style>
