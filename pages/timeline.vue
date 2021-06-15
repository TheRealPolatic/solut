<template>
  <div>
    <impactgoal></impactgoal>
    <div class="flex m-4">
      <pill v-for="pill in pills" :key="pill.text" :pill="pill" :class="{ 'bg-primary text-white': pill.active }" />
    </div>
    <solutioncard v-for="card in content.solutions" :key="card.id" :carddata="card" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: this.$store.state.solution,
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
  computed: {
    solutions() {
      return this.$store.state.solution
    },
  },
  created() {
    this.$store.dispatch('solution/fetchSolutions')
  },
}
</script>

<style></style>
