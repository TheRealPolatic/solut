<template>
  <div>
    <div class="px-6 header flex justify-between items-center">
      <NuxtLink to="/login">
        <div class="back w-10 h-10 border border-gray-200 rounded-xl flex items-center justify-center">
          <i class="icon icon-chevron-left"></i>
        </div>
      </NuxtLink>
      <h1 class="my-6 text-dark text-center font-bold text-xl">Register</h1>
      <div class="w-10 h-10"></div>
    </div>
    <div class="mt-4 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="py-8 px-6 sm:rounded-lg sm:px-10">
        <form class="space-y-6">
          <!-- Profile Image -->

          <div class="flex justify-center">
            <div class="flex justify-center items-center relative mt-2">
              <div class="relative" v-if="!user.profileImage.length">
                <file-upload
                  ref="upload"
                  v-model="user.profileImage"
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
                  v-model="user.profileImage"
                  @input-filter="inputFilter"
                  accept="image/*"
                  :size="1024 * 1024"
                  class="preview rounded-full h-24 w-24"
                  :style="{ 'background-image': `url(${user.profileImage[0].blob})` }"
                >
                </file-upload>
                <div class="h-8 w-8 absolute bottom-0 right-0 bg-primary rounded-full flex justify-center items-center border-2 border-white">
                  <i class="flex text-xs icon icon-edit text-white"></i>
                </div>
              </div>
            </div>
          </div>

          <!-- Username -->
          <div>
            <label for="username" class="block font-semibold text-dark">Username</label>
            <div class="mt-1">
              <input
                v-model="user.username"
                id="username"
                name="username"
                type="username"
                placeholder="john.doe"
                required
                class="
                  h-14
                  appearance-none
                  block
                  w-full
                  px-3
                  py-2
                  border border-gray-300
                  rounded-2xl
                  placeholder-gray-400
                  focus:outline-none
                  focus:ring-gray-400
                  focus:border-gray-400
                  sm:text-sm
                "
              />
            </div>
          </div>

          <!-- email -->
          <div>
            <label for="email" class="block font-semibold text-dark">Email</label>
            <div class="mt-1">
              <input
                v-model="user.email"
                id="email"
                name="email"
                type="email"
                placeholder="johndoe@gmail.com"
                required
                class="
                  h-14
                  appearance-none
                  block
                  w-full
                  px-3
                  py-2
                  border border-gray-300
                  rounded-2xl
                  placeholder-gray-400
                  focus:outline-none
                  focus:ring-gray-400
                  focus:border-gray-400
                  sm:text-sm
                "
              />
            </div>
          </div>

          <!-- password -->
          <div>
            <label for="password" class="mb-0 block font-semibold text-dark">Password</label>
            <div class="relative mt-1">
              <input
                v-model="user.password"
                id="password"
                name="password"
                v-bind:type="[showPassword ? 'text' : 'password']"
                placeholder=""
                required
                class="
                  h-14
                  appearance-none
                  block
                  w-full
                  px-3
                  py-2
                  border border-gray-300
                  rounded-2xl
                  placeholder-gray-400
                  focus:outline-none
                  focus:ring-gray-400
                  focus:border-gray-400
                "
              />
              <div @click="showPassword = !showPassword" class="absolute inset-y-0 right-0 flex items-center px-4 border-l text-xl">
                <i class="icon icon-eye" v-if="showPassword"></i>
                <i v-else class="icon icon-eye-off"></i>
              </div>
            </div>
          </div>
          <div>
            <div @click="submit" class="py-3 w-full flex justify-center rounded-2xl text-white bg-primary">Register</div>
          </div>
        </form>

        <div class="mt-6">
          <div class="relative">
            <div class="relative flex justify-center">
              <NuxtLink to="/login"
                ><a href="#" class="text-gray-500">Already have an account? <u>Login</u></a></NuxtLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { storage, auth } from '~/plugins/firebase.js'

export default {
  layout: 'nonavbar',
  data() {
    return {
      showPassword: false,
      user: {
        uid: '',
        username: '',
        email: '',
        profileImage: [],
        password: '',
      },
    }
  },
  methods: {
    submit() {
      auth
        .createUserWithEmailAndPassword(this.user.email, this.user.password)
        .then((res) => {
          res.user
            .updateProfile({
              displayName: this.user.username,

              // todo profile image toevoegen
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
            .then((url) => {
              console.log(url)

              console.log('submitting user...')
              this.$store.dispatch('user/createUser', { id: this.user.uid }).then(() => {
                const newUserInfo = {}
                newUserInfo.username = this.user.username
                newUserInfo.email = this.user.email
                newUserInfo.profileImage = url
                const updateInfo = { userId: this.user.uid, data: newUserInfo }
                this.$store.dispatch('user/updateUser', updateInfo)
                this.$router.push('/timeline')
              })
            })
        })
        .catch((err) => {
          this.error = err.message
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

<style scoped>
.vue-avatar-cropper-demo {
  max-width: 18em;
  margin: 0 auto;
}
.avatar {
  width: 160px;
  border-radius: 6px;
  display: block;
  margin: 20px auto;
}
.card-img-overlay {
  display: none;
  transition: all 0.5s;
}
.card-img-overlay button {
  margin-top: 20vh;
}
.preview {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
