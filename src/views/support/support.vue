<template>
<div class="container">
    <div class="sidebar">
        <sidebar></sidebar>
    </div>
    <div class="content-container">
        <div class="content-page">
            <breadcrumb class="breadcrumb"></breadcrumb>
            <router-view></router-view>
        </div>
    </div>
</div>
</template>

<script>
import sidebar from './components/sidebar'
import breadcrumb from '../doc/components/breadcrumb'

export default {
    components: {
        sidebar,
        breadcrumb
    },
    data () {
        return {
            
        }
    },
    watch: {
        
    },
    created () {
        
    }

}
</script>

<style scoped>
.sidebar {
    height: 100%;
    min-height: calc(100vh - 60px);
}
</style>

<style lang="less" scoped>
.container {
    .content-container {
        width: 100%;
        padding-left: 250px;
        .content-page {
            padding:  30px 50px;
            .breadcrumb {
                height: 30px;
            }
        }
    }
}
.sidebar {
    position: absolute;
    float: left;
    width: 250px;
    text-align: left;
    background-color: #f5f6f7;
    box-shadow: 0px 0px 40px 0px #0004;
}
</style>