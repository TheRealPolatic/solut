<template>
  <!-- Add new step modal -->
  <div>
    <vue-bottom-sheet ref="modal" max-height="100%">
      <div class="sheet-wrapper mx-4">
        <div class="flex justify-between items-center">
          <div class="w-10 h-10"></div>
          <h2 class="text-dark text-center font-bold text-xl">Great work!</h2>
          <div @click="close" class="back w-10 h-10 border border-gray-200 rounded-xl flex items-center justify-center cursor-pointer">
            <i class="icon icon-close"></i>
          </div>
        </div>
        <div class="mx-12 flex justify-center flex-col">
          <p class="text-center text-dark opacity-50">Thanks for contributing to a more resilient world.</p>
          <div class="flex justify-center my-8">
            <img src="@/assets/imgs/great-work.svg" />
          </div>

          <p class="text-center">Estimate how many <span class="text-primary font-bold">people</span> did benefit from your solution.</p>

          <div class="flex mb-4 mt-6 justify-between">
            <div class="rounded-full bg-primary w-12 h-12 flex justify-center items-center" :class="count ? {} : 'opacity-40'" @click="count ? count-- : {}">
              <i class="icon icon-chevron-left text-white"></i>
            </div>
            <input
              class="border rounded-2xl w-32 py-2 px-3 text-gray-700 leading-loose focus:outline-none text-center"
              type="number"
              placeholder="0"
              v-model="count"
            />
            <div
              class="rounded-full bg-primary w-12 h-12 flex justify-center items-center"
              @touchstart="start"
              @touchend="stop"
              @touchcancel="stop"
              @click="count++"
            >
              <i class="icon icon-chevron-right text-white"></i>
            </div>
          </div>
        </div>

        <div
          :class="count ? 'bg-primary text-white ' : 'bg-primary text-white opacity-40'"
          class="rounded-lg w-full h-14 flex items-center justify-center my-8 cursor-pointer"
          @click="count ? submitImpact(solution) : {}"
        >
          <p>Submit impact</p>
        </div>
      </div>
    </vue-bottom-sheet>
  </div>
</template>

<script>
export default {
  props: {
    solution: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    start() {
      if (!this.interval) {
        this.interval = setInterval(() => this.count++, 150)
      }
    },
    stop() {
      clearInterval(this.interval)
      this.interval = false
    },
    open() {
      this.$refs.modal.open()
    },
    close() {
      this.$refs.modal.close()
    },
    submitImpact(currentSolution) {
      const solution = {}
      solution.impactUsers = currentSolution.impactUsers
      solution.impactUsers.push({ userId: 'aQpEp19xPSXZBqQ4JdIe', impacted: this.count, created: Date.now() })
      const updateValues = { solutionId: currentSolution.id, updatedSolution: solution }
      this.$store.dispatch('solution/updateSolution', updateValues)
      close()
    },
  },
}
</script>
