<template>
  <div>
    <GeneralHeader background="white" title="Bookmarks"></GeneralHeader>

    <ShowSolutionTabWrapper>
      <ShowSolutionTab title="Bookmarked">
        <SolutionSimpleCard v-for="solution in solutions" :key="solution.id" :solution="solution" />
      </ShowSolutionTab>
      <ShowSolutionTab title="My solutions"></ShowSolutionTab>
    </ShowSolutionTabWrapper>
  </div>
</template>

<script>
export default {
  async asyncData({ store }) {
    // Set categories in state
    await store.dispatch('category/fetchCategories')
    const allCategories = store.state.category.categories

    // Set categories in state
    await store.dispatch('solution/fetchSolutions')
    const solutions = store.state.solution.solutions

    for (let x = 0; x < solutions.length; x++) {
      console.log(solutions[x])
      // Setting category data in solution
      const categoriesData = []
      if (solutions[x].categories) {
        for (let i = 0; i < solutions[x].categories.length; i++) {
          for (let j = 0; j < allCategories.length; j++) {
            if (solutions[x].categories[i] === allCategories[j].id) {
              categoriesData.push(allCategories[j])
            }
          }
        }
      }
      // solutions[x].categories = categoriesData
    }

    return { solutions }
  },
  data() {
    return {
      solutions: [],
    }
  },
}
</script>

<style></style>
