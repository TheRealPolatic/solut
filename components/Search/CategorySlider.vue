<template>
  <div>
    <div class="category-scrollbar flex w-full overflow-x-scroll overflow-y-hidden">
      <SearchCategoryTile v-for="category in categories" :key="category.id" :category="category" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        { id: 0, title: 'Extreme Heat', icon: 'heat-dark.svg' },
        { id: 1, title: 'Blizzard', icon: 'blizzard-dark.svg' },
        { id: 2, title: 'Heavy Rainfall', icon: 'rainfall-dark.svg' },
        { id: 3, title: 'Flood', icon: 'flood-dark.svg' },
        { id: 4, title: 'Tornado', icon: 'tornado-dark.svg' },
        { id: 5, title: 'Drought', icon: 'drought-dark.svg' },
      ],
      states: [
        { id: 0, toggled: false },
        { id: 1, toggled: false },
        { id: 2, toggled: false },
        { id: 3, toggled: false },
        { id: 4, toggled: false },
        { id: 5, toggled: false },
      ],
    }
  },
}
</script>

<style scoped>
.category-scrollbar::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}
</style>
