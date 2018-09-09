import Vue from 'vue'
import Vuex from 'vuex'
import list from './modules/list'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    list
  },
  state,
  getters,
  mutations,
  actions
})
