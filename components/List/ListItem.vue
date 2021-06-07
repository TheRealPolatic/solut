<template>
  <li class="flex items-center mb-1">
    <!-- <svg
      xmlns="http://www.w3.org/2000/svg"
      class="flex-none w-4 mr-4 fill-current text-primary"
      viewBox="0 0 24 24"
    >
      <path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
      />
    </svg> -->

    <!-- <i class="icon icon-location"></i> -->

    {{ content }}
  </li>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      default: 'List content',
    },
  },
}
</script>

<style></style>
