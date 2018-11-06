<template>
<el-breadcrumb separator=">">
    <el-breadcrumb-item v-for="item in linkList" :key="item.path" :to="item.path">{{ item.name }}</el-breadcrumb-item>
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
        linkList: function() {
           let arr = [];
           for (let item of this.$route.matched) {
               arr.push({
                   name: item.meta.title || '未知',
                   path: item.path
               })
           }
        return arr;
        }
    },
    methods: {

    }
}
</script>