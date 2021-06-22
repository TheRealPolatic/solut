<template>
  <div class="">
    <div class="flex justify-between mt-6">
      <h2 class="text-xl font-bold">{{ category.title }}</h2>
      <p class="text-sm font-semibold mt-1">View all</p>
    </div>
    <div class="category-scrollbar flex overflow-x-scroll overflow-y-hidden">
      <SearchWeatherExtremeTile v-for="solution in solutions" :key="solution.id" :solution="solution" />
    </div>

    <!-- <div class="my-6">
      <div class="flex justify-between">
        <h2 class="text-xl font-bold">Extreme Heat</h2>
        <p class="text-sm font-medium mt-1">View all</p>
      </div>
      <div class="flex overflow-x-auto overflow-y-hidden whitespace-nowrap">
        <img class="h-full rounded-2xl my-4 mr-3" src="@/assets/images/sustainable.jpg" />
        <img class="h-full rounded-2xl my-4 mr-3" src="@/assets/images/sustainable.jpg" />
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  props: {
    solutions: {
      type: Array,
      default() {
        return []
      },
    },
    category: {
      type: Object,
      default() {
        return {}
      },
    },
  },
}
</script>
