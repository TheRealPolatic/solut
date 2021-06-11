<template>
  <div class="pt-14">
    <GeneralHeader :background="headerBackground" title="Solution" :backbutton="true" :buttonright="headerButtonRight"></GeneralHeader>
    <div ref="solutionTopWrapper">
      <ShowSolutionTop :solution="solution" @scroll="handleScroll()"></ShowSolutionTop>
    </div>
    <ShowSolutionInfo :solution="solution"></ShowSolutionInfo>
    <ShowSolutionTabWrapper>
      <ShowSolutionTab title="Materials">
        <div class="text-darker-grey mb-2">Materials</div>
        <ul class="font-semibold mb-6">
          <li v-for="(material, index) in solution.materials" :key="`material-${index}`" class="mb-2 flex items-center">
            <span class="inline-block rounded-full h-4 w-4 border-2 border-primary mr-3"></span>
            {{ material }}
          </li>
        </ul>
        <div class="text-darker-grey mb-2">Tools</div>
        <ul class="font-semibold">
          <li v-for="(tool, index) in solution.tools" :key="`tool-${index}`" class="mb-2 flex items-center">
            <span class="inline-block rounded-full h-4 w-4 border-2 border-primary mr-3"></span>
            {{ tool }}
          </li>
        </ul>
      </ShowSolutionTab>
      <ShowSolutionTab title="Instructions">
        <ul class="border-dark-grey border-l pl-6">
          <li v-for="step in sortOnRank(solution.steps)" :key="step.rank" class="mb-6">
            <span class="absolute flex items-center -ml-8 -mt-1 rounded-full h-8 w-8 mr-3 bg-grey">
              <span class="flex rounded-full h-4 w-4 border-2 border-primary"></span>
            </span>
            <h2 class="text-lg font-semibold mb-2">Step {{ step.rank }}</h2>
            <p>{{ step.description }}</p>
            <img v-if="step.image" :src="step.image" :alt="'image step ' + step.rank" class="rounded-16 mt-6 mb-3" />
          </li>
          <li class="mb-6">
            <span class="absolute flex items-center -ml-8 -mt-1 rounded-full h-8 w-8 mr-3 bg-grey">
              <span class="flex rounded-full h-4 w-4 border-2 border-primary"></span>
            </span>
            <h2 class="text-lg font-semibold mb-2">Done</h2>
            <p>Thank you for doing your part! Let us know how many people you’ve impacted.</p>
          </li>
        </ul>
      </ShowSolutionTab>
    </ShowSolutionTabWrapper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headerBackground: 'primary',
      headerButtonRight: 'bookmark',
      slug: this.$route.params,
      solution: {
        solutionId: 'iu4Da8',
        userId: 'k90AN3di',
        title: 'How to construct your own green roof',
        introduction:
          'A green roof has benefits for insulation and for the environment. You can put a green roof on your house, but also on a shed, a carport or a bike shed.',
        coverImage: 'https://upload.wikimedia.org/wikipedia/commons/4/41/British_Horse_Society_Head_Quarters_and_Green_Roof.jpg',
        categories: [
          { id: 'kajdfk', label: 'Extreme heat', value: 'heat' },
          { id: 'jadfn', label: 'Hail storm', value: 'hail' },
        ],
        materials: ['20L bag of soil', 'Ground cover plants', 'Water', 'canvas'],
        tools: ['Hammer', 'Buckets', 'Stanley knife'],
        steps: [
          {
            id: 'ADSJf3',
            rank: '1',
            description: 'Wipe the existing roofing thoroughly.',
            image: 'https://longhomeproducts.com/wp-content/uploads/2017/04/Flat-Roofing-Construction-Wood.jpg',
          },
          {
            id: 'ADSJf3',
            rank: '3',
            description:
              'Roll out the fleece on the roof and cut it to size with sharp scissors if necessary. Spread the substrate evenly over the roof by hand. Do not use sharp tools because of damage to the roof.',
            image: '',
          },
          {
            id: 'ADSJf3',
            rank: '2',
            description:
              'Look for seams or cracks in your current roof. If necessary, flood your roof with a waterhose to detect any leakage. If your roofing is waterproof (and not very old) you can start laying the underlayments.',
            image: '',
          },
        ],
        impactUsers: [
          { userId: 'ldka34AH', impacted: 12, createdAt: 1623070756, updatedAt: '' },
          { userId: 'ldka45w', impacted: 12, createdAt: 1623070756, updatedAt: '' },
          { userId: 'ldka02fd', impacted: 12, createdAt: 1623070756, updatedAt: '' },
          { userId: 'ldk905f', impacted: 12, createdAt: 1623070756, updatedAt: '' },
          { userId: 'ld85ceA', impacted: 12, createdAt: 1623070756, updatedAt: '' },
          { userId: 'ldKio89k', impacted: 12, createdAt: 1623070756, updatedAt: '' },
        ],
        createdAt: 1623070756,
        updatedAt: 1623070756,
      },
    }
  },
  mounted() {
    this.handleScroll()
    this.getSolution(this.$route.params.solution)
  },
  methods: {
    sortOnRank(arr) {
      return arr.slice(0, arr.length).sort((a, b) => (a.rank > b.rank ? 1 : -1))
    },
    handleScroll() {
      window.onscroll = () => {
        const bottomOfElementReached = window.pageYOffset >= this.$refs.solutionTopWrapper.offsetHeight

        if (bottomOfElementReached) {
          this.headerBackground = 'white'
        } else {
          this.headerBackground = 'primary'
        }
      }
      // if (el.target.offsetHeight + el.target.scrollTop >= el.target.scrollHeight) {
      //   this.headerBackground = 'white'
      // }
    },
    getSolution(solutionId) {
      /* eslint-disable no-console */
      console.log(solutionId)
    },
  },
}
</script>

<style></style>
