<template>
  <div>
    <label class="text-dark font-semibold">{{ label }}</label
    ><br />
    <input :type="type" :placeholder="placeholder" v-model="fieldValue" class="border border-dark-grey rounded-xl h-12 w-full mt-2 pl-4 pr-4" />
    <p>{{ fieldValue }}</p>
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
    placeholder: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      fieldValue: '',
    }
  },
}
</script>

<style></style>
