<template>
  <div class="m-6">
    <!-- Top bar -->
    <div class="flex justify-between">
      <NuxtLink to="/profile"><ButtonBackButton class="w-1/6" :icon="'icon-chevron-left'"></ButtonBackButton></NuxtLink>
      <h1 class="text-center text-xl font-bold mt-2">Change profile</h1>
      <div class="w-1/6"></div>
    </div>

    <!-- Change user info -->
    <form id="profile-form" @submit.prevent="updateProfileInfo(userinfo.id, 'piet', 'henk@gmail.com')">
      <!-- Image component -->
      <UserProfileAvatarInput v-model="form.avatar" :default-src="userinfo.profileImage"></UserProfileAvatarInput>

      <!-- Username -->
      <FormField :label="'Username'" :type="'text'" :value="userinfo.username" class="mt-8"></FormField>
      <!-- Email -->
      <FormField :label="'Email'" :type="'text'" :value="userinfo.email" class="mt-8"></FormField>

      <p class="mt-8" @click="changePassword()">Change password</p>

      <Button :label="'Update profile'" class="mt-8"></Button>
    </form>
  </div>
</template>

<script>
import { auth } from '~/plugins/firebase.js'

export default {
  middleware: 'private',
  async asyncData({ params, store }) {
    const userinfo = store.state.user.user

    return { userinfo }
  },
  data() {
    return {
      form: {
        avatar: null,
        username: 'test',
        email: '',
      },
      userinfo: {},
    }
  },

  methods: {
    updateProfileInfo(id, x, y) {
      const user = auth.currentUser

      user
        .updateProfile({
          displayName: x,
        })
        .then(() => {
          // Update successful
          // ...

          user
            .updateEmail(y)
            .then(() => {
              // Update successful
              // ...
              const newUserInfo = {}
              newUserInfo.username = x
              newUserInfo.email = y
              const updateInfo = { userId: id, data: newUserInfo }
              this.$store.dispatch('user/updateUser', updateInfo)
              this.$router.push('/profile')
            })
            .catch((error) => {
              // An error occurred
              // ...
            })
        })
        .catch((error) => {
          // An error occurred
          // ...
        })
    },
    changePassword() {
      auth
        .sendPasswordResetEmail(this.userinfo.email)
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
