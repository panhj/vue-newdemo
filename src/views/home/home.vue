<template>
<div class="container">
    <div class="carousel">
        <el-carousel trigger="click" height="28vw" :interval="timer">
            <el-carousel-item class="img-bg banner1">
                <div class="banner-text">
                    <div class="text">
                        <h2>面向全生态</h2>
                        <p>构建视频云开放平台、赋能生态合作伙伴</p>
                        <span>查看详情</span>
                    </div>
                </div>
            </el-carousel-item>
            <el-carousel-item class="img-bg banner2">
                <div class="banner-text">
                    <div class="text">
                        <h2>面向全感知</h2>
                        <p>支持百万级设备的接入，汇聚多元物联感知数据</p>
                        <span>查看详情</span>
                    </div>
                </div></el-carousel-item>
            <el-carousel-item class="img-bg banner3">
                <div class="banner-text">
                    <div class="text">
                        <h2>面向全智能</h2>
                        <p>形成全网感知的智能化协同，面向业务使能业务智能</p>
                        <span>查看详情</span>
                    </div>
                </div></el-carousel-item>
            <el-carousel-item class="img-bg banner4">
                <div class="banner-text">
                    <div class="text">
                        <h2>面向全计算</h2>
                        <p>实现前后端计算的融合调度，算力和算法的全网络按需部署与调度</p>
                        <span>查看详情</span>
                    </div>
                </div></el-carousel-item>
        </el-carousel>
    </div>
    <section1></section1>
    <section2></section2>
</div>
</template>

<script>
import section1 from './components/section1'
import section2 from './components/section2'
export default {
    components: {
        section1,
        section2
    },
    data () {
        return {
            timer: 5000
        }
    }
}
</script>
<style lang="less" scoped>
.container {
    background: #fff;
    font-size: 30px;
    .img-bg {
        background-repeat: no-repeat;
        background-size: 100vw 28vw;
    }
    .banner-text {
        width: 1200px;
        height: 100%;
        margin: 0 auto;
        text-align: left;
        color: #fff;
        .text {
            position: absolute;
            top: 20%;
            p {
                font-size: 22px;
                margin-bottom: 30px;
            }
            span {
                font-size: 18px;
                padding: 8px 50px;
                border: 1px solid #fff;
                cursor: pointer;
                box-sizing: border-box;
                transition: all 300ms;
            }
            span:hover {
                background-color: #fff;
                color: #475669;
            }
        }
    }
}
.banner1 {
    background-image: url('../../assets/img/banner.png')
}
.banner2 {
    background-image: url('../../assets/img/calc.png')
}
.banner3 {
    background-image: url('../../assets/img/allai.png')
}
.banner4 {
    background-image: url('../../assets/img/feel.png')
}
.el-carousel__container {
    min-width: 1000px;
    min-height: 250px;
}
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>
