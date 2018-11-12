<template>
    <div class="login-container">
        <el-form class="login-form" status-icon
         ref="loginForm" 
        :rules="rules" 
        :model="loginForm" >
            <el-form-item prop="name">
                <el-input v-model="loginForm.name"><i slot="prefix" class="iconfont icon-zhanghu"></i></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input v-model="loginForm.password"><i slot="prefix" class="iconfont icon-mima"></i></el-input>
            </el-form-item>
            <el-form-item>
                <el-button class="submit-btn" type="primary" @click="submitForm('loginForm')">SUBMIT</el-button>
                <!-- <el-button type="primary" @click="resetForm('loginForm')">SUBMIT</el-button> -->
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'Vuex'
export default {
    name: 'login',
    data () {
        return {
            loginForm: {
                name: '',
                password: ''
            },
            rules: {
                name: [
                    { required: true, message: 'username required', trigger: 'blur' },
                    { min: 3, max: 16, message: 'limit in 3-16', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: 'password required', trigger: 'blur' },
                    { min: 3, max: 16, message: 'limit in 3-16', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        ...mapActions({
            login: 'login/login'
        }),
        submitForm (formName) {
            let _this = this;
            this.$refs[formName].validate((valid) => {
                if(valid) {
                    _this.toLogin();
                } else {
                    //console.log("invalid!")
                    return false;
                }
            })
        },
        resetForm (formName) {
            this.$refs[formName].resetFields()
        },
        toLogin () {
            let params = {
                url: '/api/openeco/loginCheck',
                data: {
                    "userName": this.loginForm.name,
                    "passWord": this.loginForm.password
                }
            }
            this.$store.dispatch('login', params).then(() => {
                this.$router.push('/home');
            }).catch(e => {

            })
        }
    }
}
</script>
<style lang="less">
.login-container {
    .el-input {
        input {
            padding-left: 40px;
        }
    }
}
</style>

<style lang="less" scoped>
.login-container {
    position: absolute;
    background-color: rgb(49, 105, 138);
    width: 100%;
    height: 100%;
    .login-form {
        position: absolute;
        width: 20%;
        min-width: 100px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        .iconfont {
            font-size: 18px;
            color: #aaa;
            padding-left: 7px;
        }
    }
    .submit-btn {
        width: 100%;
    }
}
</style>