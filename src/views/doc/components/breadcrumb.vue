<template>
<el-breadcrumb separator=">">
    <!-- <transition-group name="breadcrumb"> -->
        <el-breadcrumb-item v-for="item in linkList" :key="item.path" :to="item.path">{{ item.name }}</el-breadcrumb-item>
    <!-- </transition-group> -->
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
               if(!item.meta.title) continue;
               arr.push({
                   name: item.meta.title,
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
<style scoped>
/*fade*/


</style>
