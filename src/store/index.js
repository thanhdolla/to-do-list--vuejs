import Vue from 'vue'
import Vuex from 'vuex'
// import getters from './getters.js'
// import mutations from './mutations.js'
// import actions from './actions.js'
import list from './modules/list'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        list,
    },
})
