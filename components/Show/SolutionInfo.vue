<template>
  <div class="w-full">
    <div class="p-6">
      <div class="text-dark-grey uppercase mb-2">15 may, 2021</div>
      <h1 class="text-dark font-bold text-xl">How to construct your own green roof</h1>
      <ul class="list-none text-darker-grey my-2">
        <li v-for="category in solution.categories" :key="category.value"><i class="mr-2 icon" :class="'icon-' + category.value"></i>{{ category.label }}</li>
      </ul>
      <p class="my-6">
        {{ solution.introduction }}
      </p>
      <div class="bg-grey flex items-center w-full h-16 px-4 mb-6 rounded-16">
        <div class="w-8 h-8 bg-black rounded-full"></div>
        <div class="pl-4">
          <div class="font-semibold text-sm">[username]</div>
          <div class="text-darker-grey text-xs">[user data]</div>
        </div>
      </div>
    </div>
    <div class="w-full h-px bg-dark-grey"></div>
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
