<template>
  <div class="category-scrollbar flex w-full overflow-x-scroll overflow-y-hidden">
    <CreateCategoryTile v-for="category in categories" :key="category.id" :category="category" :active="checkIfActive(category.id)" v-on="$listeners" />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    solution: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  computed: {
    ...mapState('category', ['categories']),
  },
  methods: {
    checkIfActive(category) {
      return this.solution.categories.includes(category)
    },
  },
}
</script>

<style scoped>
.category-scrollbar::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}
</style>
