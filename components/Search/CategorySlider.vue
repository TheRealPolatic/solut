<template>
  <div>
    <div class="category-scrollbar flex w-full overflow-x-scroll overflow-y-hidden mb-3 px-6">
      <SearchCategoryTile v-for="category in categories" :key="category.id" :category="category" v-on="$listeners" :selectedCategory="selectedCategory" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: {
    selectedCategory: {
      type: String,
      default() {
        return ''
      },
    },
  },
  computed: {
    ...mapState('category', ['categories']),
  },
}
</script>

<style scoped>
.category-scrollbar::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}
</style>
