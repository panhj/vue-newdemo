<template>
    <el-menu :default-active="activeIndex" class="el-menu-demo" 
    mode="horizontal" 
    @select="handleSelect"  
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    :router="isroute">
        <el-menu-item index="/home">处理中心</el-menu-item>
        <el-menu-item index="/doc/index/html1">消息中心</el-menu-item>
    </el-menu>
</template>

<script>
export default {
    name: "navbar",
    data () {
        return {
            isroute: true
        }
    },
    computed: {
        activeIndex: function () {
            return this.$route.path.indexOf('doc') > -1 ? '/doc/index/html1' : '/home';
        }
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    }
};
</script>

<style lang="less" scoped>
    .el-menu.el-menu--horizontal {
        border: none;
    }
</style>

