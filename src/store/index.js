import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        routeList: [
            {
                path: 'index',
                name: '基础服务',
                children: [
                    {
                        path: 'index/html1',
                        name: '基础api1'
                    },
                    {
                        path: 'index/html2',
                        name: '基础api2'
                    },
                ]
            },
            {
                path: 'business',
                name: '业务系统',
                children: [
                    {
                        path: 'business/sevice',
                        name: '服务系统'
                    },
                    {
                        path: 'business/develop',
                        name: '开发指南',
                        children: [
                            {
                                path: 'business/develop/html1',
                                name: '开发API'
                            }
                        ]
                    }
                ]
            },
            {
                path: 'video',
                name: '视频服务',
                children: [
                    {
                        path: 'video/vcr',
                        name: '录像',
                        children: [
                            {
                                path: 'video/vcr/compress',
                                name: '录像压缩API',
                            }
                        ]
                    },
                    {
                        path: 'video/monitor',
                        name: '实时监控',
                        children: [
                            {
                                path: 'video/monitor/behave',
                                name: '行为API'
                            },
                            {
                                path: 'video/monitor/face',
                                name: '人脸API'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    modules: {

    }
})

export default store