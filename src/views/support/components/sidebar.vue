<template>
<el-menu
:default-active="$route.path"
class="el-menu-vertical-demo"
background-color="#f5f6f7"
:unique-opened="unique"
:router="isroute">
    <el-submenu index="support/service">
        <template slot="title">
            <i class="el-icon-location"></i>
            <span>服务支持</span>
        </template>
        <el-menu-item index="/support/service/feedback" :class="{ 'active-bg': $route.path == '/support/service/feedback'}">问题反馈</el-menu-item>
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
<style scoped>

.el-submenu {
    border-bottom: 1px dashed #ddd;
}
.el-menu-item {
    background-color: #ececee !important;
}
.active-bg {
    background-color: #c9def5 !important;
}
</style>
