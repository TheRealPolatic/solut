<template>
  <div class="mx-6">
    <!-- Header -->
    <div class="header flex justify-between items-center">
      <div class="back w-10 h-10 border border-gray-200 rounded-xl flex items-center justify-center">
        <img src="@/assets/icons/chevron-left.svg" />
      </div>
      <h1 class="my-6 text-dark text-center font-bold text-xl">Add solution</h1>
      <div class="w-10 h-10"></div>
    </div>

    <!-- Progress indicator -->
    <div class="progress-steps flex justify-between items-center">
      <div class="step-one flex justify-center items-center">
        <div class="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 font-bold text-sm">1</div>
      </div>
      <CreateDottedLine color="#00E3A8" />
      <div class="step-two mx-3.5 flex justify-center items-center">
        <div class="w-6 h-6 rounded-full bg-transparant text-white bg-dark flex items-center justify-center mr-3 border-2 border-dark font-bold text-sm">2</div>
        <div class="font-bold mr-3">Materials</div>
      </div>
      <CreateDottedLine color="#262626" />
      <div class="step-three flex justify-center items-center">
        <div class="w-6 h-6 rounded-full bg-transparant text-dark flex items-center justify-center border-2 border-dark font-bold text-sm">3</div>
      </div>
    </div>

    <!-- Materials -->
    <div class="mt-6">
      <div class="input-top flex justify-between">
        <label class="font-semibold text-sm">Materials</label>
      </div>

      <!-- Material inputboxes -->
      <form class="">
        <div class="form-group">
          <div v-for="(input, index) in materials" :key="`material-${index}`" class="my-2 relative">
            <img src="@/assets/icons/x.svg" class="absolute top-4 right-4 cursor-pointe" @click="removeField(index, materials)" />
            <input
              v-model="input.material"
              type="material"
              class="border rounded-2xl w-full py-2 px-3 text-gray-700 leading-loose focus:outline-none"
              placeholder="Material name"
            />
          </div>
        </div>
      </form>

      <div @click="addField(input, materials)" class="rounded-xl bg-light-grey h-14 w-full flex items-center justify-center">
        <div class="content opacity-50 flex">
          <img class="mr-3" src="@/assets/icons/plus-dark.svg" />
          <p>Add material</p>
        </div>
      </div>
    </div>

    <!-- Tools -->
    <div class="mt-6">
      <div class="input-top flex justify-between">
        <label class="font-semibold text-sm">Tools</label>
      </div>

      <!-- Tool inputboxes -->
      <form class="">
        <div class="form-group">
          <div v-for="(input, index) in tools" :key="`tool-${index}`" class="my-2 relative">
            <img src="@/assets/icons/x.svg" class="absolute top-4 right-4 cursor-pointe" @click="removeField(index, tools)" />
            <input
              v-model="input.tool"
              type="tool"
              class="border rounded-2xl w-full py-2 px-3 text-gray-700 leading-loose focus:outline-none"
              placeholder="Tool name"
            />
          </div>
        </div>
      </form>

      <div @click="addField(input, tools)" class="rounded-xl bg-light-grey h-14 w-full flex items-center justify-center">
        <div class="content opacity-50 flex">
          <img class="mr-3" src="@/assets/icons/plus-dark.svg" />
          <p>Add tool</p>
        </div>
      </div>

      <!-- Buttons -->
      <div class="w-full mt-6 flex justify-between">
        <div class="rounded-xl bg-light-grey text-black w-40 h-14 flex items-center justify-center mb-8">
          <p>Previous step</p>
        </div>
        <div class="rounded-xl bg-primary text-white w-40 h-14 flex items-center justify-center mb-8">
          <p>Next step</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      materials: [{ material: '' }],
      tools: [{ tool: '' }],
    }
  },
  methods: {
    addField(value, fieldType) {
      fieldType.push({ value: '' })
    },
    removeField(index, fieldType) {
      fieldType.splice(index, 1)
    },
  },
}
</script>

<style scoped>
input[type='material']::-webkit-search-cancel-button {
  -webkit-appearance: none;
  height: 1.7em;
  width: 1.7em;
  background: url('@/assets/icons/x.svg') no-repeat 50% 50%;
  background-size: contain;
  pointer-events: none;
  margin-right: 12px;
}
input[type='material']:focus::-webkit-search-cancel-button {
  opacity: 0.3;
  pointer-events: all;
}
</style>
