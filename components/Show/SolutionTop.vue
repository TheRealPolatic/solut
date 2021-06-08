<template>
  <div class="w-full bg-primary rounded-b-32">
    <div class="p-6">
      <div class="relative w-full pb-3/4 bg-red rounded-16 overflow-hidden mb-4">
        <img :src="solution.coverImage" :alt="'Cover image:' + solution.title" class="absolute top-0 object-cover h-full w-full" />
      </div>
      <div class="flex justify-between items-center">
        <div class="flex">
          <div class="w-6 h-6 bg-black rounded-full border-2 border-primary"></div>
          <div class="w-6 h-6 bg-black rounded-full border-2 border-primary -ml-2"></div>
          <div class="w-6 h-6 bg-black rounded-full border-2 border-primary -ml-2"></div>
          <div class="w-6 h-6 bg-black rounded-full border-2 border-primary -ml-2"></div>
          <div class="w-6 h-6 bg-black rounded-full border-2 border-primary -ml-2"></div>
        </div>
        <div class="text-white text-xs">mpacted <span class="font-semibold">jane.doe</span> and 16k more</div>
      </div>
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
