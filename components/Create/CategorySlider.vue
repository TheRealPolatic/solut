<template>
  <div class="category-scrollbar flex w-full overflow-x-scroll overflow-y-hidden">
    <CreateCategoryTile v-for="category in categories" :key="category.id" :category="category" v-on="$listeners" />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
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
