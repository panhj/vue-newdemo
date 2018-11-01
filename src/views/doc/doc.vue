<template>
<div>
    <div class="sliderbar">
        <sliderbar></sliderbar>
    </div>
    <div class="content">
        <a href="#/home">this a link!</a>
    </div>
</div>
</template>

<script>
import sliderbar from './components/siderbar'
export default {
    components: {
        sliderbar,
    }
}
</script>

<style lang="less" scoped>
.sliderbar {
    float: left;
    width: 250px;
    text-align: left;
    border-top: 2px solid #333;
}
</style>
