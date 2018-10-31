<template>
    <el-menu :default-active="activeIndex" class="el-menu-demo" 
    mode="horizontal" 
    @select="handleSelect"  
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    :router="isroute">
        <el-menu-item index="/home">处理中心</el-menu-item>
        <el-menu-item index="/doc/index">消息中心</el-menu-item>
    </el-menu>
</template>

<script>
export default {
    name: "navbar",
    data () {
        return {
            // activeIndex: '/home'
            isroute: true
        }
    },
    computed: {
        activeIndex: function () {
            return this.$route.path;
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
    
</style>

