<template>
  <div>
    <!-- Todo: automatically send to timeline in a proper way -->
    <h1>Redirecting to timeline..</h1>
  </div>
</template>

<script>
export default {
  created() {
    this.$router.push('/timeline')
  },
}
</script>

<style scoped></style>
