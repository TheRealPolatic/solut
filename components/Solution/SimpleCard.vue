<template>
  <div class="relative w-full pb-3/4 bg-red rounded-16 overflow-hidden mb-4" @click="goToSolution(solution.id)">
    <div class="absolute h-full w-full p-4 z-10">
      <div class="relative flex h-full w-full">
        <div v-if="buttonright" class="absolute right-0 h-10 w-10 flex items-center justify-center border rounded-12 border-opacity-70 text-white">
          <i class="icon" :class="'icon-' + buttonright"></i>
        </div>
        <div class="absolute bottom-0 text-white">
          <div class="font-semibold">{{ solution.title }}</div>
          <div v-for="(category, index) in solution.categoryData" :key="category.id" class="font-light text-dark-grey text-xs inline">
            <span v-if="index > 0" class="mx-1">•</span>{{ category.title }}
          </div>
        </div>
      </div>
    </div>

    <div>
      <img :src="solution.coverImage" :alt="'Cover image: ' + solution.title" class="absolute top-0 object-cover h-full w-full text-center" />
      <div class="absolute top-0 left-0 h-full w-full bg-gradient-to-t from-black to-transparent opacity-50"></div>
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
    buttonright: {
      type: String,
      default() {
        return 'bookmark'
      },
    },
  },
  methods: {
    goToSolution(id) {
      this.$router.push('/solutions/' + id)
    },
  },
}
</script>
