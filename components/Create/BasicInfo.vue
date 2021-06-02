<template>
  <div class="mx-6">
    <h1 class="my-6 text-dark text-center font-bold text-xl">Add solution</h1>

    <div class="progress-steps flex">
      <div class="step-one flex">
        <div class="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3">1</div>
        <div class="font-bold mr-3">General</div>
      </div>
      <div class="step-two flex">
        <div class="w-6 h-6 rounded-full bg-transparant text-dark flex items-center justify-center mr-3 border-2 border-dark font-bold">2</div>
      </div>
      <div class="step-three flex">
        <div class="w-6 h-6 rounded-full bg-transparant text-dark flex items-center justify-center mr-3 border-2 border-dark font-bold">3</div>
      </div>
    </div>
    <p>Title</p>
    <input v-model="basicInfo.title" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      basicinfo: {
        title: String,
        description: String,
        categories: Array,
        coverImg: String,
      },
    }
  },
}
</script>

<style scoped></style>
