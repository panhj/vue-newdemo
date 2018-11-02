<template>
<el-menu
:default-active="$route.path"
class="el-menu-vertical-demo"
@open="handleOpen"
@close="handleClose"
background-color="#545c64"
text-color="#fff"
active-text-color="#ffd04b"
:router="isroute">
    <el-submenu index="/home">
        <template slot="title">
            <i class="el-icon-location"></i>
            <span>基础服务</span>
        </template>
        <el-menu-item index="/doc/index/item1" class="active-bg">视频服务1</el-menu-item>
        <el-menu-item index="/doc/index/item2">视频服务2</el-menu-item>
        <el-menu-item index="/doc/index/item3">视频服务3</el-menu-item>
        <el-submenu index="/doc/index/item4">
            <template slot="title">视频服务4</template>
            <el-menu-item index="/doc/index/item4/item4-1">录像</el-menu-item>
        </el-submenu>
    </el-submenu>
    <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
    </el-menu-item>
    <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
    </el-menu-item>
    <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
    </el-menu-item>
</el-menu>
</template>

<script>
export default {
    data () {
        return {
            isroute: true,
            mindex: []
        }
    },
    computed: {
        active: function () {
            return this.$route.path;
        }
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>

<style>
.active-bg {
    background-color: #000 !important;
}
</style>

