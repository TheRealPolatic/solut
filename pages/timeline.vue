<template>
  <div>
    <impactgoal></impactgoal>
    <div class="flex m-4">
      <pill v-for="pill in pills" :key="pill.text" :pill="pill" />
    </div>
    <solutioncard></solutioncard>
  </div>
</template>

<script>
export default {
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
}
</script>

<style></style>
