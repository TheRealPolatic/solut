<template>
  <div class="m-6">
    <UserProfile></UserProfile>
    <Statistics class="mt-8"></Statistics>
    <p class="text-sm mt-8">Log out</p>

    <!-- <Modal
      :title="'Account updated'"
      :subtext="'The changes on your account are saved.'"
    ></Modal> -->
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  async asyncData({ params, store }) {
    // Set current user
    await store.dispatch('user/fetchCurrentUser', '4bH51OK8TUwxFtaQOXhN')
  },
  data() {
    return {
      solutions: [],
      currentUser: {},
    }
  },
  computed: {
    ...mapState('user', ['user']),
  },
  created() {
    // this.$store.dispatch('solution/fetchSolution', 'yyFqSXc9cIn0l3VE6IgP').then((result) => {
    //   this.solutions = result
    // })
    // this.$store.dispatch('user/fetch')

    this.currentUser = this.user
  },

  methods: {},
}
</script>

<style></style>
