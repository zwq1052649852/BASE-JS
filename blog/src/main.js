import Vue from 'vue'
import App from './App.vue'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vuex from 'vuex'
import less from 'less'
// import lessLoader from 'less-loader'

Vue.use(Vuex)
Vue.use(ElementUi)
Vue.use(less)
// Vue.use(lessLoader)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
