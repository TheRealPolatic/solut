<template>
  <div class="m-6">
    <!-- Top bar -->
    <div class="flex justify-between">
      <NuxtLink to="/profile"><ButtonBackButton class="w-1/6" :icon="'icon-chevron-left'"></ButtonBackButton></NuxtLink>
      <h1 class="text-center text-xl font-bold mt-2">Change profile</h1>
      <div class="w-1/6"></div>
    </div>

    <!-- Change user info -->
    <form id="profile-form" @submit.prevent="updateProfileInfo(userinfo.id, 'fieldValueUser', 'fieldValueEmail')">
      <!-- Image component -->
      <!-- <UserProfileAvatarInput :default-src="userinfo.profileImage" :userinfo="userinfo"></UserProfileAvatarInput> -->
      <!-- Profile Image -->

      <div class="flex justify-center">
        <div class="flex justify-center items-center relative mt-2">
          <div class="relative" v-if="!userinfo.profileImage.length">
            <file-upload
              ref="upload"
              v-model="userinfo.profileImage"
              @input-filter="inputFilter"
              accept="image/*"
              :size="1024 * 1024"
              class="preview rounded-full h-24 w-24 bg-light-grey"
            >
            </file-upload>
            <div class="h-8 w-8 absolute bottom-0 right-0 bg-primary rounded-full flex justify-center items-center border-2 border-white">
              <i class="flex text-xs icon icon-plus text-white"></i>
            </div>
          </div>

          <div class="relative" v-else>
            <file-upload
              ref="upload"
              v-model="userinfo.profileImage"
              @input-filter="inputFilter"
              accept="image/*"
              :size="1024 * 1024"
              class="preview rounded-full h-24 w-24"
              :style="{ 'background-image': `url(${userinfo.profileImage[0].blob})` }"
            >
            </file-upload>
            <div class="h-8 w-8 absolute bottom-0 right-0 bg-primary rounded-full flex justify-center items-center border-2 border-white">
              <i class="flex text-xs icon icon-edit text-white"></i>
            </div>
          </div>
        </div>
      </div>

      <!-- v-model="form.avatar" -->

      <!-- Username -->
      <div class="mt-8">
        <label class="text-dark font-semibold">Username</label><br />
        <input type="text" :placeholder="userinfo.username" class="border border-dark-grey rounded-xl h-12 w-full mt-2 pl-4 pr-4" />
      </div>
      <!-- Email -->
      <div class="mt-8">
        <label class="text-dark font-semibold">Email</label><br />
        <input type="text" :placeholder="userinfo.email" class="border border-dark-grey rounded-xl h-12 w-full mt-2 pl-4 pr-4" />
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

    console.log(userinfo)

    return { userinfo }
  },
  data() {
    return {
      // form: {
      //   avatar: null,
      //   // username: fieldValueUser,
      //   // email: fieldValueEmail,
      // },
      userinfo: {},
      // fieldValueUser: this.form.username,
      // fieldValueEmail: this.form.email,
    }
  },

  methods: {
    updateProfileInfo(id, x, y) {
      const user = auth.currentUser

      user
        .updateProfile({
          displayName: x,
        })
        .then(async () => {
          let id
          let ext
          let blob
          let r
          this.user.uid = res.user.uid
          const filename = this.user.profileImage[0].name
          ext = filename.slice(filename.lastIndexOf('.'))
          r = await fetch(this.user.profileImage[0].blob)
          blob = await r.blob()
          await storage.ref(`users/${this.user.uid}${ext}`).put(blob)

          return await storage.ref(`users/${this.user.uid}${ext}`).getDownloadURL()
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
    inputFilter(newFile, oldFile, prevent) {
      if (newFile && !oldFile) {
        // Filter non-image file
        if (!/\.(jpeg|jpe|jpg|gif|png|webp)$/i.test(newFile.name)) {
          return prevent()
        }
      }

      // Create a blob field
      newFile.blob = ''
      let URL = window.URL || window.webkitURL
      if (URL && URL.createObjectURL) {
        newFile.blob = URL.createObjectURL(newFile.file)
      }
    },
  },
}
</script>

<style></style>
