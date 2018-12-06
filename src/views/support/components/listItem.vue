<template>
<li @click="$emit('toDetail',id)">
    <a :href=url>{{msg}}<span class="time">{{time}}</span></a>
</li>
</template>

<script>
export default {
    name: 'List',
    props: [
        'id',
        'msg',
        'time',
        'url'
    ],
    data () {
        return {
            
        }
    },
}
</script>
<style scoped>
li {
    border-bottom: 1px solid #eee;
    list-style-type: none;
    cursor: pointer;
}
li a {
    display: inline-block;
    width: 100%;
    height: 100%;
    padding: 15px 10px;
    background-color: #fff;
    color: #555;
    box-sizing: border-box;
    text-align: left;
    text-decoration: none;
    transition: all 200ms;
}
li a:hover {
    background-color: #c9def5;
    color: #409EFF;
}
.time {
    float: right;
    color: #888;
}
</style>