<template>
  <div class="m-6">
    <UserProfile :userinfo="currentUser"></UserProfile>
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
    await store.dispatch('user/fetchCurrentUser', '7McMEAdNgFDC3KP36MSc')
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

  methods: {},
}
</script>

<style></style>
