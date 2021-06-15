<template>
  <div class="py-1 px-3 bg-gray-200 text-sm rounded-full flex items-center text-black text-medium mr-2">
    <div class="mr-2">
      <i class="icon icon-smog"></i>
    </div>
    {{ pill.label }}
  </div>
</template>

<script>
export default {
  props: {
    pill: {
      type: Object,
      default() {
        return {
          label: '',
          state: '',
        }
      },
    },
  },
}
</script>
