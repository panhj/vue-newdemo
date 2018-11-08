<template>
<el-menu
:default-active="$route.path"
class="el-menu-vertical-demo"
background-color="#545c64"
text-color="#aaa"
active-text-color="#ffd04b"
:unique-opened="unique"
:router="isroute">
    <el-submenu index="support/service">
        <template slot="title">
            <i class="el-icon-location"></i>
            <span>服务支持</span>
        </template>
        <el-menu-item index="/support/service/account" :class="{ 'active-bg': $route.path == '/support/service/account'}">账号申请</el-menu-item>
        <el-menu-item index="/support/service/feedback" :class="{ 'active-bg': $route.path == '/support/service/feedback'}">问题反馈</el-menu-item>
        <el-menu-item index="/support/service/problem" :class="{ 'active-bg': $route.path == '/support/service/problem'}">常见问题</el-menu-item>
        <el-menu-item index="/support/service/flow" :class="{ 'active-bg': $route.path == '/support/service/flow'}">接入流程</el-menu-item>
        <el-menu-item index="/support/service/notice" :class="{ 'active-bg': $route.path == '/support/service/notice'}">更新公告</el-menu-item>
    </el-submenu>
</el-menu>
</template>

<script>
export default {
    name: 'sidebar',
    data () {
        return {
            isroute: true,
            unique: true
        }
    },
}
</script>