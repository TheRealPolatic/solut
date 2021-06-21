<template>
  <div class="w-full">
    <div class="p-6">
      <div class="text-dark-grey uppercase mb-2">{{ formatDate(solution.createdAt) }}</div>
      <h1 class="text-dark font-bold text-xl">How to construct your own green roof</h1>
      <ul class="list-none text-darker-grey my-2">
        <li v-for="category in solution.categories" :key="category.id">
          <i class="mr-2 icon inline-flex" :class="'icon-' + category.icon"></i>{{ category.title }}
        </li>
      </ul>
      <p class="my-6">
        {{ solution.introduction }}
      </p>
      <div class="bg-grey flex items-center w-full h-16 px-4 mb-6 rounded-16">
        <div class="w-8 h-8 bg-black rounded-full overflow-hidden">
          <img class="object-cover w-full h-full" :src="solution.author.profileImage" alt="Profile image" />
        </div>
        <div class="pl-4">
          <div class="font-semibold text-sm">{{ solution.author.username }}</div>
          <div class="text-darker-grey text-xs">[user data]</div>
        </div>
      </div>
      <div class="bg-primary text-white rounded-12 w-full h-14 flex items-center justify-center mt-8 cursor-pointer" @click="openImpactModal">
        <p>I've used this solution</p>
      </div>
      <CreateImpactModal ref="impactModal" :solution="solution" />
    </div>
  </div>
</template>

<script>
const moment = require('moment')

export default {
  props: {
    solution: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  methods: {
    openImpactModal: function () {
      this.$refs.impactModal.open()
    },
    formatDate(time) {
      // Calculate timestamp
      const timestamp = time.toDate()
      const newDate = moment(timestamp).format('MMMM Do YYYY')
      return newDate
    },
  },
}
</script>
