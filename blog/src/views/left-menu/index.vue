<template>
  <section class="left-menu flex-col-start">
    <el-menu
        class="el-menu-vertical-demo">
      <template v-for="(menu, index) in leftMenuArr">
        <el-submenu :key="`${menu.id}-${index}`"
                    :index="menu.id"
                    @click.native="routerEnter(menu)">
          <template slot="title">
            <span>{{ menu.title }}</span>
          </template>
          <template v-if="isExistChildMenu(menu.childMenu)">
            <template v-for="(childMenu, childIndex) in menu.childMenu">
              <el-menu-item :key="`${menu.id}-${childIndex}`"
                            :index="menu.id"
                            @click.native.stop="routerEnter(childMenu)">
                <template slot="title">
                  {{ childMenu.title }}
                </template>
              </el-menu-item>
            </template>
          </template>
        </el-submenu>
      </template>
    </el-menu>
  </section>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: "left-menu",
  props: {
    leftMenuArr: {
      type: Array,
      default: () => [],
    }
  },
  computed: {
    ...mapGetters({}),
  },
  methods: {
    isExistChildMenu(childMenu) {
      return !!(childMenu && childMenu?.length)
    },
    routerEnter(menu) {
      this.$emit('router-enter', menu)
    },
  },
}
</script>

<style lang="less" scoped>
.left-menu {
  min-width: 300px;
  height: 100%;
}
</style>
<style scoped>
.left-menu >>> .el-menu {
  height: 100%;
}
</style>