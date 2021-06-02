<template>
  <div>
    <h1>Solut</h1>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('solution/fetchSolutions')
  },
}
</script>

<style scoped></style>
