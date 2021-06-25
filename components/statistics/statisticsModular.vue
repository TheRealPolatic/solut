<template>
  <div class="bg-grey text-dark p-4 rounded-lg">
    <!-- Titel en info -->
    <div class="flex justify-between items-center">
      <h4 v-if="title !== ''">{{ title }}</h4>
      <div class="max-w-max ml-auto text-lg text-gray-400">
        <i class="icon icon-info"></i>
      </div>
    </div>

    <!-- User your solutions -->
    <StatisticsProgress v-for="goal in goals" :current-impact="goal.currentImpact" :action="goal.action" :key="goal"></StatisticsProgress>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Statistics',
      goals: [
        {
          currentImpact: 460,
          action: 'have used your solutions',
        },
        {
          currentImpact: 350,
          action: 'are impacted by your solutions',
        },
      ],
    }
  },
}
</script>
