<template>
  <div>
    <div class="px-6 header flex justify-between items-center">
       <NuxtLink to="/login">
          <div class="back w-10 h-10 border border-gray-200 rounded-xl flex items-center justify-center">
          <img src="@/assets/icons/chevron-left.svg" />
        </div>
      </NuxtLink>
      <h1 class="my-6 text-dark text-center font-bold text-xl">Register</h1>
      <div class="w-10 h-10"></div>
    </div>
      <div class="mt-4 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="py-8 px-6 sm:rounded-lg sm:px-10">
          <form class="space-y-6">
            <div>
              <label for="email" class="block font-semibold text-dark">Username</label>
              <div class="mt-1">
                <input
                v-model="user.username"
                  id="username"
                  name="username"
                  type="username"
                  autocomplete="email"
                  placeholder="john.doe"
                  required
                  class="h-14 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-2xl placeholder-gray-400 focus:outline-none focus:ring-gray-400 focus:border-gray-400 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label for="email" class="block font-semibold text-dark">Email</label>
              <div class="mt-1">
                <input
                  v-model="user.email"
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  placeholder="johndoe@gmail.com"
                  required
                  class="h-14 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-2xl placeholder-gray-400 focus:outline-none focus:ring-gray-400 focus:border-gray-400 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label for="password" class="mb-0 block font-semibold text-dark">Password</label>
              <div class="relative mt-1">
                <input
                  v-model="user.password"
                  id="password"
                  name="password"
                  v-bind:type="[showPassword ? 'text' : 'password']"
                  autocomplete="current-password"
                  placeholder=""
                  required
                  class="h-14 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-2xl placeholder-gray-400 focus:outline-none focus:ring-gray-400 focus:border-gray-400"
                />
                <button @click="showPassword = !showPassword" class="absolute inset-y-0 right-0 flex items-center px-4 border-l">
                  <img v-if="showPassword" src="@/assets/icons/eye.svg" /> <img v-else src="@/assets/icons/eye-off.svg" />
                </button>
              </div>
            </div>
            <div>
              <button @click="submit" class="py-3 w-full flex justify-center rounded-2xl text-white bg-primary">Register</button>
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
  data() {
    return {
      showPassword: false,
      user: {
        username: '',
        email: '',
        profileImage: '',
        password: '',
      },
    }
  },
  methods: {
    submit() {
      auth.createUserWithEmailAndPassword(this.user.email, this.user.password).catch((err) => {
        this.error = err.message
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
