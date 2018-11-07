<template>
<div class="container">
    <div class="sliderbar">
        <sliderbar></sliderbar>
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
import sliderbar from './components/siderbar'
import breadcrumb from './components/breadcrumb'

export default {
    components: {
        sliderbar,
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

<style lang="less" scoped>
.container {
    overflow: hidden;
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
    width: 250px;
    text-align: left;
    border-top: 2px solid #333;
}
</style>
