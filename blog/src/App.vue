<template>
  <div id="app" class="container">
    <home></home>
  </div>
</template>

<script>
import home from "@/views/home";
export default {
  name: 'App',
  components: {
    home,
  },
}
</script>

<style>
@import "style/common.css";
body, html {
  height: 100%;
  width: 100%;
  margin: 0;
}
</style>
