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
                <el-option label="售前咨询" value="售前咨询"></el-option>
                <el-option label="技术支持" value="技术支持"></el-option>
                <el-option label="其他需求" value="其他需求"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="问题描述" prop="desc">
            <el-input type="textarea" rows="4" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item label="验证码：" class="verifition" prop="verify">
            <el-input v-model="form.verify" width="50"></el-input>
            <div  class="verifition-pic">
                <canvas v-verifition="getVerify"></canvas>
            </div>
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
        var validVerify = (rule, value, callback) => {
            if(value == '') {
                callback(new Error('请输入验证码'))
            } else if(!this.isVerify(value)) {
                callback(new Error('验证码错误'))
            } else {
                callback();
            }
        }
        return {
            form: {
                name: '',
                phone: '',
                email: '',
                company: '',
                type: '售前咨询',
                desc: '',
                verify: ''
            },
            verify: '',
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
                verify: [
                    {validator: validVerify, trigger: 'blur'}
                ]
            },
        }
    },
    methods: {
        submitForm (formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.postForm(this.form);
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        postForm (obj) {
            this.$axios({
                method: 'post',
                url: '/api/openeco/Inquiry',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
                    "name": obj.name,
                    "tel": obj.phone,
                    "mail": obj.email,
                    "company": obj.company,
                    "category": obj.type,
                    "description": obj.desc
                }
            }).then(response => {
                if(response.status != 200) throw new Error('ajax error')
                alert(response.data.message);
            }).catch(e => {
                console.error(e);
            })
        },
        isVerify (value) {
            return value.toLowerCase() == this.verify.toLowerCase()
        },
        randomNum (min, max) {
            return Math.floor(Math.random() * (max - min) + min);
        },
        randomColor (min, max) {
            let r = this.randomNum(min, max);
            let g = this.randomNum(min, max);
            let b = this.randomNum(min, max);
            return "rgb(" + r + "," + g + "," + b + ")";
        },
        getVerify (opt) {
            this.verify = "";
            let canvas = opt.dom;
            canvas.style.cursor = "pointer";
            canvas.width = opt.width;
            canvas.height = opt.height;
            let ctx = canvas.getContext('2d');
            ctx.textBaseline = "middle";

            ctx.fillStyle = this.randomColor(180, 240);
            ctx.fillRect(0, 0, opt.width, opt.height);
            opt.numArr = "0,1,2,3,4,5,6,7,8,9".split(",");
            opt.letterArr = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z".split(',');
            let txtArr = [];
            if(opt.type == "blend") { //判断验证码类型
                txtArr = opt.numArr.concat(opt.letterArr);
            } else if(opt.type == "number") {
                txtArr = opt.numArr;
            } else {
                txtArr = opt.letterArr;
            }

            for(let i = 1; i <= 4; i++) {
                let txt = txtArr[this.randomNum(0, txtArr.length)];
                this.verify += txt;
                ctx.font = this.randomNum(opt.height/2, opt.height) + 'px SimHei'; //随机生成字体大小
                ctx.fillStyle = this.randomColor(50, 160); //随机生成字体颜色        
                ctx.shadowOffsetX = this.randomNum(-3, 3);
                ctx.shadowOffsetY = this.randomNum(-3, 3);
                ctx.shadowBlur = this.randomNum(-3, 3);
                ctx.shadowColor = "rgba(0, 0, 0, 0.3)";
                let x = opt.width / 5 * i;
                let y = opt.height / 2;
                let deg = this.randomNum(-30, 30);
                /**设置旋转角度和坐标原点**/
                ctx.translate(x, y);
                ctx.rotate(deg * Math.PI / 180);
                ctx.fillText(txt, 0, 0);
                /**恢复旋转角度和坐标原点**/
                ctx.rotate(-deg * Math.PI / 180);
                ctx.translate(-x, -y);
            }
            /**绘制干扰线**/
            for(let i = 0; i < 4; i++) {
                ctx.strokeStyle = this.randomColor(40, 180);
                ctx.beginPath();
                ctx.moveTo(this.randomNum(0, opt.width), this.randomNum(0, opt.height));
                ctx.lineTo(this.randomNum(0, opt.width), this.randomNum(0, opt.height));
                ctx.stroke();
            }
            /**绘制干扰点**/
            for(let i = 0; i < opt.width/4; i++) {
                ctx.fillStyle = this.randomColor(0, 255);
                ctx.beginPath();
                ctx.arc(this.randomNum(0, opt.width), this.randomNum(0, opt.height), 1, 0, 2 * Math.PI);
                ctx.fill();
            }
        }
    },
    directives: {
        verifition: {
            bind(el, binding) {
                let opt = {
                    dom: el,
                    width: "165",
                    height: "40",
                    type: "blend"
                }
                binding.value(opt);
                el.onclick = () => {
                    binding.value(opt);
                }
            }
        }
    }
}
</script>

<style>

.verifition>div {
    text-align: left;
}
.verifition>div>div {
    width: 50%;
}
.verifition-pic {
    position: absolute;
    height: 40px;
    width: 50%;
    padding-left: 10px;
    display: inline-block;
}
</style>


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
