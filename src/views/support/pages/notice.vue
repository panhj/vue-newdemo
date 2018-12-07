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
            <div class="pagination">
                <el-pagination
                background
                layout="total, prev, pager, next"
                :total="total"
                @current-change="getPage">
                </el-pagination>
            </div>
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
            total:30,
            dataList: [
            ]
        }
    },
    methods: {
        toDetail: function (id) {
            this.$axios({
                method: 'get',
                url: 'Update/content/' + id,
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                alert('详情页还没做！' + response.data.data);
            }).catch(e => {
                console.error(e);
            })
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
        },
        getPage (p) {
            alert('还没做，当前页：'+p)
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
