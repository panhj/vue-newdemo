import Vue from 'vue'
import VueRouter from 'vue-router'

import login from './views/login/login'
import Layout from './views/Layout/Layout'
import doc from './views/doc/doc'
import toArtical from './views/doc/toArtical'

import store from './store'

const loadArtical = () => import('@/views/doc/artical');

Vue.use(VueRouter)

const docRoutes = [];
let routeList = store.state.routeList;
for (let value of routeList) {
    let firstObj = {
        path: '/doc/' + value.path,
        meta: { title: value.name },
        component: doc,
    };
    if (value.children) {
        firstObj.children = [];
        firstObj.redirect = '/doc/' + value.children[0].path;
        for (let child of value.children) {
            let secondObj = {
                path: '/doc/' + child.path,
                meta: { title: child.name }
            }
            if (child.children) {
                secondObj.redirect = '/doc/' + child.children[0].path;
                secondObj.component = toArtical;
                secondObj.children = [];
                for (let secondChild of child.children) {
                    secondObj.children.push({
                        path: '/doc/' + secondChild.path,
                        meta: { title: secondChild.name },
                        component: loadArtical
                    })
                }
            } else {
                secondObj.component = loadArtical
            }
            firstObj.children.push(secondObj);
        }
    }
    docRoutes.push(firstObj);
}
console.log(docRoutes);
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
            meta: { 'title': '产品服务' },
            component: Layout,
            redirect: '/doc/' + routeList[0].path,
            // children: [
            //     {
            //         path: 'index',
            //         meta: { title: '基础服务', child: false},
            //         component: doc,
            //         children: [
            //             {
            //                 path: 'item1',
            //                 name: 'item1',
            //                 meta: { title: '视频服务' },
            //                 component: () => import('@/views/doc/artical')
            //             },
            //             {
            //                 path: 'item2',
            //                 name: 'item2',
            //                 meta: { title: '视频服务2' },
            //                 component: () => import('@/views/doc/artical')
            //             },
            //             {
            //                 path: 'item3',
            //                 name: 'item3',
            //                 meta: { title: '视频服务3' },
            //                 component: () => import('@/views/doc/artical')
            //             },
            //             {
            //                 path: 'item4',
            //                 name: 'item4',
            //                 component: toArtical,
            //                 meta: { title: '视频服务4'},
            //                 children: [
            //                     {
            //                         path: 'item4-1',
            //                         meta: { title: '实时监控' },
            //                         component: () => import('@/views/doc/artical')
            //                     },
            //                     {
            //                         path: 'item4-2',
            //                         meta: { title: '录像' },
            //                         component: () => import('@/views/doc/artical')
            //                     },
            //                 ]
            //             },
            //         ]
            //     }
            // ]
            children: docRoutes
        }
    ]
})