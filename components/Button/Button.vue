<template>
  <button class="h-14 w-full bg-primary text-white font-semibold rounded-xl flex">
    <p class="m-auto">{{ label }}</p>
  </button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: 'Button',
    },
  },
}
</script>

<style></style>
