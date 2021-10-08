import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'
import init from './plugins/actionInit'

Vue.use(Vuex)
const store = new Vuex.Store({
  modules,
  plugins: [init()],
})

export default store
