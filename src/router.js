import Vue from 'vue'
import VueRouter from 'vue-router'

// import backSystem from './views'

Vue.use(VueRouter)

export default new VueRouter({
    scrollBehavior: () => ({ y: 0 }),
    routes: [
        {path: 'login', component: {}}
    ]
})