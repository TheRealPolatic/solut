<template>
  <div class="mt-8">
    <p class="text-sm">
      <span class="font-bold">{{ currentImpact }} people</span> {{ action }}
    </p>

    <!-- Progress bar -->
    <div class="w-full h-2 bg-primary bg-opacity-20 rounded-full mt-2"></div>
    <div id="progressBar" class="h-2 bg-primary rounded-full -mt-2" :style="{ width: progressWidthPercent }"></div>

    <div class="flex justify-between mt-2 h-6 align-middle">
      <p class="text-xs text-darker-grey font-medium align-middle mt-1">{{ tillNextMilestone }} people till the next milestone</p>
      <div class="bg-primary text-white text-xs font-bold p-1 rounded-md">{{ theNextMilestone }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentImpact: {
      type: Number,
      default: 0,
    },
    action: {
      type: String,
      default: 'have...',
    },
  },
  data() {
    return {
      progressWidthPercent: '',
      theNextMilestone: 0,
      tillNextMilestone: 0,
    }
  },

  mounted() {
    this.calculateMilestone()
    this.calculateProgress()
  },

  methods: {
    calculateMilestone() {
      // Milestone 100
      if (this.currentImpact > 0 && this.currentImpact < 100) {
        this.theNextMilestone = 100
      }
      // Milestone 250
      else if (this.currentImpact > 99 && this.currentImpact < 250) {
        this.theNextMilestone = 250
      }
      // Milestone 500
      else if (this.currentImpact > 249 && this.currentImpact < 500) {
        this.theNextMilestone = 500
      }
      // Milestone 1000
      else if (this.currentImpact > 499 && this.currentImpact < 1000) {
        this.theNextMilestone = 1000
      }
      // Milestone 2500
      else if (this.currentImpact > 999 && this.currentImpact < 2500) {
        this.theNextMilestone = 2500
      }
    },
    calculateProgress() {
      this.progressWidth = (this.currentImpact / this.theNextMilestone) * 100
      this.progressWidthPercent = this.progressWidth.toString() + '%'
      this.tillNextMilestone = this.theNextMilestone - this.currentImpact
    },
  },
}
</script>

<style></style>
