<template>
<div>
    <div class="nav-bar">
        <navbar></navbar>
    </div>
    <router-view/>
</div>
</template>

<script>
import navbar from './components/navbar'

export default {
    name: 'Layout',
    components: {
        navbar,
    }
}
</script>

<style lang="less" scoped>
.nav-bar {
    padding-left: 300px;
    background-color: rgb(84, 92, 100);
}
</style>
