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

    <Statistics class="mt-8" :user-total-use="userTotalUse" :user-total-impact="userTotalImpact"></Statistics>
    <button class="text-sm mt-8" @click="signOut()">Log out</button> <br />
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  middleware: 'private',
  computed: {
    userTotalUse() {
      return this.getUserSolutionsTotalUseById(this.user.id)
    },
    userTotalImpact() {
      return this.getUserSolutionsTotalImpactById(this.user.id)
    },
    ...mapState('user', ['user']),
    ...mapGetters('user', ['getUserSolutionsTotalUseById', 'getUserSolutionsTotalImpactById']),
  },
  created() {
    this.$store.dispatch('solution/fetchSolutions')
  },
  methods: {
    async signOut() {
      await this.$store.dispatch('user/signOutUser')
      await this.$router.push('/login')
    },
  },
}
</script>
