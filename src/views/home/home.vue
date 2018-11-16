<template>
<div class="container">
    <div class="carousel">
        <el-carousel trigger="click" height="25vw" interval=80000>
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
    <div class="section2">
        <h4>服务能力</h4>
        <p>提供视频基础能力、AI智能能力、大数据能力，与合作伙伴一起创造客户价值</p>
        <div class="serve-pannel">
            <div>
                <div></div>
                <p>视频基础服务</p>
                <p>提供稳定的视频监控、录像点播服务</p>
                <span>了解详情</span>
            </div>
            <div>
                <div></div>
                <p>视频基础服务</p>
                <p>提供稳定的视频监控、录像点播服务</p>
                <span>了解详情</span>
            </div>
            <div>
                <div></div>
                <p>视频基础服务</p>
                <p>提供稳定的视频监控、录像点播服务</p>
                <span>了解详情</span>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>
<style lang="less" scoped>
.container {
    background: #fff;
    font-size: 30px;
    .banner-text {
        width: 50%;
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
    .section2 {
        width: 1260px;
        height: 600px;
        margin: 0 auto;
        &>p {
            font-size: 20px;
            margin: 0 0 50px 0;
        }
        .serve-pannel {
            width: 100%;
            height: 100%;
            border: 1px solid #eee;
            &>div {
                float: left;
                width: 419px;
                height: 100%;
                border-right: 1px solid #eee;
                &>div {
                    width: 160px;
                    height: 160px;
                    background-color: #eee;
                    margin: 100px auto 0 auto;
                }
                p:nth-child(2) {
                    margin-top: 100px;
                }
                p:nth-child(3) {
                    font-size: 18px;
                    margin-bottom: 50px;
                }
                span {
                    font-size: 20px;
                    border: 1px solid #8ae;
                    padding: 12px 30px;
                    color: #8ae;
                    border-radius: 5px;
                }
            }
            &>div:nth-child(3) {
                border-right: none;
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
