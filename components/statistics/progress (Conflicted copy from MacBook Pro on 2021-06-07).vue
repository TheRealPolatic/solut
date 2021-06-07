<template>
  <div class="mt-8">
    <p class="text-sm">
      <span class="font-bold">{{ YourUsedSolution }} people</span> have used
      your solution
    </p>

    <!-- Progress bar -->
    <div class="w-full h-2 bg-primary bg-opacity-20 rounded-full mt-2"></div>
    <div class="w-32 h-2 bg-primary rounded-full -mt-2" id="progressBar"></div>

    <div class="flex justify-between mt-2 h-6 align-middle">
      <p class="text-xs text-darker-grey font-medium align-middle mt-1">
        {{ tillNextMilestone }} people till the next milestone
      </p>
      <div class="bg-primary text-white text-xs font-bold p-1 rounded-md">
        {{ currentMilestone }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['usedSolution', 'nextMilestone', 'milestone'],
  data() {
    return {
      YourUsedSolution: this.usedSolution,
      tillNextMilestone: this.nextMilestone,
      currentMilestone: this.milestone,
    }
  },
}
</script>

<style></style>
