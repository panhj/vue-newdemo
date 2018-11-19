<template>
<div class="container">
    <div class="carousel">
        <el-carousel trigger="click" height="30vw" :interval="timer">
            <el-carousel-item v-for="item in 4" :key="item">
                <div class="banner-text">
                    <div class="text">
                        <h2>面向全生态</h2>
                        <p>构建物联能力开放平台、赋能生态合作伙伴</p>
                        <span>查看详情</span>
                    </div>
                </div>
            </el-carousel-item>
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
            timer: 900000
        }
    }
}
</script>
<style lang="less" scoped>
.container {
    background: #fff;
    font-size: 30px;
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
            }
        }
    }
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
