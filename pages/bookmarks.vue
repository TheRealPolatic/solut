<template>
  <div>
    <GeneralHeader background="white" title="Bookmarks"></GeneralHeader>

    <ShowSolutionTabWrapper>
      <ShowSolutionTab title="Bookmarked">
        <SolutionSimpleCard v-for="solution in bookmarkedSolutions" :key="solution.id" :solution="solution" :setting="'bookmark'" />
        <div v-if="!bookmarkedSolutions.length" class="text-center mt-20 px-6">
          <p>You have no bookmarked solutions. Go and <span @click="goTo('timeline')" class="text-primary">discover</span> some solutions..</p>
        </div>
      </ShowSolutionTab>
      <ShowSolutionTab title="My solutions">
        <SolutionSimpleCard v-for="solution in mySolutions" :key="solution.id" :solution="solution" :setting="'edit'" :activeState="true" />
        <div v-if="!mySolutions.length" class="text-center mt-20 px-6">
          <p>
            You haven't posted any solutions yet. You can always <span @click="goTo('create-solution')" class="text-primary">create</span> one if you want..
          </p>
        </div>
      </ShowSolutionTab>
    </ShowSolutionTabWrapper>
  </div>
</template>

<script>
export default {
  middleware: 'private',
  async asyncData({ store }) {
    // Set categories in state
    await store.dispatch('category/fetchCategories')
    const allCategories = store.state.category.categories

    // Set categories in state
    await store.dispatch('solution/fetchSolutions')
    const solutions = store.state.solution.solutions

    const user = store.state.user.user

    let mySolutions = []
    let bookmarkedSolutions = []

    for (let x = 0; x < solutions.length; x++) {
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
      solutions[x].categoryData = categoriesData
      if (solutions[x].userId === user.id) {
        mySolutions.push(solutions[x])
      }

      if (user.bookmarks) {
        if (Array.isArray(user.bookmarks)) {
          if (user.bookmarks.includes(solutions[x].id)) {
            console.log(solutions[x])
            bookmarkedSolutions.push(solutions[x])
          }
        }
      }
    }

    return { mySolutions, bookmarkedSolutions }
  },
  data() {
    return {
      mySolutions: [],
      bookmarkedSolutions: [],
    }
  },
  methods: {
    goTo(slug) {
      this.$router.push('/' + slug)
    },
  },
}
</script>

<style></style>
