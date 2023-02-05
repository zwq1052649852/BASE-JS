<template>
  <div class="container">
    <page-component-content></page-component-content>
  </div>
</template>

<script>
import PageComponentContent from "@/views/buildSelfComponent/page-component-content";
export default {
  name: "page-component",
  components: {PageComponentContent}
}
</script>

<style scoped lang="less">
.container {
  width: 100%;
  height: 100%;
}
</style>