<template>
    <el-menu :default-active="activeIndex" class="el-menu-demo" 
    mode="horizontal" 
    @select="handleSelect"  
    background-color="#2b333f"
    text-color="#f3f3f4"
    active-text-color="#67aaf5"
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
    .el-menu-demo {
        
    }
    .el-menu-item {
        font-size: 15px;
        padding: 0 30px;
    }
</style>

