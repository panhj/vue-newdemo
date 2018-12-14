<template>
    <div>
        <List title="问题列表" titleLeft="公告标题" titleRight="公告时间">
            <listItem v-for="item in list"
            :key = item.url
            :id = item.id
            :msg = item.msg
            :time = item.time
            :url = item.url
            @toDetail="toDetail"
            ></listItem>
        </List>
    </div>
</template>

<script>
import List from '../components/List.vue'
import listItem from '../components/listItem.vue'
export default {
    components: {
        List,
        listItem,
    },
    data () {
        return {
            currentPage: 1,
            total:50,
            list: [
                {id:0,msg:'demo下载',time:'下载',url:"http://10.35.125.21:8999/openeco/demo"},
            ]
        }
    },
    methods: {
        getDownload () {
            this.$axios({
                method: 'get',
                url: 'demo/toc',
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then(response => {
                if(response.status != 200) throw new Error('ajax error')
                let list = response.data.data.catelog;
                for(let item of list) {
                    this.list.push({
                        id: item.path,
                        msg: item.title,
                        time: '下载',
                        url: item.path
                    })
                }
            }).catch(e => {
                console.error(e);
            })
        }
    },
    mounted () {
        this.getDownload();
    }
}
</script>

<style scoped>
.pagination {
    text-align: right;
    margin-top: 25px;
}
</style>
