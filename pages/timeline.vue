<template>
  <div class="p-6">
    <GeneralHeader title="Solutions" :class="'px-0'"></GeneralHeader>
    <impactgoal></impactgoal>
    <div class="flex mb-4 mt-4">
      <pill v-for="pill in pills" :key="pill.text" :pill="pill" :class="{ 'bg-primary text-white': pill.active }" />
    </div>
    <solutioncard v-for="card in allSolutions" :key="card.id" :carddata="card" />
  </div>
</template>

<script>
const moment = require('moment')

export default {
  async asyncData({ params, store }) {
    // Fetch all solutions
    await store.dispatch('solution/fetchSolutions')

    // Set categories in state
    await store.dispatch('category/fetchCategories')
    const allCategories = store.state.category.categories

    // Catch all solutions in a variable
    const allSolutions = store.state.solution.solutions

    // Loop through all the solutions and add the user to 'carddata'
    for (let i = 0; i < allSolutions.length; i += 1) {
      const user = await store.dispatch('user/fetchUser', allSolutions[i].userId)

      // Check if the solution has been bookmarked
      // if (user.bookmarks.includes(allSolutions[i].id)) {
      //   allSolutions[i].bookmarked = true
      // }

      allSolutions[i].user = user

      // Find the 5 latest users who got impacted
      const impactedUsersStart = allSolutions[i].impactUsers.length - 5

      if (impactedUsersStart < 0) {
        impactedUsersStart = 0
      }

      const impactedUsersLength = allSolutions[i].impactUsers.length

      const impactedUsers = await allSolutions[i].impactUsers.slice(impactedUsersStart, impactedUsersLength)
      const lastFiveUsers = []

      for (let x = 0; x < impactedUsers.length; x += 1) {
        const user = await store.dispatch('user/fetchUser', impactedUsers[x].userId)
        lastFiveUsers.push(user)
      }

      // Push the 5 users to carddata
      allSolutions[i].impactUserArr = lastFiveUsers

      // Calculate timestamp
      const timestamp = allSolutions[i].createdAt.toDate()
      const now = moment(timestamp, 'YYYYMMDD').fromNow()

      allSolutions[i].timeSince = now

      // Collect categories
      const categoriesData = []
      if (allSolutions[i].categories) {
        for (let x = 0; x < allSolutions[i].categories.length; x++) {
          for (let j = 0; j < allCategories.length; j++) {
            if (allSolutions[i].categories[x] === allCategories[j].id) {
              categoriesData.push(allCategories[j])
            }
          }
        }
      }

      allSolutions[i].allCategories = categoriesData
    }

    return { allSolutions }
  },
  data() {
    return {
      allSolutions: [],
      pills: [
        {
          label: 'Trending',
          active: true,
          icon: 'trending',
        },
        {
          label: 'New',
          icon: 'new',
          onclick: 'new',
        },
        {
          label: 'Top',
          icon: 'top',
        },
      ],
    }
  },
}
</script>

<style></style>
