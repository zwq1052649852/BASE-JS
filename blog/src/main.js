import Vue from 'vue'
import App from './App.vue'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vuex from 'vuex'
import less from 'less'
import loadsh from 'loadsh'
import router from './router/index';
import VueRouter from "vue-router";
import  VueQuillEditor from 'vue-quill-editor'
import store from '../src/store/index'
// require styles 引入样式
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
// import lessLoader from 'less-loader'

Vue.use(Vuex)
Vue.use(ElementUi)
Vue.use(less)
Vue.use(loadsh)
Vue.use(VueRouter)
Vue.prototype.$cloneDeep = loadsh.cloneDeep
Vue.prototype.$store = store
Vue.use(VueQuillEditor)
// Vue.use(lessLoader)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')
