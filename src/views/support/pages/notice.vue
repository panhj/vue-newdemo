<template>
    <div>
        <List title="问题列表" titleLeft="公告标题" titleRight="公告时间">
            <listItem v-for="item in list"
            :key = item.id
            :id = item.id
            :msg = item.msg
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
            total:50,
            list: [
                {id:0,msg:'aaa',type:'123',time:'2018-12-06'},
                {id:1,msg:'aaa',type:'123',time:'2018-12-06'},
                {id:2,msg:'aaa',type:'123',time:'2018-12-06'},
                {id:3,msg:'aaa',type:'123',time:'2018-12-06'},
                {id:4,msg:'aaa',type:'123',time:'2018-12-06'},
                {id:5,msg:'aaa',type:'123',time:'2018-12-06'},
            ]
        }
    },
    methods: {
        toDetail: function (id) {
            
        },
        getPage: function () {

        }
    }
}
</script>

<style scoped>
.pagination {
    text-align: right;
    margin-top: 25px;
}
</style>
