import Vue from 'vue'
import VueRouter from 'vue-router'

import login from './views/login/login'
import Layout from './views/Layout/Layout'
// import backSystem from './views'

Vue.use(VueRouter)

export default new VueRouter({
    scrollBehavior: () => ({ y: 0 }),
    routes: [
        {path: '/login', component: login},
       
        {
            path: '/',
            redirect: '/home',
            component: Layout,
            children: [
                {
                    path: '/home',
                    name: 'home',
                    component: () => import('@/views/home/home')
                }
            ]
        },
        {
            path: '/doc',
            redirect: '/doc/index',
            component: Layout,
            children: [
                {
                    path: '/doc/index',
                    name: 'index',
                    component: () => import('@/views/doc/doc')
                }
            ]
        }
    ]
})