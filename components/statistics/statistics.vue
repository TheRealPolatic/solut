<template>
  <div class="bg-grey text-dark p-4 rounded-lg">
    <!-- Titel en info -->
    <div class="flex justify-between">
      <h4>Statistics</h4>
      <svg xmlns="http://www.w3.org/2000/svg" class="flex-none w-5 fill-current text-dark-grey" viewBox="0 0 24 24">
        <path
          d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 18h-2v-8h2v8zm-1-12.25c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25.56-1.25 1.25-1.25z"
        />
      </svg>
    </div>

    <!-- User your solutions -->
    <StatisticsProgress :current-impact="userTotalUse" :action="'have used your solutions'"></StatisticsProgress>

    <!-- Had impact on -->
    <StatisticsProgress :current-impact="userTotalImpact" :action="'are impacted by your solutions'"></StatisticsProgress>
  </div>
</template>

<script>
export default {
  props: {
    userTotalUse: {
      type: Number,
      default: 0,
    },
    userTotalImpact: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      currentImpact: 100,
      currentImpact2: 200,
    }
  },
}
</script>
