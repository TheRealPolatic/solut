<template>
  <div>
    <transition name="slide-left" mode="out-in">
      <CreateBasicInfo v-if="index == 1" @addBasicInfo="addToSolution" />
      <CreateMaterials v-else-if="index == 2" @addMaterials="addToSolution" @back="index--" />
      <CreateAddSteps v-else-if="index == 3" @addSteps="addToSolution" @back="index--" />
      <div v-else-if="index == 4">
        <div @click="submitSolution" class="rounded-xl w-40 h-14 flex items-center justify-center mb-8 cursor-pointer bg-primary text-white">
          <p>Submit</p>
        </div>
      </div>
      <!-- <CreateAddSteps /> -->
      <!-- <CreateMaterials /> -->
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      solution: {},
      index: 1,
    }
  },
  methods: {
    addToSolution(e) {
      this.solution = { ...e, ...this.solution }
      this.index++
    },
    submitSolution() {
      this.$store.dispatch('solution/createSolution', this.solution)
    },
  },
}
</script>

<style scoped>
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition-duration: 0.5s;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  overflow: hidden;
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(2em, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-2em, 0);
}
</style>
