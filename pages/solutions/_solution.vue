<template>
  <div>
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
            <img v-if="step.stepImage" :src="step.stepImage" :alt="'image step ' + step.rank" class="rounded-16 mt-6 mb-3" />
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
  async asyncData({ params, store }) {
    // Set categories in state
    store.dispatch('category/fetchCategories')
    const categories = store.state.category.categories

    // Fetching solution data
    const solution = await store.dispatch('solution/fetchSolution', params.solution)

    // Redirect to timeline when solution is not found
    if (solution === undefined) {
      return redirect('/timeline')
    }

    // Fetching author data
    const author = await store.dispatch('user/fetchUser', solution.userId)
    solution.author = author

    // Fetching impacted user data
    const impactUsers = solution.impactUsers.slice(solution.impactUsers.length - 5, solution.impactUsers.length)
    const impactUserArr = []

    for (let i = 0; i < impactUsers.length; i++) {
      const user = await store.dispatch('user/fetchUser', impactUsers[i].userId)
      impactUserArr.push(user)
    }
    solution.impactUserArr = impactUserArr

    // Setting category data in solution
    const categoriesData = []
    for (let i = 0; i < solution.categories.length; i++) {
      for (let j = 0; j < categories.length; j++) {
        if (solution.categories[i] === categories[j].id) {
          categoriesData.push(categories[j])
        }
      }
    }
    solution.categories = categoriesData

    // Set solution data object
    return { solution }
  },
  data() {
    return {
      headerBackground: 'primary',
      headerButtonRight: 'bookmark',
      slug: this.$route.params,
      solution: {},
    }
  },
  mounted() {
    this.handleScroll()
  },
  methods: {
    // sort steps on rank
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
    },
    getUser(id) {
      this.$store.dispatch('user/fetchUser', id).then((result) => {
        return result
      })
    },
  },
}
</script>

<style></style>
