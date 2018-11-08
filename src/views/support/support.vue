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
    border-top: 1px solid #333;
}
</style>