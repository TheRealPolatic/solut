<template>
  <div class="my-6">
    <div class="flex justify-between">
      <h2 v-for="category in solution.categories" :key="category.id" :category="category" class="text-xl font-bold">
        {{ category.title }}
      </h2>
      <p class="text-sm font-semibold mt-1">View all</p>
    </div>
    <div class="">
      <div class="relative">
        <img class="w-full relative h-full rounded-2xl my-4 mr-3" :src="require(`~/assets/images/${solution.coverImage}`)" />
        <div class="absolute bottom-0">
          <img class="rounded-2xl w-screen" src="@/assets/images/overlay.png" />
        </div>
        <div class="absolute bottom-0 m-4 text-white">
          <div class="font-semibold">{{ solution.title }}</div>
          <div v-for="category in solution.categories" :key="category.id" :category="category" class="font-light text-sm">
            {{ category.title }}
          </div>
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
}
</script>
