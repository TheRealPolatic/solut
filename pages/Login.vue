<template>
  <div>
    <div class="max-h-screen flex flex-col justify-center py-12">
      <div class="sm:mx-auto sm:w-full sm:max-w-md">
        <img class="mx-auto h-48 w-auto" src="@/assets/illustrations/logo.svg" />
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to Solut</h2>
        <p class="mt-2 text-center text-gray-600">Creating a resilient world.</p>
      </div>

      <div class="mt-4 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="py-8 px-6 sm:rounded-lg sm:px-10">
          <form class="space-y-6" @submit.prevent="signIn">
            <div>
              <label for="email" class="block font-semibold text-dark">Email</label>
              <div class="mt-1">
                <input
                  id="email"
                  v-model="user.email"
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

            <div>
              <label for="password" class="mb-0 block font-semibold text-dark">Password</label>
              <div class="relative mt-1">
                <input
                  id="password"
                  v-model="user.password"
                  name="password"
                  :type="[showPassword ? 'text' : 'password']"
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
                <div class="absolute inset-y-0 right-0 flex items-center px-4 border-l text-xl" @click="showPassword = !showPassword">
                  <i v-if="showPassword" class="icon icon-eye"></i>
                  <i v-else class="icon icon-eye-off"></i>
                </div>
              </div>
            </div>

            <div class="flex justify-end">
              <a href="#" class="text-gray-500">Forgot your password?</a>
            </div>

            <div>
              <button type="submit" class="py-3 w-full flex justify-center rounded-2xl text-white bg-primary active:bg-green-400">Sign in</button>
            </div>
          </form>

          <div class="mt-6">
            <div class="relative">
              <div class="relative flex justify-center">
                <NuxtLink to="/register"
                  ><a href="#" class="text-gray-500">Don't have an account yet? <u>Register</u></a></NuxtLink
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'nonavbar',
  middleware: 'public',
  data() {
    return {
      showPassword: false,
      user: {
        email: '',
        password: '',
      },
    }
  },
  methods: {
    async signIn() {
      await this.$store.dispatch('user/signInUser', this.user)
      await this.$router.push('/timeline')
    },
  },
}
</script>
