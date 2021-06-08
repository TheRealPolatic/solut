<template>
  <!-- Backdrop -->
  <div class="h-full w-full bg-black bg-opacity-30 absolute top-0 left-0">
    <!-- Modal -->
    <div
      class="
        h-1/2
        w-full
        absolute
        bottom-0
        left-0
        rounded-t-xl
        bg-white
        p-8
        text-center
      "
    >
      <!-- Top bar -->
      <div class="flex justify-between">
        <div class="w-1/6"></div>
        <h1 class="text-center text-xl font-bold mt-2">Edit account</h1>
        <NuxtLink to="/account"
          ><ButtonBackButton class="w-1/6"></ButtonBackButton
        ></NuxtLink>
      </div>

      <p class="text-dark-grey mt-4">The changes on your account are saved.</p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
