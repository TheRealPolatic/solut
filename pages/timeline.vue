<template>
  <div>
    <impactgoal></impactgoal>
    <div class="flex m-4">
      <!-- <pill v-for="pill in pills" :key="pill.text" :pill="pill" /> -->
    </div>
    <solutioncard></solutioncard>
  </div>
</template>

<script>
// import { mapState } from 'vuex'

export default {
  created() {
    this.$store.dispatch('solution/fetchSolutions')
  },
  data() {
    return {
      pills: [
        {
          label: 'Trending',
          state: 'active',
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
}
</script>

<style></style>
