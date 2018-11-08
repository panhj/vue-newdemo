<template>
<div class="content">
    <transition name="fadeup">
        <p v-show="loading" class="loading"><i class="el-icon-loading"></i></p>
    </transition>
    <transition name="fade">
        <div v-if="content">
            <p>{{content}}</p>
        </div>
    </transition>
</div>
</template>

<script>
export default {
    data () {
        return {
            content: '',
            loading: true,
        }
    },
    watch: {
        '$route': function(newval) {
            this.getArtical(this.$route.meta.title);
        }
    },
    methods: {
        getArtical (name) {
            this.loading = true;
            this.content = '';
            this.$axios({
                method: 'get',
                url: '/api/getArticle/' + name,
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                this.loading = false;
                if(response.status != 200) throw new Error('ajax error')
                this.content = response.data;
            }).catch(e => {
                this.loading = false;
                console.error(e);
            })
        }
    },
    mounted () {
         this.getArtical(this.$route.meta.title);
    },
    created () {
       
    }
}
</script>

<style lang='less' scoped>
.content {
    width: 100%;
    height: 100%;
}
.loading {
    margin: 0;
    overflow: hidden;
    height: 50px;
    i {
        font-size: 30px;
    }
}
.fadeup-leave-active {
  transition: all .6s;
}
.fadeup-enter-active {
    transition: all 0s;
}
.fadeup-enter, .fadeup-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  height: 0;
}
.fade-enter-active {
    transition: all 1.5s;
}
.fade-leave-active {
    transition: all 0s;
}
.fade-enter, .fade-leave-to {
    opacity: 0
}
</style>
