import Vue from 'vue'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})
