<template>
<el-menu
:default-active="$route.path"
class="el-menu-vertical-demo serve-sidebar"
background-color="#f5f6f7"
:unique-opened="unique"
:router="isroute">
    <el-menu-item index="/service/feedback" :class="{ 'active-bg': $route.path == '/service/feedback'}">
        <i class="el-icon-menu"></i>
        <span slot="title">问题反馈</span>
    </el-menu-item>
    <el-menu-item index="/service/access" :class="{ 'active-bg': $route.path == '/service/access'}">
        <i class="el-icon-menu"></i>
        <span slot="title">接入流程</span>
    </el-menu-item>
    <el-menu-item index="/service/notice" :class="{ 'active-bg': $route.path == '/service/notice'}">
        <i class="el-icon-menu"></i>
        <span slot="title">更新公告</span>
    </el-menu-item>
    <el-menu-item index="/service/demo" :class="{ 'active-bg': $route.path == '/service/demo'}">
        <i class="el-icon-menu"></i>
        <span slot="title">Demo下载</span>
    </el-menu-item>
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
    /* background-color: #ececee !important; */
}
.active-bg {
    background-color: #c9def5 !important;
}
</style>
