<template>
    <div id="app">
        <transition name="rfade">
            <router-view/>
        </transition>
    </div>
</template>

<script>
import login from "./views/login/login";
import Layout from "./views/Layout/Layout";
import doc from "./views/doc/doc";
import toArticle from "./views/doc/toArticle";
import article from './views/doc/article';

import { mapState, mapMutations, mapActions } from 'Vuex'

export default {
    name: "app",
    data () {
        return {

        }
    },
    mounted () {
        let params = {
            url: '/api/openeco/Doc/toc',
        }
        this.$store.dispatch('getDocRoutes', params).then(configRoutes => {
            this.setDocRoutes(configRoutes);
        }).catch((e) => {
            
        });
    },
    methods: {
        ...mapActions({
            getDocRoutes: 'configRoutes/getDocRoutes',
            printfm: 'configRoutes/printfm'
        }),
        setDocRoutes (configRoutes) {
            const docRouter = [{
                path: '/doc',
                meta: { 'title': '产品服务' },
                component: Layout,
                redirect: '/doc/' + configRoutes[0].path,
                children: []
            }]
            for (let value of configRoutes) {
                let firstObj = {
                    path: '/doc/' + value.path,
                    meta: { title: value.name },
                    component: doc,
                };
                if (value.children) {
                    firstObj.children = [];
                    firstObj.redirect = '/doc/' + value.children[0].path;
                    for (let child of value.children) {
                        let secondObj = {
                            path: '/doc/' + child.path,
                            meta: { title: child.name }
                        }
                        if (child.children) {
                            secondObj.redirect = '/doc/' + child.children[0].path;
                            secondObj.component = toArticle;
                            secondObj.children = [];
                            for (let secondChild of child.children) {
                                secondObj.children.push({
                                    path: '/doc/' + secondChild.path,
                                    meta: { title: secondChild.name },
                                    component: article
                                })
                            }
                        } else {
                            secondObj.component = article
                        }
                        firstObj.children.push(secondObj);
                    }
                }
                docRouter[0].children.push(firstObj);
            }
            this.$router.addRoutes(docRouter);
        }
    }
}; 
</script>

<style>
#app {
     font-family: "Avenir", Helvetica, Arial, sans-serif;
     -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
     color: #2c3e50;
     /* margin-top: 60px; */
}
html,
body,
div {
     margin: 0;
    padding: 0;
     box-sizing: border-box;
}
.rfade-enter-active, .rfade-leave-active {
    transition: all .3s;
}
.rfade-enter, .rfade-leave-to {
    opacity: 0;
}
</style>
