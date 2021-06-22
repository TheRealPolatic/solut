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

    <SearchCategorySlider @toggle-category="toggleCategory" :selectedCategory="selectedCategory" />

    <div v-if="selectedCategory !== ''">
      <SearchSolutionCard v-for="solution in filteredCategory" :key="solution.title" :solution="solution" />
    </div>

    <div v-else-if="searchValue == ''">
      <div class="">
        <SearchWeatherExtremeSlider v-for="category in categories" :key="category.id" :solutions="selectCategory(category.id)" :category="category" />
      </div>
    </div>

    <div v-else-if="searchValue !== ''">
      <SearchSolutionCard v-for="solution in filteredName" :key="solution.title" :solution="solution" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      searchValue: '',
      selectedCategory: '',
    }
  },
  props: {
    solution: {
      type: Object,
      default() {
        return {}
      },
    },
    category: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  computed: {
    ...mapState('solution', ['solutions']),
    ...mapState('category', ['categories']),
    filteredName() {
      let tempSolutions = this.solutions

      if (this.searchValue !== '' && this.searchValue) {
        tempSolutions = tempSolutions.filter((item) => {
          return item.title.toUpperCase().includes(this.searchValue.toUpperCase())
        })
      }
      return tempSolutions
    },
    filteredCategory() {
      if (this.selectedCategory !== '') {
        return this.solutions.filter((item) => {
          return item.categories.includes(this.selectedCategory)
        })
      }
      return this.solutions
    },
  },
  created() {
    this.$store.dispatch('category/fetchCategories')
    this.$store.dispatch('solution/fetchSolutions')
    console.log(this.categories)
  },
  methods: {
    toggleCategory(e) {
      if (this.selectedCategory) {
        this.selectedCategory = ''
      } else {
        this.selectedCategory = e.id
      }
    },
    selectCategory(categoryId) {
      const allSolutions = this.solutions
      const selectedSolutions = []
      for (let index = 0; index < allSolutions.length; index++) {
        if (allSolutions[index].categories.includes(categoryId)) {
          selectedSolutions.push(allSolutions[index])
        }
      }
      return selectedSolutions
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

.category-scrollbar::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}
</style>
