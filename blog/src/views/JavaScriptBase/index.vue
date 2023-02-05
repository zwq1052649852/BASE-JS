<template>
  <section class="container">

  </section>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: "JavaScriptBase",
  components: {},
  data() {
    return {
      javaBaseEventLoopContent: '',
    }
  },
  methods: {
    ...mapActions({
      queryKnowledgeResource: 'queryKnowledgeResource',
    }),
    test() {
      this.queryKnowledgeResource()
    },
  }
}
</script>

<style scoped lang="less">
.container {
  padding: 20px 20px 0 20px;
}
</style>