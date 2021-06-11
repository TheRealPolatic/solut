<template>
  <div class="text-center">
    <div class="h-10 w-10 border rounded-xl pt-2">
      <i class="icon text-2xl" :class="icon"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: '',
    },
  },
}
</script>

<style></style>
