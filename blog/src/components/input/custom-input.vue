<template>
  <div class="container">
    <input v-model="inputText" :max="24">
  </div>
</template>

<script>
export default {
  name: "custom-input",
  data() {
    return {
      inputText: '',
    }
  },
}
</script>

<style scoped>

</style>