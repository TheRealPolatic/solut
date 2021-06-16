<template>
  <div>
    <impactgoal></impactgoal>
    <div class="flex m-4">
      <pill v-for="pill in pills" :key="pill.text" :pill="pill" :class="{ 'bg-primary text-white': pill.active }" />
    </div>
    <solutioncard v-for="card in allSolutions" :key="card.id" :carddata="card" />
  </div>
</template>

<script>
export default {
  async asyncData({ params, store }) {
    // Fetch all solutions
    await store.dispatch('solution/fetchSolutions')

    // Catch all solutions in a variable
    const allSolutions = store.state.solution.solutions

    // Loop through all the solutions and add the user to 'carddata'
    for (let i = 0; i < allSolutions.length; i += 1) {
      const user = await store.dispatch('user/fetchUser', allSolutions[i].userId)

      // Check if the solution has been bookmarked
      if (user.bookmarks.includes(allSolutions[i].id)) {
        allSolutions[i].bookmarked = true
      }

      allSolutions[i].user = user

      // Find the 5 latest users who got impacted
      const impactedUsersStart = allSolutions[i].impactUsers.length - 5
      const impactedUsersLength = allSolutions[i].impactUsers.length

      const impactedUsers = await allSolutions[i].impactUsers.slice(impactedUsersStart, impactedUsersLength)
      const lastFiveUsers = []

      for (let x = 0; x < impactedUsers.length; x += 1) {
        const user = await store.dispatch('user/fetchUser', impactedUsers[x])
        lastFiveUsers.push(user)
      }

      // Push the 5 users to carddata
      allSolutions[i].lastFiveUsers = lastFiveUsers
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
