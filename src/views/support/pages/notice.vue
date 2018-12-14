<template>
    <div>
        <List title="问题列表" titleLeft="公告标题" titleRight="公告时间">
            <listItem v-for="item in dataList"
            :key = item.path
            :id = item.path
            :msg = item.title
            :time = item.time
            url="javascript:;"
            @toDetail="toDetail"
            ></listItem>
        </List>
    </div>
</template>

<script>
import List from '../components/List.vue'
import listItem from '../components/listItem.vue'
import { mapState, mapMutations, mapActions } from 'Vuex'
export default {
    components: {
        List,
        listItem,
    },
    data () {
        return {
            currentPage: 1,
            total:10,
            dataList: [
            ]
        }
    },
    methods: {
        ...mapMutations({
            setId: 'notice/setId'
        }),
        toDetail: function (id) {
            console.log(id);
            // this.setId(id)
            this.$root.$data.nId = id;
            this.$router.push('/service/notice/detail');
        },
        getList () {
            this.$axios({
                method: 'get',
                url: 'Update/toc',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                this.dataList = response.data.data.catelog;
            }).catch(e => {
                console.error(e);
            })
        }
    },
    mounted () {
        this.getList();
    }
}
</script>

<style scoped>
.pagination {
    text-align: right;
    margin-top: 25px;
}
</style>
