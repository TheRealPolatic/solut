<template>
  <div>
    <ShowSolutionTop></ShowSolutionTop>
    <ShowSolutionInfo></ShowSolutionInfo>
    <ShowSolutionTabWrapper>
      <ShowSolutionTab title="Materials">
        <div class="text-darker-grey mb-2">Materials</div>
        <ul class="font-semibold mb-6">
          <li v-for="(material, index) in materials" :key="`material-${index}`" class="mb-2 flex items-center">
            <span class="inline-block rounded-full h-4 w-4 border-2 border-primary mr-3"></span>
            {{ material }}
          </li>
        </ul>
        <div class="text-darker-grey mb-2">Tools</div>
        <ul class="font-semibold">
          <li v-for="(tool, index) in tools" :key="`tool-${index}`" class="mb-2 flex items-center">
            <span class="inline-block rounded-full h-4 w-4 border-2 border-primary mr-3"></span>
            {{ tool }}
          </li>
        </ul>
      </ShowSolutionTab>
      <ShowSolutionTab title="Instructions">
        <ul class="border-primary border-dotted border-l-4 pl-6">
          <li v-for="step in steps" :key="step.rank" class="mb-6">
            <span class="absolute -ml-9 rounded-full h-4 w-4 border-2 border-primary mr-3 bg-grey"></span>
            <h2 class="text-lg font-semibold mb-2">Step {{ step.rank }}</h2>
            <p>{{ step.description }}</p>
            <img v-if="step.image" :src="step.image" :alt="'image step ' + step.rank" class="rounded-16 mt-6 mb-3" />
          </li>
          <li class="mb-6">
            <span class="absolute -ml-9 rounded-full h-4 w-4 border-2 border-primary mr-3 bg-grey"></span>
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
    }
  },
}
</script>

<style></style>
