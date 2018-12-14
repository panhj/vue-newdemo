import Vue from 'vue'
import Vuex from 'vuex'

import configRoutes from './configRoutes'
import login from './login'
import notice from './notice'

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        
    },
    modules: {
        configRoutes,
        login,
        notice
    }
})

export default store