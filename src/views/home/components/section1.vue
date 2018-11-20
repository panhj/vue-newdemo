<template>
<div class="section1">
    <h4>服务能力</h4>
    <p>提供视频基础能力、AI智能能力、大数据能力，与合作伙伴一起创造客户价值</p>
    <div class="serve-pannel">
        <div>
            <div class="png-video"></div>
            <p>视频基础服务</p>
            <p>提供稳定的视频监控、录像点播服务</p>
            <span>了解详情</span>
        </div>
        <div>
            <div class="png-ai"></div>
            <p>视频基础服务</p>
            <p>提供稳定的视频监控、录像点播服务</p>
            <span>了解详情</span>
        </div>
        <div>
            <div class="png-dt"></div>
            <p>视频基础服务</p>
            <p>提供稳定的视频监控、录像点播服务</p>
            <span>了解详情</span>
        </div>
    </div>
</div>
</template>

<style lang="less" scoped>
.section1 {
    width: 1200px;
    margin: 0 auto;
    margin-bottom: 60px;
    &>h4 {
        font-weight: 300;
        margin-bottom: 25px;
        font-size: 28px;
    }
    &>p {
        font-size: 18px;
        margin: 0 0 50px 0;
        color: #a3a3a3;
    }
    .serve-pannel {
        width: 100%;
        height: 572px;
        border: 1px solid #eee;
        &>div:hover {
            background-color: #f8f8f8;
        }
        &>div {
            float: left;
            width: 399px;
            height: 100%;
            border-right: 1px solid #eee;
            transition: all 300ms;
            &>div {
                width: 160px;
                height: 160px;
                margin: 80px auto 0 auto;
                background-repeat: no-repeat;
                background-size: contain;
            }
            p:nth-child(2) {
                margin-top: 80px;
                font-size: 24px;
            }
            p:nth-child(3) {
                font-size: 17px;
                margin-bottom: 50px;
                padding: 0 90px;
                color: #a3a3a3;
            }
            span {
                font-size: 20px;
                border: 1px solid #3b9ffd;
                padding: 14px 35px;
                color: #3b9ffd;
                border-radius: 5px;
                cursor: pointer;
                transition: all 300ms;
            }
            span:hover {
                background-color: #3b9ffd;
                color: #fff;
            }
        }
        &>div:nth-child(3) {
            border-right: none;
        }
    }
}
.png-video { background-image: url('../../../assets/img/视频基础.png') }
.png-ai { background-image: url('../../../assets/img/AI智能服务.png') }
.png-dt { background-image: url('../../../assets/img/大数据业务.png') }
</style>

