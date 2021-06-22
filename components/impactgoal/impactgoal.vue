<template>
  <div class="bg-gray-100 rounded-lg p-4">
    <div class="row flex justify-between">
      <div class="col text-sm">
        We made impact on <span class="font-bold">{{ impactData.impacted }}</span> people so far
      </div>
      <div class="col text-lg text-gray-400 ml-auto">
        <i class="icon icon-info"></i>
      </div>
    </div>

    <div class="row bg-primary bg-opacity-30 h-1 rounded-lg my-3 overflow-hidden">
      <div class="col bg-primary h-full" :style="{ width: progressWidthPercent }"></div>
    </div>

    <div class="row flex justify-between items-center text-xs">
      <div class="col font-semibold text-gray-400">{{ peopleLeft }} people till the next milestone</div>
      <div class="col bg-primary rounded-lg px-2 py-1 text-white font-semibold">{{ currentGoal }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    impactData: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  data() {
    return {
      progressWidthPercent: '',
      currentGoal: 0,
      peopleLeft: 0,
    }
  },
  mounted() {
    this.calculateGoal()
    this.calculateProgress()
  },
  methods: {
    calculateGoal() {
      if (this.impactData.impacted < 100) {
        this.currentGoal = 100
      } else if (this.impactData.impacted < 500) {
        this.currentGoal = 500
      } else if (this.impactData.impacted < 1000) {
        this.currentGoal = 1000
      } else if (this.impactData.impacted < 10000) {
        this.currentGoal = 10000
      } else if (this.impactData.impacted < 50000) {
        this.currentGoal = 50000
      } else if (this.impactData.impacted < 100000) {
        this.currentGoal = 100000
      } else if (this.impactData.impacted > 100000) {
        this.currentGoal = 1000000
      }
    },

    calculateProgress() {
      this.progressWidth = (this.impactData.impacted / this.currentGoal) * 100
      this.progressWidthPercent = this.progressWidth.toString() + '%'
      this.peopleLeft = this.currentGoal - this.impactData.impacted
    },
  },
}
</script>

<style></style>
