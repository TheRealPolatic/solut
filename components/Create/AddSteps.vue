<template>
  <div class="mx-6">
    <!-- Header -->
    <div class="header flex justify-between items-center">
      <div class="back w-10 h-10 border border-gray-200 rounded-xl flex items-center justify-center" @click="$emit('back')">
        <i class="icon icon-chevron-left"></i>
      </div>
      <h1 class="my-6 text-dark text-center font-bold text-xl">Add solution</h1>
      <div class="w-10 h-10"></div>
    </div>

    <!-- Progress indicator -->
    <div class="progress-steps flex justify-between items-center">
      <div class="step-one flex justify-center items-center">
        <div class="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center mr-3 font-bold text-sm">1</div>
      </div>
      <CreateDottedLine color="#00E3A8" />
      <div class="step-two mx-3.5 flex justify-center items-center">
        <div class="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">2</div>
      </div>
      <CreateDottedLine color="#00E3A8" />
      <div class="step-three mx-3.5 flex justify-center items-center">
        <div class="w-7 h-7 rounded-full bg-transparant text-white flex items-center justify-center border-2 border-dark font-bold text-sm bg-dark">3</div>
        <div class="font-bold ml-3">Instructions</div>
      </div>
    </div>

    <!-- No instructions notice -->
    <div v-if="steps.length == 0">
      <div class="center flex justify-center mb-8 mt-12">
        <img src="@/assets/imgs/no-instructions.svg" />
      </div>
      <h2 class="font-bold text-xl text-center text-dark mb-2">No instructions yet</h2>
      <p class="text-center opacity-50">Add instructions steps for others to recreate your solution</p>
    </div>

    <!-- If there are steps, list them below -->
    <div v-else class="mt-10">
      <h3 class="font-semibold text-sm mb-2">Steps</h3>
      <div v-for="(step, index) in steps" :key="`step-${index}`" class="my-2 border h-14 rounded-2xl py-2 px-3 flex items-center">
        <p class="font-semibold mr-4">{{ index + 1 }}</p>
        <p class="text-gray-700 w-60 truncate">{{ step.description }}</p>
        <i class="icon icon-edit cursor-pointer ml-4"></i>
      </div>
    </div>

    <!-- Add new step btn -->
    <div @click="open" class="rounded-xl mt-4 bg-light-grey h-14 w-full flex items-center justify-center cursor-pointer">
      <div class="content opacity-50 flex">
        <i class="icon icon-plus text-dark mr-3"></i>
        <p>Add step</p>
      </div>
    </div>

    <!-- Buttons -->
    <div class="w-full mt-6 flex justify-between">
      <div class="rounded-xl bg-light-grey text-black w-40 h-14 flex items-center justify-center mb-8 cursor-pointer" @click="$emit('back')">
        <p>Previous step</p>
      </div>
      <div
        @click="steps.length ? addSteps() : {}"
        :class="{ 'opacity-40': !steps.length }"
        class="bg-primary text-white rounded-xl w-40 h-14 flex items-center justify-center mb-8 cursor-pointer"
      >
        <p>Add solution</p>
      </div>
    </div>

    <!-- Add new step modal -->
    <vue-bottom-sheet ref="addstep" max-height="100%">
      <div class="sheet-wrapper mx-4">
        <div class="flex justify-between items-center">
          <div class="w-10 h-10"></div>
          <h2 class="text-dark text-center font-bold text-xl">Add step</h2>
          <div @click="close" class="back w-10 h-10 border border-gray-200 rounded-xl flex items-center justify-center cursor-pointer">
            <i class="icon icon-close"></i>
          </div>
        </div>
        <div class="mt-6">
          <div class="input-top flex justify-between">
            <label class="font-semibold text-sm">Description</label>
            <p :class="currentStep.description.length == maxLength ? 'text-red-500' : 'text-dark opacity-40'" class="text-sm">
              {{ `${currentStep.description.length} / ${maxLength}` }}
            </p>
          </div>

          <textarea
            class="mt-2 border rounded-2xl w-full py-2 px-3 text-gray-700 leading-loose h-40 focus:outline-none"
            v-model="currentStep.description"
            :maxlength="maxLength"
            type="text"
            placeholder="Type a quick introduction about the solution"
          />
        </div>
        <div class="my-4">
          <label class="font-semibold text-sm">Cover image</label>
          <div class="flex justify-center items-center mt-2">
            <file-upload
              ref="upload"
              v-model="currentStep.stepImage"
              v-if="currentStep.stepImage.length == 0"
              @input-filter="inputFilter"
              accept="image/*"
              :size="1024 * 1024"
              class="rounded-xl bg-light-grey h-16 w-screen"
            >
              <div class="flex my-5 justify-center">
                <i class="icon icon-upload text-dark opacity-50 mr-4"></i>
                <p class="opacity-50">Upload image</p>
              </div>
            </file-upload>
          </div>
        </div>
        <div class="w-full relative" v-for="image in currentStep.stepImage" :key="image.blob">
          <div v-if="image.blob" class="preview h-40 rounded-xl overflow-hidden" :style="{ 'background-image': `url(${image.blob})` }"></div>
          <div @click="resetImg" class="delete h-6 w-6 rounded-full absolute right-2 top-2 bg-white flex justify-center items-center cursor-pointer">
            <i class="icon icon-close text-dark"></i>
          </div>
        </div>
        <div
          :class="currentStep.description ? 'bg-primary text-white ' : 'bg-primary text-white opacity-40'"
          class="rounded-lg w-full h-14 flex items-center justify-center my-8 cursor-pointer"
          @click="addStep(currentStep, steps)"
        >
          <p>Add step</p>
        </div>
      </div>
    </vue-bottom-sheet>
    <CreateImpactModal />
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentStep: { 'description': '', 'stepImage': [], 'rank': 1 },
      steps: [],
      images: [],
      maxLength: 250,
      index: 2,
    }
  },
  methods: {
    open() {
      this.$refs.addstep.open()
    },
    close() {
      this.$refs.addstep.close()
    },

    inputFilter(newFile, oldFile, prevent) {
      if (newFile && !oldFile) {
        // Filter non-image file
        if (!/\.(jpeg|jpe|jpg|gif|png|webp)$/i.test(newFile.name)) {
          return prevent()
        }
      }

      // Create a blob field
      newFile.blob = ''
      let URL = window.URL || window.webkitURL
      if (URL && URL.createObjectURL) {
        newFile.blob = URL.createObjectURL(newFile.file)
      }
    },
    resetImg() {
      this.currentStep.stepImage = []
    },
    addStep(value, fieldType) {
      fieldType.push(value)
      this.currentStep = { 'description': '', 'stepImage': [], 'rank': this.index }
      this.index++
      this.close()
    },
    addSteps() {
      const solutionData = {
        steps: this.steps,
      }
      this.$emit('addSteps', solutionData)
    },
  },
}
</script>

<style scoped>
.preview {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
