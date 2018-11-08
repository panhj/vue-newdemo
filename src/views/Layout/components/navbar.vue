<template>
    <el-menu :default-active="activeIndex" class="el-menu-demo" 
    mode="horizontal" 
    @select="handleSelect"  
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    :router="isroute">
        <el-menu-item index="/home">首页</el-menu-item>
        <el-menu-item index="/doc">产品服务</el-menu-item>
        <el-menu-item index="/support">服务支持</el-menu-item>
    </el-menu>
</template>

<script>
import { mapState } from 'Vuex'
export default {
    name: "navbar",
    data () {
        return {
            isroute: true
        }
    },
    computed: {
        ...mapState({
            configRoutes: state => state.configRoutes.configRoutes
        }),
        activeIndex: function () {
            let path = this.$route.path;
            if (path.indexOf('doc') > -1) return '/doc'
            if (path.indexOf('support') > -1) return '/support'
            return '/home';
        },
    },
    mounted () {
        
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

