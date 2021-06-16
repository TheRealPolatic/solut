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
    await store.dispatch('solution/fetchSolutions')

    const allSolutions = store.state.solution.solutions

    for (let i = 0; i < allSolutions.length; i += 1) {
      const user = await store.dispatch('user/fetchUser', allSolutions[i].userId)

      if (user.bookmarks.includes(allSolutions[i].id)) {
        allSolutions[i].bookmarked = true
      }

      allSolutions[i].user = user
    }

    return { allSolutions }
  },
  data() {
    return {
      pills: [
        {
          label: 'Trending',
          active: true,
        },
        {
          label: 'Top',
        },
      ],
    }
  },
}
</script>

<style></style>
