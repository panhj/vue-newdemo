<template>
<div class="container">
    <div class="sliderbar">
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
import breadcrumb from './components/breadcrumb'

export default {
    components: {
        sidebar,
        breadcrumb
    },
    data () {
        return {
            noChild: true,
        }
    },
    watch: {
        
    },
    created () {
        
    }

}
</script>

<style scoped>
.sliderbar, .content-page{
    height: calc(100vh - 60px);
    overflow: auto;
}
.sliderbar::-webkit-scrollbar  
{  
    width: 0px; 
    height: 0px;   
    background-color: #fff;  
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
.sliderbar {
    float: left;
    position: absolute;
    width: 250px;
    background-color: #f5f6f7;
    text-align: left;
    box-shadow: 0px 0px 40px 0px #0004;
}
</style>
