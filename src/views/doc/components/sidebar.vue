<template>
<el-menu
:default-active="$route.path"
class="el-menu-vertical-demo"
background-color="#f5f6f7"
:unique-opened="unique"
:router="isroute">
    <!-- <el-submenu>
        <template slot="title">
            <i class="el-icon-location"></i>
            <span>基础服务</span>
        </template>
        <el-menu-item index="/doc/index/item1" :class="{ 'active-bg': $route.path == '/doc/index/item1'}">视频服务1</el-menu-item>
        <el-menu-item index="/doc/index/item2" :class="{ 'active-bg': $route.path == '/doc/index/item2'}">视频服务2</el-menu-item>
        <el-menu-item index="/doc/index/item3" :class="{ 'active-bg': $route.path == '/doc/index/item3'}">视频服务3</el-menu-item>
        <el-submenu index="/doc/index/item4">
            <template slot="title">视频服务4</template>
            <el-menu-item index="/doc/index/item4/item4-1" :class="{ 'active-bg': $route.path == '/doc/index/item4/item4-1'}">录像</el-menu-item>
        </el-submenu>
    </el-submenu>
    <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
    </el-menu-item>-->

    <el-submenu v-for="item in routes" :key="item.path" :index="'/doc/' + item.path">
        <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{ item.name }}</span>
        </template>
        <!-- 只有二级菜单 -->
        <el-menu-item v-for="child in item.children" :key="child.path" v-if="!child.children" :index="'/doc/' + child.path" 
        :class="{ 'active-bg': $route.path == '/doc/' + child.path }">
            {{ child.name }}
        </el-menu-item>
        <!-- 存在三级菜单 -->
        <el-submenu v-for="child in item.children" :key="child.path" v-if="child.children" :index="'/doc/' + child.path">
            <template slot="title">{{ child.name }}</template>
            <el-menu-item v-for="grandChild in child.children" :key="grandChild.path" :index="'/doc/' + grandChild.path"
            :class="{ 'active-bg': $route.path == '/doc/' + grandChild.path }">
                {{ grandChild.name }}
            </el-menu-item>
        </el-submenu>
    </el-submenu>

</el-menu>
</template>


<script>
import { mapState } from 'Vuex'
export default {
    data () {
        return {
            isroute: true,
            unique: true
        }
    },
    computed: {
        ...mapState ({
            routes: state => state.configRoutes.configRoutes
        }),
    },
    methods: {

    },
    mounted () {
        
    }
}
</script>
<style lang='less'>
 .el-submenu__title:hover {
    // background-color: #b6cae1 !important;
}
</style>

<style scoped>
.el-menu {
    border: none;
}
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

