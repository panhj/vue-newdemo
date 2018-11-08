<template>
<div class="form-container">
    <el-form ref="form" :rules="rules" :model="form" label-width="100px">
        <el-form-item label="姓名：" prop="name">
            <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item label="电话：" prop="phone">
            <el-input v-model="form.phone" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item label="邮箱：" prop="email">
            <el-input v-model="form.email" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item label="公司名称：" prop="company">
            <el-input v-model="form.company" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item label="问题分类：">
            <el-select v-model="form.type" placeholder="请选择问题类型">
                <el-option label="售前咨询" value="0"></el-option>
                <el-option label="技术支持" value="1"></el-option>
                <el-option label="其他需求" value="2"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="问题描述" prop="desc">
            <el-input type="textarea" rows="4" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('form')">提交</el-button>
        </el-form-item>
    </el-form>
</div>
</template>

<script>
export default {
    data () {
        return {
            form: {
                name: '',
                phone: '',
                email: '',
                company: '',
                type: '0',
                desc: ''
            },
            rules: {
                name: [
                    {required: true, message: '请输入姓名', trigger: 'blur'},
                    {min: 1, max: 30, message: '长度在1-30个字符', trigger: 'blur'}
                ],
                phone: [
                    {required: true, message: '不能为空', trigger: 'blur'},
                    {min: 1, max: 30, message: '长度在1-30个字符', trigger: 'blur'}
                ],
                email: [
                    {required: true, message: '不能为空', trigger: 'blur'},
                    {min: 1, max: 30, message: '长度在1-30个字符', trigger: 'blur'}
                ],
                company: [
                    {required: true, message: '不能为空', trigger: 'blur'},
                    {min: 1, max: 30, message: '长度在1-30个字符', trigger: 'blur'}
                ],
            }
        }
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        }
    }
}
</script>

<style scoped>
.form-container {
    width:600px;
    margin: 50px auto;
    padding-right: 150px;
}
.el-select, .el-button {
    width: 100%;
}
</style>
