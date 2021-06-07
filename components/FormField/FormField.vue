<template>
  <div>
    <label class="text-dark font-semibold">{{ label }}</label
    ><br />
    <input
      :type="type"
      class="border border-dark-grey rounded-xl h-12 w-full mt-2 pl-4 pr-4"
    />
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: 'Label',
    },
    type: {
      type: String,
      default: 'text',
    },
  },
  data() {
    return {}
  },
}
</script>

<style></style>
