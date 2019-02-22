<template>
<div>
    <div class="nav-bar">
        <div>
            <p>
                <i class="logo"></i>
                <span>大华视频物联能力开放平台</span>
            </p>
            <navbar></navbar>
            <!-- <a href="http://10.35.125.21:8080/admin/#/login" target="_blank">登录</a> -->
        </div>
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
        // console.log(this.$router)
    },
    methods: {
        ...mapActions({
            getDocRoutes: 'configRoutes/getDocRoutes',
            printfm: 'configRoutes/printfm'
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
    width: 100%;
    background-color: #2b333f;
    &>div {
        position: relative;
        width: 1200px;
        margin: 0 auto;
        padding-left: 330px;
        &>p {
            position: absolute;
            left: 0;
            margin: 0;
            width:330px;
            line-height: 60px;
            height: 60px;
            i {
                display: inline-block;
                position: absolute;
                left: 0;
                width: 60px;
                height: 60px;
                vertical-align: middle;
                background-image: url('../../assets/img/logo.png');
                background-repeat: no-repeat;
                background-position: 9px 9px;
                background-size: 42px 42px;
            }
            span {
                position: absolute;
                left: 0;
                font-size: 18px;
                color: #fff;
                padding-left: 60px;
            }
        }
        &>a {
            position: absolute;
            right: 0; top: 0;
            color: #eee;
            line-height: 60px;
            text-decoration: none;
            cursor: pointer;
        }
        &>a:hover {
            color: #409EFF;
        }
    }
}
.fade-enter-active, .fade-leave-active {
    transition: all .3s;
}
.fade-enter, .fade-leave-to {
    transform: translateX(-10px);
    opacity: 0;
}
</style>
