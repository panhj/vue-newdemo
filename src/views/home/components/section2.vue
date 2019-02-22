<template>
<div class="section2">
    <div>
        <p>提供一站式接入流程，助力合作伙伴在细分领域专业化发展</p>
        <div class="card pngbg-police">
            <div class="card-icon">
                <i class="icon png-police"></i>
                <br/>
                <span>智慧警务</span>
            </div>
            <div class="card-hv">
                <div class="ms">
                    <p></p>
                    <span>了解详情</span>
                </div>
            </div>
        </div>
        <div class="card pngbg-traffic">
            <div class="card-icon">
                <i class="icon png-traffic"></i>
                <br/>
                <span>智慧交管</span>
            </div>
            <div class="card-hv">
                <div class="ms">
                    <p></p>
                    <span>了解详情</span>
                </div>
            </div>
        </div>
        <div class="card pngbg-park">
            <div class="card-icon">
                <i class="icon png-park"></i>
                <br/>
                <span>智慧园区</span>
            </div>
            <div class="card-hv">
                <div class="ms">
                    <p></p>
                    <span>了解详情</span>
                </div>
            </div>
        </div>
        <div class="card pngbg-money">
            <div class="card-icon">
                <i class="icon png-money"></i>
                <br/>
                <span>智慧金融</span>
            </div>
            <div class="card-hv">
                <div class="ms">
                    <p></p>
                    <span>了解详情</span>
                </div>
            </div>
        </div>
        <div class="card pngbg-snow">
            <div class="card-icon">
                <i class="icon png-snow"></i>
                <br/>
                <span>雪亮工程</span>
            </div>
            <div class="card-hv">
                <div class="ms">
                    <p></p>
                    <span>了解详情</span>
                </div>
            </div>
        </div>
        <div class="card pngbg-fire">
            <div class="card-icon">
                <i class="icon png-fire"></i>
                <br/>
                <span>智慧消防</span>
            </div>
            <div class="card-hv">
                <div class="ms">
                    <p></p>
                    <span>了解详情</span>
                </div>
            </div>
        </div>
        <div class="card pngbg-study">
            <div class="card-icon">
                <i class="icon png-study"></i>
                <br/>
                <span>智慧教育</span>
            </div>
            <div class="card-hv">
                <div class="ms">
                    <p></p>
                    <span>了解详情</span>
                </div>
            </div>
        </div>
        <div class="card pngbg-hospital">
            <div class="card-icon">
                <i class="icon png-hospital"></i>
                <br/>
                <span>智慧医疗</span>
            </div>
            <div class="card-hv">
                <div class="ms">
                    <p></p>
                    <span>了解详情</span>
                </div>
            </div>
        </div>
        <div class="card pngbg-express">
            <div class="card-icon">
                <i class="icon png-express"></i>
                <br/>
                <span>智慧物流</span>
            </div>
            <div class="card-hv">
                <div class="ms">
                    <p></p>
                    <span>了解详情</span>
                </div>
            </div>
        </div>
        <p class="p-bottom"></p>
        <div class="footer">
            <div class="flogo">
                <i></i>
                <span>大华视频物联能力开放平台</span>
            </div>
            <div class="ftext">
                <span>浙江大华技术股份公司版权所有</span>
            </div>
        </div>
    </div>
</div>
</template>

<style lang="less" scoped>
.section2 {
    width: 100%;
    overflow: hidden;
    background-color: #34373d;
    &>div {
        width: 1200px;
        margin: 0 auto;
        p {
            font-size: 20px;
            color: #a3a3a3;
            margin: 100px 0 30px 0;
        }
        .p-bottom {
            clear: both;
            padding: 30px;
            border-bottom: 1px solid #a3a3a3;
        }
        .card:hover {background-size:102%;}
        .card {
            float: left;
            position: relative;
            width: 399.8px;
            height: 296px;
            overflow: hidden;
            background-repeat: no-repeat;
            background-size: 100%;
            transition: all 500ms ease;
            cursor: pointer;
            .card-icon i {
                display: inline-block;
                width: 80px;
                height: 90px;
                margin-top: 80px;
                margin-bottom: 20px;
                background-repeat: no-repeat;
                background-size: 100%;
            }
            .card-icon span {
                font-size: 24px;
                color: #fff;
            }
            .card-hv {
                position: absolute;
                top: 0; left: 0; right: 0;
                height: 200%;
                transition: all 300ms;
                .ms {
                    position: absolute;
                    height: 50%;
                    bottom: 0; left: 0; right: 0;
                    background-color: #010101b3;
                    p {
                        color: #fff;
                        padding: 0 30px;
                    }
                    span {
                        padding: 10px 20px;
                        border: 1px solid #fff;
                        border-radius: 5px;
                        color: #fff;
                        font-size: 16px;
                        cursor: pointer;
                        transition: all 300ms;
                    }
                    span:hover {
                        background-color: #fff;
                        color: #000;
                    }
                }
            }
            // .card-hv:hover {
            //     transform: translate3d(0, -50%, 0);
            // }
        }
        .footer {
            position: relative;
            color: #a3a3a3;    
            height: 60px;
            font-size: 18px;
            line-height: 40px;
            .flogo {
                position: absolute;
                right: 50%;
                padding-right: 20px;
                border-right: 1px solid #565656;
                i {
                    display: inline-block;
                    width: 40px;
                    height: 40px;
                    margin-right: 10px;
                    vertical-align: middle;
                    background-image: url('../../../assets/img/logo.png');
                    background-size: contain;
                }
            }
            .ftext {
                position: absolute;
                left: 50%;
                    padding-left: 20px;
            }
        }
    }
}
.png-police { background-image: url('../../../assets/img/police.png') }
.png-traffic { background-image: url('../../../assets/img/traffic.png') }
.png-park { background-image: url('../../../assets/img/park.png') }
.png-money { background-image: url('../../../assets/img/money.png') }
.png-snow { background-image: url('../../../assets/img/snow.png') }
.png-fire { background-image: url('../../../assets/img/fire.png') }
.png-study { background-image: url('../../../assets/img/study.png') }
.png-hospital { background-image: url('../../../assets/img/hospital.png') }
.png-express { background-image: url('../../../assets/img/express.png') }

.pngbg-police { background-image: url('../../../assets/img/policeBg.png') }
.pngbg-traffic { background-image: url('../../../assets/img/trafficBg.png') }
.pngbg-park { background-image: url('../../../assets/img/parkBg.png') }
.pngbg-money { background-image: url('../../../assets/img/moneyBg.png') }
.pngbg-snow { background-image: url('../../../assets/img/snowBg.png') }
.pngbg-fire { background-image: url('../../../assets/img/fireBg.png') }
.pngbg-study { background-image: url('../../../assets/img/studyBg.png') }
.pngbg-hospital { background-image: url('../../../assets/img/hospitalBg.png') }
.pngbg-express { background-image: url('../../../assets/img/expressBg.png') }
</style>

