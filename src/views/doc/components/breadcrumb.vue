<template>
<el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
    <el-breadcrumb-item to="/doc/index">活动列表</el-breadcrumb-item>
    <el-breadcrumb-item>活动详情{{xroute}}</el-breadcrumb-item>
</el-breadcrumb>
</template>

<script>
export default {
    name: 'breadcrumb',
    data () {
        return {
            
        }
    },
    computed: {
        xroute: function() {
            console.log(this.$route)
            return this.$route.path
        }
    },
    methods: {

    }
}
</script>