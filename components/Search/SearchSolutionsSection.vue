<template>
  <div class="mx-6">
    <h1 class="text-dark font-bold text-2xl my-6">Search</h1>
    <div class="relative rounded-2xl border border-gray my-6 py-3">
      <div class="absolute inset-y-0 left-0 pl-3 flex items-center">
        <img class="h-5 w-5 text-gray-400" src="@/assets/icons/search.svg" />
      </div>
      <input
        id="search"
        type="text"
        name="search"
        class="outline-none block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
        placeholder="Solutions or weather extremes"
      />
    </div>
    <SearchSolutionCard v-for="solution in solutions" :key="solution.title" :solution="solution" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      solutions: [
        {
          title: 'Sustainable beach',
          category: 'Extreme heat',
          coverImage: 'sustainable.jpg',
        },
        {
          title: 'Avoiding wildfire',
          category: 'Extreme drought',
          coverImage: 'drought.jpg',
        },
      ],
    }
  },
}
</script>
