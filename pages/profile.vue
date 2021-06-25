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

    <Statistics class="mt-8" v-on:click.native="openInfo" :user-total-use="userTotalUse" :user-total-impact="userTotalImpact"></Statistics>
    <p class="text-sm mt-8" @click="changePassword()">Change password</p>
    <button class="text-sm mt-8" @click="signOut()">Log out</button> <br />

    <!-- Impact modal -->
    <vue-bottom-sheet ref="impactgoal" max-height="100%">
      <div class="sheet-wrapper mx-4">
        <div class="flex flex-col">
          <div class="font-bold text-lg text-center relative overflow-visible pt-2 pb-2">
            Making Impact
            <div class="absolute right-0 top-0">
              <ButtonBackButton icon="icon-close" v-on:click.native="closeInfo"></ButtonBackButton>
            </div>
          </div>

          <div class="mt-7">
            <b>Solut</b>
            <p>Solut, also called climate in Latin, is an app aimed at sharing solutions to better resist today's extreme weather conditions.</p>

            <br />

            <p>
              People can share their own developed solutions on the platform, which others can work out in their own environment. Every time you have applied a
              solution in your own environment, you can indicate on how many people the solution has had an impact. This could be for yourself, a family or even
              a whole village.
            </p>

            <br />

            <b>Race to resilience</b>
            <p>
              The app is linked to the race to resilience. This is a global campaign set up by the UN, in which Solut participates. It seeks to take the step to
              make humans more resilient to climate extremes.
            </p>

            <div class="mt-7 flex space-between items-center">
              <img src="@/assets/illustrations/logo.svg" alt="" class="w-16 h-16" />
              <div class="ml-7 font-bold">Our ultimate goal is to make an impact on <span class="text-primary">100.000 people.</span></div>
            </div>
          </div>
        </div>
      </div>
    </vue-bottom-sheet>
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
    changePassword() {
      auth
        .sendPasswordResetEmail(this.userinfo.email)
        .then(() => {
          // Password reset email sent!
          // ..
          console.log('Email verstuurd')
          openPass()
        })
        .catch((error) => {
          var errorCode = error.code
          var errorMessage = error.message
          // ..
        })
    },

    // Modal open and close
    openInfo() {
      this.$refs.impactgoal.open()
    },
    closeInfo() {
      this.$refs.impactgoal.close()
    },
  },
}
</script>
