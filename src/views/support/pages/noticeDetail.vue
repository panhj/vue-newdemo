<template>
    <div class="content" v-html="contents"></div>
</template>

<script>

import { mapState, mapMutations, mapActions } from 'Vuex'
export default {
    data () {
        return {
            ...mapState({
                id: 'notice/nId'
            }),
            contents: ''
        }
    },
    mounted () {
        this.$axios({
            method: 'get',
            url: 'Update/content/' + this.$root.$data.nId,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            this.contents = response.data.data;
        }).catch(e => {
            console.error(e);
        })
    }
}
</script>

<style scoped>
.content {
    text-align: left;
}
</style>

