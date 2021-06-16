<template>
  <div class="flex justify-between items-center">
        <div v-if="solutionData.impactUsers" class="flex ml-2">
          <div
            v-for="impactUser in solutionData.impactUserArr"
            :key="impactUser.userId"
            class="w-6 h-6 overflow-hidden bg-darker-grey rounded-full border-2 border-primary -ml-2"
          >
            <img class="object-cover w-full h-full" :src="impactUser.profileImage" alt="" />
          </div>
        </div>
        <div class="text-xs" :class="'text-' + textColor">
          Impacted
          <span class="font-semibold">{{ solutionData.impactUserArr.slice(-1)[0].username }}</span>
          <!-- v-if-else structure (user is session user) -->
          <span v-if="solutionData.impactUsers.length > 1"> and {{ solutionData.impactUsers.length - 1 }} more</span>
        </div>
      </div>
</template>

<script>
export default {
  props: {
    solutionData:{
      type: Object,
      default(){
        return {}
      }
    },
    textColor:{
      type: String,
      default(){
        return 'dark'
      }
    },
    // background: {
    //   type: String,
    //   default() {
    //     return 'white'
    //   },
    // },
    // title: {
    //   type: String,
    //   default() {
    //     return ''
    //   },
    // },
    // backbutton: {
    //   type: Boolean,
    //   default() {
    //     return false
    //   },
    // },
    // buttonright: {
    //   type: String,
    //   default() {
    //     return ''
    //   },
    // },
  },
  methods: {
    // textColor(bg) {
    //   return {
    //     'text-white': bg !== 'white',
    //     'text-dark': bg === 'white',
    //   }
    // },
    // buttonColor(bg) {
    //   return {
    //     'border-white': bg !== 'white',
    //     'border-dark': bg === 'white',
    //   }
    // },
    // goBack() {
    //   this.$router.go(-1)
    // },
  },
}
</script>
