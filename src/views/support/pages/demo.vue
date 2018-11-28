<template>
    <div class="container">
        <a :href="demoUrl">demo下载</a>
    </div>
</template>

<script>
export default {
    data () {
        return {
            demoUrl: "http://10.35.125.21:8999/openeco/demo"
        }
    },
    methods: {
        downloadDemo () {
            this.$axios({
                method: 'get',
                url: '/demo',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                console.log(response.data)
            }).catch(e => {

            })
        }
    }
}
</script>