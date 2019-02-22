<template>
<div class="form-container">
    <el-form ref="form" label-position="left" :rules="rules" :model="form" label-width="150px">
        <el-form-item>
            <p style="position:relative;left:-150px;font-size:26px;border-left:5px solid #56a9ff;padding-left:20px;line-height:30px"> 合作伙伴信息</p>
        </el-form-item>
        <el-form-item label="单位名称：" prop="componyName">
            <el-input v-model="form.componyName" placeholder="请输入单位名称"></el-input>
        </el-form-item>
        <el-form-item label="对接人姓名：" prop="peopleName">
            <el-input v-model="form.peopleName" placeholder="请输入对接人姓名"></el-input>
        </el-form-item>
        <el-form-item label="单位类型(多选)" class="is-required">
            <el-checkbox-group v-model="form.componyType">
                <el-checkbox label="第三方云平台" name="componyType"></el-checkbox>
                <el-checkbox label="第三方视频监控平台" name="componyType"></el-checkbox>
                <el-checkbox label="算法提供商" name="componyType"></el-checkbox>
                <el-checkbox label="硬件服务商" name="componyType"></el-checkbox>
                <el-checkbox label="软件服务商" name="componyType"></el-checkbox>
                <el-checkbox label="集成商" name="componyType"></el-checkbox>
                <el-checkbox label="其他" name="componyType"></el-checkbox>
            </el-checkbox-group>
        </el-form-item>
        <el-form-item label="岗位(多选)" class="is-required">
            <el-checkbox-group v-model="form.jobType">
                <el-checkbox label="技术" name="jobType"></el-checkbox>
                <el-checkbox label="销售" name="jobType"></el-checkbox>
                <el-checkbox label="售前" name="jobType"></el-checkbox>
                <el-checkbox label="售后" name="jobType"></el-checkbox>
                <el-checkbox label="解决方案" name="jobType"></el-checkbox>
                <el-checkbox label="其他" name="jobType"></el-checkbox>
            </el-checkbox-group>
        </el-form-item>
        <el-form-item label="合作范围：" prop="coopRange">
            <el-input type="textarea" rows="4" v-model="form.coopRange" placeholder="从(解决方案/产品/技术难度)方面填写"></el-input>
        </el-form-item>
        <el-form-item label="合作行业：" prop="coopTrade">
            <el-input v-model="form.coopTrade" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="潜在合作项目：" prop="coopProject">
            <el-input v-model="form.coopProject" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="客户界面">
            <el-checkbox-group v-model="form.interface">
                <el-checkbox label="大华界面"></el-checkbox>
                <el-checkbox label="合作伙伴"></el-checkbox>
                <el-checkbox label="其他"></el-checkbox>
            </el-checkbox-group>
        </el-form-item>
        <el-form-item label="重要程度" class="is-required">
            <el-radio-group v-model="form.important">
                <el-radio label="非常重要"></el-radio>
                <el-radio label="重要"></el-radio>
                <el-radio label="一般"></el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item>
            <p style="position:relative;left:-150px;font-size:26px;border-left:5px solid #56a9ff;padding-left:20px;line-height:30px"> 大华对接人员信息</p>
        </el-form-item>
        <el-form-item label="所属区域：" prop="area">
            <el-input v-model="form.area" placeholder="请输入区域名称"></el-input>
        </el-form-item>
        <el-form-item label="对接人姓名" prop="peopleName2">
            <el-input v-model="form.peopleName2" placeholder="请输入对接人姓名"></el-input>
        </el-form-item>
        <el-form-item label="对接人工号" prop="jobNumber">
            <el-input v-model="form.jobNumber" placeholder="请输入对接人工号"></el-input>
        </el-form-item>
        <el-form-item label="所属行业线" class="is-required">
            <el-checkbox-group v-model="form.tradeType">
                <el-checkbox label="智慧公安" name="tradeType"></el-checkbox>
                <el-checkbox label="智慧交通" name="tradeType"></el-checkbox>
                <el-checkbox label="智慧楼宇" name="tradeType"></el-checkbox>
                <el-checkbox label="智慧金融" name="tradeType"></el-checkbox>
                <el-checkbox label="智慧教育" name="tradeType"></el-checkbox>
                <el-checkbox label="智慧医疗" name="tradeType"></el-checkbox>
                <el-checkbox label="司法" name="tradeType"></el-checkbox>
                <el-checkbox label="其他" name="tradeType"></el-checkbox>
            </el-checkbox-group>
        </el-form-item>
        <el-form-item label="岗位(多选)" class="is-required">
            <el-checkbox-group v-model="form.jobType2">
                <el-checkbox label="技术" name="jobType2"></el-checkbox>
                <el-checkbox label="销售" name="jobType2"></el-checkbox>
                <el-checkbox label="售前" name="jobType2"></el-checkbox>
                <el-checkbox label="售后" name="jobType2"></el-checkbox>
                <el-checkbox label="解决方案" name="jobType2"></el-checkbox>
                <el-checkbox label="其他" name="jobType2"></el-checkbox>
            </el-checkbox-group>
        </el-form-item>
        <el-form-item>
            <p style="position:relative;left:-150px;font-size:26px;border-left:5px solid #56a9ff;padding-left:20px;line-height:30px"> 申请人信息</p>
        </el-form-item>
        <el-form-item label="申请人姓名：" prop="userName">
            <el-input v-model="form.userName" placeholder="请输入申请人姓名"></el-input>
        </el-form-item>
        <el-form-item label="申请人联系方式：" prop="userContact">
            <el-input v-model="form.userContact" placeholder="请输入申请人联系方式"></el-input>
        </el-form-item>
        <!-- <el-form-item label="问题分类：">
            <el-select v-model="form.type" placeholder="请选择问题类型">
                <el-option label="售前咨询" value="售前咨询"></el-option>
                <el-option label="技术支持" value="技术支持"></el-option>
                <el-option label="其他需求" value="其他需求"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="问题描述" prop="desc">
            <el-input type="textarea" rows="4" v-model="form.desc"></el-input>
        </el-form-item> -->
        <el-form-item label="验证码：" class="verifition is-required" prop="verify">
            <el-input v-model="form.verify" width="50"></el-input>
            <div class="verifition-pic">
                <canvas id="canvas" v-verifition="getVerify"></canvas>
            </div>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('form')">提交申请</el-button>
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
        var validPhone = (rule, value, callback) => {
            var phoneReg = /^1[34578]\d{9}$/;
            if(phoneReg.test(value)) {
                callback();
            } else {
                callback(new Error('手机格式有误'))
            }
        }
        var validEmail = (rule, value, callback) => {
            var phoneReg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
            if(phoneReg.test(value)) {
                callback();
            } else {
                callback(new Error('邮箱格式有误'))
            }
        }
        return {
            form: {
                //合作伙伴信息
                componyName: '', //单位名称
                peopleName: '',   //对接人姓名
                componyType: [],   //单位类型(多选)
                jobType: [],   //岗位(多选)
                coopRange: '',   //合作范围
                coopTrade: '',   //合作行业
                coopProject: '',   //潜在合作项目
                interface: [],   //客户界面(多选)
                important: '重要',   //重要程度(单选)
                //大华对接人员信息
                area: '',   //所属区域
                peopleName2: '',   //对接人姓名
                jobNumber: '',   //对接人工号
                tradeType: [],   //所属行业线(多选)
                jobType2: [],   //岗位(多选)
                //申请人信息
                userName: '',   //申请人姓名
                userContact: '',   //申请人联系方式
            },
            verify: '',
            rules: {
                componyName: [
                    {required: true, message: '请输入公司姓名', trigger: 'blur'},
                    {min: 1, max: 30, message: '长度在1-30个字符', trigger: 'blur'}
                ],
                peopleName: [
                    {required: true, message: '请输入对接人姓名', trigger: 'blur'},
                    {min: 1, max: 30, message: '长度在1-30个字符', trigger: 'blur'}
                ],
                coopRange: [
                    {required: true, message: '请输入合作范围', trigger: 'blur'},
                    {min: 1, max: 256, message: '长度在1-256个字符', trigger: 'blur'}
                ],
                coopTrade: [
                    {required: true, message: '请输入合作行业', trigger: 'blur'},
                    {min: 1, max: 256, message: '长度在1-256个字符', trigger: 'blur'}
                ],
                coopProject: [
                    {required: false, message: '请输入潜在合作项目', trigger: 'blur'},
                    {min: 1, max: 256, message: '长度在1-256个字符', trigger: 'blur'}
                ],
                area: [
                    {required: true, message: '请输入所属区域', trigger: 'blur'},
                    {min: 1, max: 30, message: '长度在1-30个字符', trigger: 'blur'}
                ],
                peopleName2: [
                    {required: true, message: '请输入对接人姓名', trigger: 'blur'},
                    {min: 1, max: 30, message: '长度在1-30个字符', trigger: 'blur'}
                ],
                jobNumber: [
                    {required: true, message: '请输入对接人工号', trigger: 'blur'},
                    {min: 1, max: 30, message: '长度在1-30个字符', trigger: 'blur'}
                ],
                userName: [
                    {required: true, message: '请输入申请人姓名', trigger: 'blur'},
                    {min: 1, max: 30, message: '长度在1-30个字符', trigger: 'blur'}
                ],
                userContact: [
                    {required: true, message: '请输入申请人联系方式', trigger: 'blur'},
                    {min: 1, max: 30, message: '长度在1-30个字符', trigger: 'blur'},
                ],
                verify: [
                    {validator: validVerify, trigger: 'blur'}
                ]
            },
        }
    },
    methods: {
        clearForm () {
            this.form = {
                //合作伙伴信息
                componyName: '', //单位名称
                peopleName: '',   //对接人姓名
                componyType: [],   //单位类型(多选)
                jobType: [],   //岗位(多选)
                coopRange: '',   //合作范围
                coopTrade: '',   //合作行业
                coopProject: '',   //潜在合作项目
                interface: [],   //客户界面(多选)
                important: '重要',   //重要程度(单选)
                //大华对接人员信息
                area: '',   //所属区域
                peopleName2: '',   //对接人姓名
                jobNumber: '',   //对接人工号
                tradeType: [],   //所属行业线(多选)
                jobType2: [],   //岗位(多选)
                //申请人信息
                userName: '',   //申请人姓名
                userContact: '',   //申请人联系方式
            }
            this.getVerify({
                dom: document.getElementById('canvas'),
                width: "230",
                height: "40",
                type: "blend"
            })
        },
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
                url: 'Inquiry',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
                    "companyName": obj.componyName,
                    "peopleName": obj.peopleName,
                    "companyType": obj.componyType,
                    "jobType": obj.jobType,
                    "coopRange": obj.coopRange,
                    "coopTrade": obj.coopTrade,
                    "coopProject": obj.coopProject,
                    "dahuaInterface": obj.interface,
                    "important": obj.important,
                    "area": obj.area,
                    "peopleName2": obj.peopleName2,
                    "jobNumber": obj.jobNumber,
                    "tradeType": obj.tradeType,
                    "jobType2": obj.jobType2,
                    "userName": obj.userName,
                    "userContact": obj.userContact
                }
            }).then(response => {
                if(response.status != 200) throw new Error('ajax error')
                this.$notify({
                    title: '提交成功',
                    message: 'response.data.message',
                    type: 'success',
                    offset: 100
                });
                this.clearForm();
            }).catch(e => {
                this.$notify.error({
                    title: '404错误',
                    message: e,
                    offset: 100
                });
                this.clearForm();
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
                ctx.shadowOffsetX = this.randomNum(-2, 2);
                ctx.shadowOffsetY = this.randomNum(-2, 2);
                ctx.shadowBlur = this.randomNum(-2, 2);
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
                    width: "230",
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
    width: 60%;
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
    width:900px;
    margin: 50px auto;
    padding-right: 150px;
}
.el-select, .el-button {
    width: 100%;
}
.el-form-item {
    text-align: left;
}
.el-form-item .el-checkbox {
    margin: 0;
    width: 180px;
}
.el-form-item .el-radio {
    width: 180px;
    padding: 10px 0;
}
.el-radio+.el-radio {
    margin: 0;
}
</style>
