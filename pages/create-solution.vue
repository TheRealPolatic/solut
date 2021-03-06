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
import { firestore, storage } from '../plugins/firebase'

export default {
  middleware: 'private',
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
  watch: {
    isReady() {
      if (this.solution.id) {
        this.openImpactModal()
      }
    },
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
        const id = await this.uploadSolution()
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

      return [toolArray, materialArray]
    },

    uploadSolution() {
      return new Promise(async (resolve) => {
        console.log(this.solution)

        // add static key impactuser
        // add own userId to impactUsers

        const [tools, materials] = this.getToolsAndMaterials()

        const postData = {
          title: this.solution.title,
          introduction: this.solution.introduction,
          categories: this.solution.categories,
          materials: materials,
          tools: tools,
          impactUsers: [],
          userId: this.$store.state.user.user.id,
          createdAt: Date.now(),
        }
        let id
        let ext
        let blob
        let r

        firestore
          .collection('solutions')
          .add(postData)
          .then((data) => {
            id = data.id
            return id
          })
          .then(async (id) => {
            const filename = this.solution.images[0].name
            ext = filename.slice(filename.lastIndexOf('.'))
            r = await fetch(this.solution.images[0].blob)
            blob = await r.blob()
            return storage.ref(`solutions/${id}${ext}`).put(blob)
          })
          .then(() => {
            return storage.ref(`solutions/${id}${ext}`).getDownloadURL()
          })
          .then((url) => {
            return firestore.collection('solutions').doc(id).update({ coverImage: url })
          })
          .then(async () => {
            // https://stackoverflow.com/questions/52873516/vue-js-returns-ob-observer-data-instead-of-my-array-of-objects
            let steps = JSON.parse(JSON.stringify(this.solution.steps))

            let actions = steps.map((step, index) => {
              return new Promise(async (resolve) => {
                let stepData = {
                  description: step.description,
                  rank: step.rank,
                }
                if (step.stepImage.length) {
                  const filename = step.stepImage[0].name
                  ext = filename.slice(filename.lastIndexOf('.'))

                  r = await fetch(step.stepImage[0].blob)
                  blob = await r.blob()
                  await storage.ref(`solutions/${id}_${filename}`).put(blob)
                  let url = await storage.ref(`solutions/${id}_${filename}`).getDownloadURL()
                  console.log(url)
                  stepData['stepImage'] = url
                }
                resolve(stepData)
              })
            })
            Promise.all(actions).then((data) => {
              firestore.collection('solutions').doc(id).update({ steps: data })
              this.solution.id = id
              this.isReady = true
              resolve(id)
            })
          })
          .catch((error) => {
            console.log(error)
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
