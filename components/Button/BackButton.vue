<template>
  <div class="text-center">
    <div class="flex h-10 w-10 border rounded-xl justify-center items-center">
      <i class="icon text-2xl flex" :class="icon"></i>
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
