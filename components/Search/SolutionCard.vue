<template>
  <div class="flow-root m-6" @click="goToSolution(solution.id)">
    <ul class="-my-5 divide-y divide-gray-200">
      <li class="py-4">
        <div class="flex items-center space-x-4">
          <div class="flex-shrink-0">
            <img class="h-16 w-24 rounded-md object-cover" :src="solution.coverImage" />
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-bold text-gray-900 truncate">{{ solution.title }}</p>
            <div class="flex">
              <p v-for="category in solution.categories" :key="category.id" :category="category" class="text-sm text-gray-500 truncate">
                {{ category.title }}
              </p>
            </div>
          </div>
          <div>
            <a href="#">
              <i class="icon icon-chevron-right text-gray-400"></i>
            </a>
          </div>
        </div>
      </li>
    </ul>
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
  methods: {
    goToSolution(id) {
      this.$router.push('/solutions/' + id)
    },
  },
}
</script>
