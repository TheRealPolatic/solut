<template>
  <div class="m-6">
    <!-- Top bar -->
    <div class="flex justify-between">
      <NuxtLink to="/profile"><ButtonBackButton class="w-1/6" :icon="'icon-chevron-left'"></ButtonBackButton></NuxtLink>
      <h1 class="text-center text-xl font-bold mt-2">Edit account</h1>
      <div class="w-1/6"></div>
    </div>

    <!-- Change user info -->
    <form id="profile-form" @submit.prevent="submit">
      <!-- Image component -->
      <UserProfileAvatarInput v-model="form.avatar" :default-src="currentUser.profileImage"></UserProfileAvatarInput>

      <!-- Username -->
      <FormField :label="'Username'" :type="'text'" :value="currentUser.username" class="mt-8"></FormField>
      <!-- Email -->
      <FormField :label="'Email'" :type="'text'" :value="currentUser.email" class="mt-8"></FormField>
      <!-- Location -->
      <!-- <FormField :label="'Location'" :type="'text'" :value="'Henk'" class="mt-8"></FormField> -->

      <p class="mt-8">Change password</p>

      <NuxtLink to="/profile">
        <Button @click="submit" :label="'Update Account'" class="mt-8"></Button>
      </NuxtLink>
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  async asyncData({ params, store }) {
    // Set current user
    await store.dispatch('user/fetchCurrentUser', 'zs2CBMbd85TPwMjz4A7R0nD1XJrR')
  },
  data() {
    return {
      form: {
        avatar: null,
      },

      currentUser: {},
    }
  },
  computed: {
    ...mapState('user', ['user']),
  },
  created() {
    this.currentUser = this.user
  },
}
</script>

<style></style>
