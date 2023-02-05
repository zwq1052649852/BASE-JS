<template>
  <section class="container flex-row-between">
    <left-menu :left-menu-arr="leftMenuArr"
               @router-enter="routerEnter"></left-menu>
    <component
        :is="asyncComponent"
        :key="`draw-${asyncComponent}`"
        v-bind="asyncComponentProps"
        ref="asyncComponentRef"
        is-render-as-component
        @on-close="asyncComponentVisible = false"
    ></component>
  </section>
</template>

<script>
import LeftMenu from "@/views/left-menu";
import resourceArr from "@/mixins/left-menu-constants";
import {mapMutations} from 'vuex'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "home",
  components: {LeftMenu},
  data() {
    return {
      asyncComponentVisible: false,
      asyncComponent: null,
      asyncComponentProps: {},
    }
  },
  created() {
    this.initData()
  },
  computed: {
    leftMenuArr() {
      return resourceArr.map(router => {
        if (router) {
          router.id = this.getRandomId()
        }
        if (router?.childMenu?.length) {
          router.childMenu = router.childMenu.map(child => {
            child.id = this.getRandomId()
            return child
          })
        }
        return router
      })
    },
  },
  methods: {
    ...mapMutations({
      SET_SOME_STATE: 'SET_SOME_STATE',
    }),
    initData() {
    },
    getRandomId() {
      return Math.random().toString().substr(2, 8)
    },
    routerEnter(menu) {
      this.asyncComponent = () => ({
        component: import(`@/${menu.routerPath}`),
        delay: 0,
      })
      this.$router.push(menu.routerPath)
    },
  },
}
</script>

<style scoped>

</style>