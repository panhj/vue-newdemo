<template>
<el-menu
:default-active="$route.path"
class="el-menu-vertical-demo"
@open="handleOpen"
@close="handleClose"
background-color="#545c64"
text-color="#aaa"
active-text-color="#ffd04b"
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
    </el-menu-item>
    <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
    </el-menu-item>
    <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
    </el-menu-item> -->

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
            routes: state => state.routeList
        }),
        currentPath: function () {
            
        }
    },
    methods: {
        handleOpen(key, keyPath) {
            //console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
           // console.log(key, keyPath);
        }
    }
}
</script>
<style lang='less'>
.el-menu--inline div.el-submenu__title {
    background-color: #42494f !important;
   
}
</style>

<style scoped>
.el-menu {
    border: none;
}
.el-menu>li>div>span {
    
    color: #fff !important;
}
.el-menu-item {
    background-color: #2f3438 !important;
    /* color: #999 !important; */
}
.active-bg {
    background-color: #2f3438 !important;
}
</style>

