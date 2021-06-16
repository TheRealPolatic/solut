<template>
  <div class="w-full bg-primary rounded-b-32">
    <div class="p-6">
      <div class="relative w-full pb-3/4 bg-red rounded-16 overflow-hidden mb-4">
        <img :src="solution.coverImage" :alt="'Cover image:' + solution.title" class="absolute top-0 object-cover h-full w-full" />
      </div>
      <SolutionImpactUsers :solutionData="solution" textColor="white"></SolutionImpactUsers>
      


    </div>
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
  
}
</script>
