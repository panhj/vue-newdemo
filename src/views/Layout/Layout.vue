<template>
<div>
    <div class="nav-bar">
        <navbar></navbar>
    </div>
    <transition name="fade">
        <router-view class="container"/>
    </transition>
</div>
</template>

<script>
import navbar from './components/navbar'
import { mapState, mapMutations, mapActions } from 'Vuex'

export default {
    name: 'Layout',
    components: {
        navbar,
    },
    mounted () {
        // should place login
        let params = {
            url: 'http://10.35.83.214:8080/openeco/doc/toc',
        }
        // this.getDocRoutes(params).then(data => {
        //     console.log(data);
        // }).catch(e => {
        //     console.error(e);
        // })
        this.$store.dispatch('getDocRoutes', params).then(() => {
            console.log("this is then")
        });
    },
    methods: {
        ...mapActions({
            getDocRoutes: 'login/getDocRoutes',
            printfm: 'login/printfm'
        })
    }
}
</script>

<style lang="less" scoped>
.container {
    position: absolute;
    width: 100%;;
}
.nav-bar {
    padding-left: 300px;
    background-color: rgb(84, 92, 100);
}
.fade-enter-active, .fade-leave-active {
    transition: all .2s;
}
.fade-enter, .fade-leave-to {
    transform: translateX(-10px);
    opacity: 0;
}
</style>
