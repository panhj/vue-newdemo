<template>
<div class="section2">
    <div>
        <p>提供一站式接入流程，助力合作伙伴在细分领域专业化发展</p>
        <div class="card">
            <div class="card-icon">
                <i class="icon"></i>
                <br/>
                <span>智慧警务</span>
            </div>
            <div class="card-hv">
                <div class="ms">
                    <p>智慧警务智慧警务智慧警务 智慧警务智慧警务 智慧警务智慧警务</p>
                    <span>了解详情</span>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-icon">
                <i class="icon"></i>
                <br/>
                <span>智慧警务</span>
            </div>
            <div class="card-hv">
                <div class="ms">
                    <p>智慧警务智慧警务智慧警务 智慧警务智慧警务 智慧警务智慧警务</p>
                    <span>了解详情</span>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-icon">
                <i class="icon"></i>
                <br/>
                <span>智慧警务</span>
            </div>
            <div class="card-hv">
                <div class="ms">
                    <p>智慧警务智慧警务智慧警务 智慧警务智慧警务 智慧警务智慧警务</p>
                    <span>了解详情</span>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-icon">
                <i class="icon"></i>
                <br/>
                <span>智慧警务</span>
            </div>
            <div class="card-hv">
                <div class="ms">
                    <p>智慧警务智慧警务智慧警务 智慧警务智慧警务 智慧警务智慧警务</p>
                    <span>了解详情</span>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-icon">
                <i class="icon"></i>
                <br/>
                <span>智慧警务</span>
            </div>
            <div class="card-hv">
                <div class="ms">
                    <p>智慧警务智慧警务智慧警务 智慧警务智慧警务 智慧警务智慧警务</p>
                    <span>了解详情</span>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-icon">
                <i class="icon"></i>
                <br/>
                <span>智慧警务</span>
            </div>
            <div class="card-hv">
                <div class="ms">
                    <p>智慧警务智慧警务智慧警务 智慧警务智慧警务 智慧警务智慧警务</p>
                    <span>了解详情</span>
                </div>
            </div>
        </div>
        <p class="p-bottom"></p>
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
        .card {
            float: left;
            position: relative;
            width: 399.8px;
            height: 300px;
            overflow: hidden;
            background-color: #5d6d79;
            border: 1px solid #34373d;
            .card-icon i {
                display: inline-block;
                width: 100px;
                height: 100px;
                margin-top: 80px;
                margin-bottom: 20px;
                background-color: #ccc;
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
                    }
                }
            }
            .card-hv:hover {
                transform: translate3d(0, -50%, 0);
            }
        }
    }
}
</style>

