<template>
<div>
    <p class="title"><b>{{title}}</b></p>
    <p class="listTitle">{{titleLeft}}<span>{{titleRight}}</span></p>
    <ul>
        <slot></slot>
    </ul>
</div>
</template>

<script>
export default {
    name: 'List',
    props: [
        'title',
        'titleLeft',
        'titleRight'
    ],
    data () {
        return {
            
        }
    },
}
</script>
<style scoped>
.title {
    font-size: 18px;
    text-align: left;
    padding-bottom: 10px;
    border-bottom: 1px solid #ddd;
}
.listTitle {
    text-align: left;
    background-color: #f2f2f2;
    color: #aaa;
    padding: 8px 10px;
}
.listTitle span {
    float: right;
}
ul {
    padding: 0;
    margin: 0;
}
</style>
