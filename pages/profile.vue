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
    // Set current user
    await store.dispatch('user/fetchUser', '8OBwgBe3GeS9BeOfOFjt')
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
