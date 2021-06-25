<template>
  <div class="m-6">
    <h1 class="text-dark font-bold text-2xl my">Profile</h1>

    <!-- Profile Image -->
    <div class="flex items-center text-sm mt-8">
      <div class="w-24 h-24 bg-black overflow-hidden rounded-full relative">
        <img :src="user.profileImage" alt="profileImage" class="absolute w-full h-full top-0 left-0 object-cover object-center" />
      </div>
    </div>

    <!-- Name & Change profile -->
    <div class="flex justify-between mt-8">
      <div class="text-xl font-bold">{{ user.username }}</div>
      <NuxtLink to="/editProfile">
        <div class="text-sm pt-1">Change profile</div>
      </NuxtLink>
    </div>

    <!-- Info list -->
    <ul class="list-reset text-black text-sm pt-4">
      <ListItem :content="user.email" :icon="'icon-envelope'"></ListItem>
    </ul>

    <Statistics class="mt-8" :user-total-impact="userTotalImpact"></Statistics>
    <button class="text-sm mt-8" @click="signOut()">Log out</button> <br />
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
// import { auth } from '~/plugins/firebase.js'

export default {
  middleware: 'private',
  // async asyncData({ params, store }) {
  //   const userinfo = store.state.user.user

  //   return { userinfo }
  // },

  // data() {
  //   return {
  //     userinfo: {},
  //   }
  // },
  computed: {
    userTotalImpact() {
      return this.getUserTotalImpactById(this.user.id)
    },
    ...mapState('user', ['user']),
    ...mapGetters('solution', ['getUserTotalImpactById']),
  },
  created() {
    this.$store.dispatch('solution/fetchSolutions')
  },
  methods: {
    // getUserId() {
    //   auth.onAuthStateChanged((user) => {
    //     if (user) {
    //       // User is signed in
    //       const currentUid = user.uid
    //       console.log(currentUid)
    //       // ...
    //     } else {
    //       // User is signed out
    //       // ...
    //       console.log('niet ingelogd')
    //     }
    //   })
    // },
    async signOut() {
      await this.$store.dispatch('user/signOutUser')
      await this.$router.push('/login')
    },
  },
}
</script>

<style></style>
