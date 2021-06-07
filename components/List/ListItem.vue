<template>
  <li class="flex items-center mb-1">
    <i class="icon text-lg text-primary mr-4" :class="icon"></i>

    <p class="-mt-2">{{ content }}</p>
  </li>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: '',
    },
    content: {
      type: String,
      default: 'List content',
    },
  },
}
</script>

<style></style>
