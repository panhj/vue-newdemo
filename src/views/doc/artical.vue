<template>
<transition name="fadeup">
    <div class="content" v-show="!loading">
        <h1>this is content</h1>
        <p>{{xpath}}</p>
    </div>
</transition>
</template>

<script>
export default {
    name: 'artical',
    data () {
        return {
            xpath: '',
            loading: true,
        }
    },
    watch: {
        '$route': function(newval) {
            this.xpath = newval.path;
        }
    },
    mounted () {
         this.xpath = this.$route.path;
         this.loading = false;
    },
    created () {
       // console.log('artical created');
    }
}
</script>

<style lang='less' scoped>
.content {
    width: 100%;
    height: 100%;
    background: gray;
}
.fadeup-enter-active, .fadeup-leave-active {
  transition: all .5s;
}
.fadeup-enter, .fadeup-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(10px);
}
</style>
