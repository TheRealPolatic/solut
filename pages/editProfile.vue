<template>
  <div class="m-6">
    <!-- Top bar -->
    <div class="flex justify-between">
      <NuxtLink to="/profile"><ButtonBackButton class="w-1/6" :icon="'icon-chevron-left'"></ButtonBackButton></NuxtLink>
      <h1 class="text-center text-xl font-bold mt-2">Change profile</h1>
      <div class="w-1/6"></div>
    </div>

    <!-- Change user info -->
    <form id="profile-form" @submit.prevent="updateProfileInfo(userinfo.id, fieldValueUser, fieldValueEmail)">
      <!-- Image component -->
      <UserProfileAvatarInput v-model="form.avatar" :default-src="userinfo.profileImage"></UserProfileAvatarInput>

      <!-- Username -->
      <div class="mt-8">
        <label class="text-dark font-semibold">Username</label><br />
        <input type="text" :placeholder="userinfo.username" v-model="fieldValueUser" class="border border-dark-grey rounded-xl h-12 w-full mt-2 pl-4 pr-4" />
      </div>
      <!-- Email -->
      <div class="mt-8">
        <label class="text-dark font-semibold">Email</label><br />
        <input type="text" :placeholder="userinfo.email" v-model="fieldValueEmail" class="border border-dark-grey rounded-xl h-12 w-full mt-2 pl-4 pr-4" />
      </div>

      <Button :label="'Update profile'" class="mt-8"></Button>

      <p id="error" class="error text-red-500 text-center text-sm py-2 px-4 border border-red-500 rounded-xl mt-6 hidden"></p>
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
        username: fieldValueUser,
        email: fieldValueEmail,
      },
      userinfo: {},
      fieldValueUser: this.form.username,
      fieldValueEmail: this.form.email,
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
              document.querySelector('.error').innerHTML = error.message
              document.getElementById('error').style.display = 'block'
              console.log(error.message)
            })
        })
        .catch((error) => {
          // An error occurred
          // ...
          document.querySelector('.error').innerHTML = error.message
          console.log(error.message)
        })
    },
  },
}
</script>

<style></style>
