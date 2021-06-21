<template>
  <div class="m-6">
    <UserProfile :userinfo="currentUser"></UserProfile>
    <Statistics class="mt-8"></Statistics>
    <p class="text-sm mt-8">Log out</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  async asyncData({ params, store }) {
    // Get Uid of current user
    const currentUid = 'qMREhAdf9KtxREa7aQAg'
    //this.getUserId()

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
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          var currentUid = user.uid
          // ...
        } else {
          // User is signed out
          // ...
        }
      })
    },
  },
}
</script>

<style></style>
