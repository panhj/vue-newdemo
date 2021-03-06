const Mock = require('mockjs');

// Mock.mock(/Doc\/toc/, 'get', getTest())
// Mock.mock(/login/, 'post', {'username': 'xxx'})
// Mock.mock(/getArticle/, 'get', {"content": /[a-z][A-Z][0-9]/})

function getTest() {
    return {
        routeList: [
            {
                path: 'index',        // 一级  前面不要加'/'或者'#'
                name: '基础服务',
                icon: 'primary',         //  图标类名，暂时不做不用写这个字段了
                children: [
                    {
                        path: 'index/html文档1',     // 二级菜单 - 支持中文
                        name: '基础api1'
                    },
                    {
                        path: 'index/html2xxxx',
                        name: '基础api2'
                    },
                    {
                        path: 'index/html2xxxxx',
                        name: '基础api2xxx'
                    }
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
                                path: 'business/develop/api文档',   // 三级 - 支持中文
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
    }
}
