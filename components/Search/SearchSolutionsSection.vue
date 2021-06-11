<template>
  <div class="mx-6">
    <h1 class="text-dark font-bold text-2xl my-6">Search</h1>
    <div class="relative rounded-2xl border border-gray my-6 py-3">
      <div class="absolute inset-y-0 left-0 pl-3 flex items-center">
        <img class="h-5 w-5 text-gray-400" src="@/assets/icons/search.svg" />
      </div>
      <input
        id="search"
        v-model="searchValue"
        type="search"
        name="search"
        class="outline-none block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
        placeholder="Solutions or weather extremes"
      />
    </div>

    <div class="category-scrollbar flex w-full overflow-x-scroll overflow-y-hidden">
      <SearchCategoryTile v-for="category in categories" :key="category.id" :category="category" />
    </div>

    <!-- <button v-for="(c, i) in colors" :key="i" @click="onClick(c)">{{ c }}</button> -->

    <button v-for="category in categories" :key="category" @click="onClick(category)">{{ category.title }}</button>
    <div v-for="s in filteredCategories" :key="s.title">{{ s.title }}</div>
    <!-- <SearchSolutionCard v-for="s in filteredCategories" :key="s.title" :s="s" /> -->

    <div v-if="searchValue == ''">
      <SearchWeatherExtremeSlider v-for="solution in solutions" :key="solution.title" :solution="solution" />
    </div>

    <div v-else-if="searchValue !== ''">
      <SearchSolutionCard v-for="solution in filteredName" :key="solution.title" :solution="solution" />
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
      solutions: [
        {
          title: 'Sustainable beach',
          categories: [{ id: 0, title: 'Extreme Heat', icon: 'heat-dark.svg' }],
          coverImage: 'sustainable.jpg',
          category: 'Extreme Heat',
        },
        {
          title: 'Avoiding wildfire',
          categories: [{ id: 1, title: 'Blizzard', icon: 'heat-dark.svg' }],
          coverImage: 'drought.jpg',
          category: 'Blizzard',
        },
      ],
      filterBy: '',
      searchValue: '',
    }
  },
  computed: {
    filteredName() {
      let tempSolutions = this.solutions

      if (this.searchValue !== '' && this.searchValue) {
        tempSolutions = tempSolutions.filter((item) => {
          return item.title.toUpperCase().includes(this.searchValue.toUpperCase())
        })
      }
      return tempSolutions
    },
    filteredCategories() {
      if (this.filterBy === '') return this.solutions
      else return this.solutions.filter((s) => s.category === this.filterBy)
    },
  },
  methods: {
    onClick(category) {
      this.filterBy = category.title
    },
  },
}
</script>

<style>
input[type='search']::-webkit-search-cancel-button {
  -webkit-appearance: none;
  height: 1.7em;
  width: 1.7em;
  background: url('@/assets/icons/x.svg') no-repeat 50% 50%;
  background-size: contain;
  pointer-events: none;
  margin-right: 12px;
}

input[type='search']:focus::-webkit-search-cancel-button {
  opacity: 0.3;
  pointer-events: all;
}
</style>
