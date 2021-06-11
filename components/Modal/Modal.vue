<template>
  <!-- Backdrop -->
  <div class="h-full w-full bg-black bg-opacity-30 absolute top-0 left-0">
    <!-- Modal -->
    <div
      class="
        h-auto
        w-full
        absolute
        bottom-0
        left-0
        rounded-t-3xl
        bg-white
        p-8
        text-center
      "
    >
      <!-- Top bar -->
      <div class="flex justify-between">
        <div class="w-1/12"></div>

        <!-- Title -->
        <h1 class="text-center text-xl font-bold mt-2">{{ title }}</h1>

        <!-- Close button -->
        <ButtonBackButton
          class="w-1/12"
          :icon="'icon-close'"
        ></ButtonBackButton>
      </div>

      <!-- Subtext below the title -->
      <p class="text-dark-grey mt-2">
        {{ subtext }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Title',
    },
    subtext: {
      type: String,
      default: 'Subtext',
    },
  },
  methods: {},
}
</script>

<style></style>
