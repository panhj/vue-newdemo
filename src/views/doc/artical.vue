<template>
    <div class="content">
        <h1>this is content</h1>
        <p>{{xpath}}</p>
    </div>
</template>

<script>
export default {
    name: 'artical',
    data () {
        return {
            xpath: ''
        }
    },
    watch: {
        '$route': function(newval) {
            this.xpath = newval.path;
        }
    },
    mounted () {
         this.xpath = this.$route.path
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
</style>
