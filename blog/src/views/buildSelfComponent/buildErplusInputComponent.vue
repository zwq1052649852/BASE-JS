<template>
  <section class="container">
    <div class="flex-col-start erplus-input">
      <div class="menu-bar flex-row-start">

      </div>
      <div :contenteditable="true"
           class="erplus-input-content"
           v-html="erpInputContent">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "buildErplusInputComponent",
  data() {
    return {
      erpInputContent: '',
    }
  },
}
</script>

<style scoped lang="less">
.container {
  padding: 20px;
  .erplus-input {
    border: 2px solid #efefef;
  }
  .menu-bar {
    width: 100%;
    height: 30px;
  }
  .erplus-input-content {
    padding: 16px;
    border-top: 2px solid #efefef;
    min-height: 200px;
  }
}
</style>