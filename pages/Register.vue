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
  
              <file-upload
                ref="upload"
                v-model="user.profileImage"
                @input-filter="inputFilter"
                accept="image/*"
                :size="1024 * 1024"
                class="rounded-full bg-light-grey h-24 w-24"
              >
                 
              </file-upload>
            </div>


            <!-- <div>
               <div class="flex justify-center">
                <div class="w-24 h-24 relative">
                  <img :src="src" alt="Avatar" class="bg-light-grey w-full h-full object-cover object-center rounded-full" />
                  <file-upload
                    ref="upload"
                    v-model="user.profileImage"
                    v-if="user.profileImage.length == 0"
                    @input-filter="inputFilter"
                    accept="image/*"
                    :size="1024 * 1024"
                    class="rounded-full bg-light-grey h-24 w-24"
                  >
                    <div class=" bg-primary  absolute bottom-0 right-0 rounded-full border-2 border-white text-center">
                      <button type="button" class="flex justify-center h-7 w-7">
                        <i class="icon icon-upload text-white text-me pt-1"></i>
                      </button>
                    </div>
                  </file-upload>
                </div>
              </div>
            </div> -->

            <!-- <file-upload
              ref="upload"
              v-model="user.profileImage"
              @input-filter="inputFilter"
              accept="image/*"
              :size="500 * 500"
              class="rounded-full bg-light-grey h-16 w-16"
            >
              <div class="flex my-5 justify-center">
                <i class="icon icon-upload text-dark opacity-50 mr-4"></i>
              
              </div>
            </file-upload> -->

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
                  class="h-14 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-2xl placeholder-gray-400 focus:outline-none focus:ring-gray-400 focus:border-gray-400 sm:text-sm"
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
                  class="h-14 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-2xl placeholder-gray-400 focus:outline-none focus:ring-gray-400 focus:border-gray-400 sm:text-sm"
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
                  class="h-14 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-2xl placeholder-gray-400 focus:outline-none focus:ring-gray-400 focus:border-gray-400"
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
                  ><a href="#" class="text-gray-500">Already have an account? <u>Login</u></a></NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { auth } from '~/plugins/firebase.js'

export default {
  layout: 'nonavbar',
  data() {
    return {
      showPassword: false,
      user: {
        uid: '',
        username: '',
        email: '',
        profileImage: '',
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

            .then(() => {
              this.user.uid = res.user.uid
              console.log('submitting user...')
              this.$store.dispatch('user/createUser', { id: this.user.uid }).then(() => {
                const newUserInfo = {}
                newUserInfo.username = this.user.username
                newUserInfo.email = this.user.email
                newUserInfo.profileImage = this.user.profileImage
                const updateInfo = { userId: this.user.uid, data: newUserInfo }
                this.$store.dispatch('user/updateUser', updateInfo)
                this.$router.push('/timeline')
              })
            })

          // console.log(res.user.uid)
        })
        .catch((err) => {
          this.error = err.message
        })
      firebase

        .then(async (id) => {
          const filename = this.solution.image.name
          ext = filename.slice(filename.lastIndexOf('.'))
          r = await fetch(this.solution.image.blob)
          blob = await r.blob()
          return storage.ref(`solutions/${id}${ext}`).put(blob)
        })
        .then(() => {
          return storage.ref(`solutions/${id}${ext}`).getDownloadURL()
        })
        .then((url) => {
          return firestore.collection('solutions').doc(id).update({ coverImage: url })
        })
    },
  },
}
</script>

<style  scoped>
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
</style>
