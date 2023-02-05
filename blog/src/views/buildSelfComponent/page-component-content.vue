<template>
  <div class="page-component-content-container">

  </div>
</template>

<script>
/*
* pageComponentGroup的数据结构：
* 1、有一个大标题
* 2、可能拥有若干个子标题
* 3、子标题都拥有各自的内容
* 4、可能存在插图
* 5、每一个pageComponentItem都拥有一个id，为了点击小标题可以快速下滑到对应的位置
* 6、是否需要支持字体高亮？
* 7、是否需要支持字体点击可以跳转？
* 8、是否需要支持相关知识的点击跳转？
* 9、还是支持前后端
* */
//
//
//
//
export default {
  name: "page-component-content",
  props: {
    pageComponentGroup: {
      type: Array,
      default: () => [],
    }
  },
}
</script>

<style scoped lang="less">
.page-component-content-container {
  display: flex;
  justify-content: flex-start;
  flex-flow: column;
}
</style>