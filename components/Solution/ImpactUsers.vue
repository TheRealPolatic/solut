<template>
  <div class="flex justify-between items-center" v-if="solutionData.impactUsers.length">
    <div class="flex ml-2">
      <div
        v-for="impactUser in solutionData.impactUserArr"
        :key="impactUser.userId"
        class="w-6 h-6 overflow-hidden bg-darker-grey rounded-full border-2 border-primary -ml-2"
      >
        <img v-if="impactUser.profileImage" class="object-cover w-full h-full" :src="impactUser.profileImage" alt="" />
      </div>
    </div>
    <div class="text-xs" :class="'text-' + textColor">
      Impacted

      <!-- v-if-else structure (user is session user -> username becomes 'you') -->
      <span class="font-semibold">{{ solutionData.impactUserArr.slice(-1)[0].username }}</span>
      <span v-if="countTotalImpact(solutionData) > 1"> and {{ countTotalImpact(solutionData) - 1 }} more</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    solutionData: {
      type: Object,
      default() {
        return {}
      },
    },
    textColor: {
      type: String,
      default() {
        return 'dark'
      },
    },
  },
  methods: {
    countTotalImpact(solution) {
      let count = 0
      for (let i = 0; i < solution.impactUsers.length; i++) {
        count += solution.impactUsers[i].impacted
      }
      return count
    },
  },
}
</script>
