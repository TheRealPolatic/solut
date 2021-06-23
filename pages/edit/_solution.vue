<template>
  <div>
    <transition name="slide-left" mode="out-in">
      <CreateBasicInfo v-if="index == 1" @addBasicInfo="addToSolution" :solution="solution" />
      <CreateMaterials v-else-if="index == 2" @addMaterials="addToSolution" @back="handleBack" :solution="solution" />
      <CreateAddSteps v-else-if="index == 3" @addSteps="addToSolution" @back="handleBack" :solution="solution" />
    </transition>
    <CreateImpactModal ref="impactModal" :redirectToId="solution.id" />
  </div>
</template>

<script>
import { firestore, storage } from '../../plugins/firebase'

export default {
  middleware: 'private',
  async asyncData({ params, store }) {
    if (!store.state.user.id == params.solution) {
      return redirect('/timeline')
    }

    // Fetching solution data
    const solution = await store.dispatch('solution/fetchSolution', params.solution)

    solution.images = []

    // Redirect to timeline when solution is not found
    if (solution === undefined) {
      return redirect('/timeline')
    }

    // Set solution data object
    return { solution }
  },
  data() {
    return {
      solution: {
        id: '', // otherwise it will give an error because it cant fetch the key 'id'
        title: '',
        introduction: '',
        categories: [],
        images: [],
        materials: [{ material: '' }],
        tools: [{ tool: '' }],
        currentStep: { description: '', stepImage: [], rank: 1 },
        steps: [],
      },
      index: 1,
      isReady: false,
    }
  },
  //   watch: {
  //     isReady() {
  //       if (this.solution.id) {
  //         this.openImpactModal()
  //       }
  //     },
  //   },
  created() {
    this.convertToolsAndMaterials()
  },
  methods: {
    handleBack() {
      this.index--
    },
    openImpactModal() {
      this.$refs.impactModal.open()
    },
    addToSolution: async function (e) {
      this.solution = { ...e, ...this.solution }

      if (e.steps) {
        const id = await this.updateSolution()
        console.log('Opening impactmodal ' + id)
        // this.$nextTick(() => {
        //   this.openImpactModal()
        // })

        // todo: redirect to impact modal
      } else {
        this.index++
      }
    },
    submitSolution() {
      // Not needed since the solution uploading is in uploadSolution()
      this.$store.dispatch('solution/createSolution', this.readySolution)
    },
    getToolsAndMaterials() {
      const materialArray = this.solution.materials.map((material) => {
        return material['material']
      })
      const toolArray = this.solution.tools.map((tool) => {
        return tool['tool']
      })

      // Make sure there is no empty string in the array
      return [toolArray.filter((e) => e), materialArray.filter((e) => e)]
    },
    convertToolsAndMaterials() {
      const materials = this.solution.materials.map((material) => {
        return { material: material }
      })

      const tools = this.solution.tools.map((tool) => {
        return { tool: tool }
      })

      this.solution.materials = materials
      this.solution.tools = tools
    },
    updateSolution() {
      return new Promise(async (resolve) => {
        console.log(this.solution)

        // converting tools to usable format
        const [tools, materials] = this.getToolsAndMaterials()

        // Getting a unique ID for the new assets
        let uniqueTimestamp = Date.now()
        let postData = {
          title: this.solution.title,
          introduction: this.solution.introduction,
          categories: this.solution.categories,
          materials: materials,
          tools: tools,
          updatedAt: uniqueTimestamp,
        }

        // Check if image has changed, otherwise keep the current coverimage
        if (this.solution.images.length) {
          const filename = this.solution.images[0].name
          let ext = filename.slice(filename.lastIndexOf('.'))
          let r = await fetch(this.solution.images[0].blob)
          let blob = await r.blob()
          await storage.ref(`solutions/${this.solution.id}_${uniqueTimestamp}${ext}`).put(blob)
          let url = await storage.ref(`solutions/${this.solution.id}_${uniqueTimestamp}${ext}`).getDownloadURL()
          postData['coverImage'] = url
        }

        let updatedSteps = this.solution.steps.map(async (step) => {
          let updatedData = {}
          if (Array.isArray(step.stepImage)) {
            let update = new Promise(async (resolve) => {
              let stepData = {
                description: step.description,
                rank: step.rank,
              }
              if (step.stepImage.length) {
                const filename = step.stepImage[0].name
                let r = await fetch(step.stepImage[0].blob)
                let blob = await r.blob()
                await storage.ref(`solutions/${this.solution.id}_${filename}`).put(blob)
                let url = await storage.ref(`solutions/${this.solution.id}_${filename}`).getDownloadURL()
                stepData['stepImage'] = url
              }
              resolve(stepData)
            })
            updatedData = await update
          } else {
            updatedData = step
          }
          return updatedData
        })
        Promise.all(updatedSteps).then((values) => {
          postData.steps = values

          const updateData = { solutionId: this.solution.id, data: postData }
          this.$store.dispatch('solution/updateSolution', updateData)
          this.$router.push(`/solutions/${this.solution.id}`)
        })
      })
    },
  },
}
</script>

<style scoped>
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition-duration: 0.5s;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  overflow: hidden;
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(2em, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-2em, 0);
}
</style>
