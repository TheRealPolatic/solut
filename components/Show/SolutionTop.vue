<template>
  <div class="w-full bg-primary rounded-b-32">
    <div class="p-6">
      <div class="relative w-full pb-3/4 bg-red rounded-16 overflow-hidden mb-4">
        <img :src="solution.coverImage" :alt="'Cover image:' + solution.title" class="absolute top-0 object-cover h-full w-full" />
      </div>
      <div class="flex justify-between items-center">
        <div v-if="solution.impactUsers.length" class="flex ml-2">
          <div
            v-for="impactUser in selectImpactUsers(solution.impactUsers.slice(0, 5))"
            :key="impactUser.userId"
            class="w-6 h-6 bg-darker-grey rounded-full border-2 border-primary -ml-2"
          >
            <img :src="impactUser.userId" alt="" />
          </div>
        </div>
        <div class="text-white text-xs">
          impacted
          <span class="font-semibold">{{ impactUserArr.slice(-1)[0].userId }}</span>
          <!-- v-if-else structure (user is session user) -->
          <span v-if="solution.impactUsers"> and {{ solution.impactUsers.length - 1 }} more</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    solution: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  data() {
    return {
      impactUserArr: [],
    }
  },
  methods: {
    selectImpactUsers(impactUsers) {
      // Get User data / profile pics et cetera
      this.impactUserArr = impactUsers

      return this.impactUserArr
    },
  },
}
</script>
