<template>
  <div class="m-6">
    <!-- Top bar -->
    <div class="flex justify-between">
      <NuxtLink to="/profile"><ButtonBackButton class="w-1/6" :icon="'icon-chevron-left'"></ButtonBackButton></NuxtLink>
      <h1 class="text-center text-xl font-bold mt-2">Edit profile</h1>
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

      <p class="mt-8" @click="changePassword()">Change password</p>

      <NuxtLink to="/profile">
        <Button @click="updateProfile()" :label="'Update profile'" class="mt-8"></Button>
      </NuxtLink>
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { auth } from '~/plugins/firebase.js'

export default {
  async asyncData({ params, store }) {
    const currentUid = 'Zmkw90GkkEEGirej05LGqyG5dnJi'
    // Set current user
    await store.dispatch('user/fetchCurrentUser', currentUid)
  },
  data() {
    return {
      form: {
        avatar: null,
      },

      newData: {
        username: 'Jan',
        email: 'jan@gmail.com',
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

  methods: {
    updateProfile() {
      const newUserInfo = {}
      newUserInfo.username = 'Pietje'
      newUserInfo.email = 'pietje@gmail.com'
      const updateInfo = { userId: 'Zmkw90GkkEEGirej05LGqyG5dnJi', data: newUserInfo }
      this.$store.dispatch('user/updateUser', updateInfo)
    },
    changePassword() {
      auth
        .sendPasswordResetEmail(this.currentUser.email)
        .then(() => {
          // Password reset email sent!
          // ..
          console.log('Email verstuurd')
        })
        .catch((error) => {
          var errorCode = error.code
          var errorMessage = error.message
          // ..
        })
    },
  },
}
</script>

<style></style>
