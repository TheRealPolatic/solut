<template>
  <div class="flow-root my-6">
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
            <a href="#"> <img class="h-5 w-5 text-gray-400" src="@/assets/icons/chevron-right.svg" /> </a>
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
}
</script>
