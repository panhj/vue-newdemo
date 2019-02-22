import Vue from 'vue'
import VueRouter from 'vue-router'

import login from './views/login/login'
import Layout from './views/Layout/Layout'

Vue.use(VueRouter)

export default new VueRouter({
    scrollBehavior: () => ({ y: 0 }),
    base: '/support',
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
            path: '/',
            component: Layout,
            children: [
                {
                    path: '/service',
                    name: 'service',
                    meta: {'title': '服务支持'},
                    redirect: '/service/feedback',
                    component: () => import('@/views/support/support'),
                    children: [
                        {
                            path: '/service/feedback',
                            name: 'feedback',
                            meta: {'title': '合作申请'},
                            component: () => import('@/views/support/pages/feedback')
                        },
                        {
                            path: '/service/access',
                            name: 'access',
                            meta: {'title': '对接流程'},
                            component: () => import('@/views/support/pages/access')
                        },
                        {
                            path: '/service/notice',
                            name: 'notice',
                            meta: {'title': '更新公告'},
                            component: () => import('@/views/support/pages/notice')
                        },
                        {
                            path: '/service/notice/detail',
                            name: 'detail',
                            meta: {'title': '更新公告 > 详情'},
                            component: () => import('@/views/support/pages/noticeDetail')
                        },
                        {
                            path: '/service/demo',
                            name: 'demo',
                            meta: {'title': '附件下载'},
                            component: () => import('@/views/support/pages/demo')
                        }
                    ]
                }
            ]
        }
        // {
        //     path: '/doc',
        //     meta: { 'title': '产品服务' },
        //     component: Layout,
        //     redirect: '/doc/' + routeList[0].path,
        //     children: docRoutes
        //     // children: [
        //     //     {
        //     //         path: 'index',
        //     //         meta: { title: '基础服务', child: false},
        //     //         component: doc,
        //     //         children: [
        //     //             {
        //     //                 path: 'item1',
        //     //                 name: 'item1',
        //     //                 meta: { title: '视频服务' },
        //     //                 component: () => import('@/views/doc/artical')
        //     //             },
        //     //             {
        //     //                 path: 'item2',
        //     //                 name: 'item2',
        //     //                 meta: { title: '视频服务2' },
        //     //                 component: () => import('@/views/doc/artical')
        //     //             },
        //     //             {
        //     //                 path: 'item3',
        //     //                 name: 'item3',
        //     //                 meta: { title: '视频服务3' },
        //     //                 component: () => import('@/views/doc/artical')
        //     //             },
        //     //             {
        //     //                 path: 'item4',
        //     //                 name: 'item4',
        //     //                 component: toArtical,
        //     //                 meta: { title: '视频服务4'},
        //     //                 children: [
        //     //                     {
        //     //                         path: 'item4-1',
        //     //                         meta: { title: '实时监控' },
        //     //                         component: () => import('@/views/doc/artical')
        //     //                     },
        //     //                     {
        //     //                         path: 'item4-2',
        //     //                         meta: { title: '录像' },
        //     //                         component: () => import('@/views/doc/artical')
        //     //                     },
        //     //                 ]
        //     //             },
        //     //         ]
        //     //     }
        //     // ]
        // }
    ]
})