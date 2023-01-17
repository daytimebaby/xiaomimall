<template>
    <div class="product">
        <!-- <div class="nav-bar">
            <div class="container">
                <div class="pro-title">小米8</div>
                <div class="param">
                    <a href="">概述</a>
                    <span>|</span>
                    <a href="">参数</a>
                    <span>|</span>
                    <a href="">用户评价</a>
                    <a href="javascript:;" class="btn">立即购买</a>
                </div>
            </div>
        </div> -->
        <productParam>

        </productParam>
        <div class="content">
            <div class="item-bg">
                <h2>小米cc9</h2>
                <h3>3200万+4800万 前后双旗舰相机</h3>
                <div class="item-dec">
                    <p>全球首款双频GP</p>
                    <span>|</span>
                    <p>晓龙845</p>
                    <span>|</span>
                    <p>AI变焦双摄</p>
                    <span>|</span>
                    <p>红外人脸识别</p>
                </div>
                <div class="price">
                    <span>￥
                        <em>1799</em>
                    </span>
                </div>

            </div>
            <div class="item-bg2">

            </div>
            <div class="item-bg3"></div>
            <div class="item-swiper">
                <swiper :options="swiperOption">
                    <swiper-slide><img src="/imgs/product/gallery-2.png" alt=""></swiper-slide>
                    <swiper-slide><img src="/imgs/product/gallery-3.png" alt=""></swiper-slide>
                    <swiper-slide><img src="/imgs/product/gallery-4.png" alt=""></swiper-slide>
                    <swiper-slide><img src="/imgs/product/gallery-5.jpg" alt=""></swiper-slide>
                    <swiper-slide><img src="/imgs/product/gallery-6.jpg" alt=""></swiper-slide>
                    <!-- Optional controls -->
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
                <div class="desc">小米8 AI变焦双摄拍摄</div>
            </div>
            <div class="item-video">
                <h2>
                    60帧超慢动作摄影
                    <br>
                    慢慢回味每一瞬间的精彩
                </h2>
                <p>
                    后置960帧电影般超慢动作视频，将眨眼间的美妙展现得淋漓尽致！
                    <br>
                    更能AI 精准分析视频内容，15个场景智能匹配背景音效。
                </p>
                <div class="video-bg" @click="showSlide = 'slideDown'"></div>
                <div class="video-box" v-show="showSlide">
                    <div class="overlay"></div>
                    <div class="video" v-bind:class="showSlide">
                        <span class="icon-close" @click="closeVideo"></span>
                        <video src="/imgs/product/video.mp4" muted autoplay controls="controls"></video>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import productParam from './../components/ProductParam.vue'
export default {
    name: 'product',
    data() {
        return {
            showSlide: "",//控制动画效果
            swiperOption: {
                autoplay: true,
                slidesPerView: 3,
                spaceBetween: 30,
                freeMode: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                }
            },

        }
    },
    components: {

        swiper,
        swiperSlide,
        productParam
    }
    , methods: {
        closeVideo() {
            this.showSlide = 'slideUp';
            setTimeout(() => {
                this.showSlide = '';
            }, 600)
        }

    }
    , mounted() {

    },
}
</script>
<style lang="scss">
@import './../assets/scss/config.scss';

.product {
    // .nav-bar {
    //     border-top: 1px solid #e5e5e5;

    //     .container {
    //         display: flex;
    //         width: 1226px;
    //         height: 70px;
    //         line-height: 70px;
    //         margin-left: auto;
    //         margin-right: auto;
    //         justify-content: space-between;
    //         align-items: center;

    //         .pro-title {
    //             display: inline-block;
    //             color: black;
    //             font-size: 18px;
    //             font-weight: bold;
    //         }

    //         .param {
    //             display: inline-block;

    //             a {
    //                 font-size: 14px;
    //                 font-weight: bold;
    //                 color: #666;
    //             }

    //             span {
    //                 margin: 0px 10px;
    //             }

    //             .btn {
    //                 font-weight: normal;
    //                 margin-left: 10px;
    //                 display: inline-block;
    //                 width: 110px;
    //                 height: 30px;
    //                 line-height: 30px;
    //                 text-align: center;
    //                 background-color: #FF6600;
    //                 color: #ffffff;
    //                 border: none;
    //                 cursor: pointer;

    //             }
    //         }

    //     }
    // }

    .content {
        .item-bg {
            text-align: center;
            height: 718px;
            background: url('./../../public/imgs/product/product-bg-1.png') no-repeat center;

            h2 {
                font-size: 80px;
                padding-top: 55px;
            }

            h3 {
                font-size: 24px;
                letter-spacing: 10px;
            }

            .item-dec {
                margin-top: 21px;
                margin-bottom: 40px;

                p {
                    font-size: 16px;
                    color: #333333;
                    display: inline-block;
                }

                span {
                    margin: 0px 15px;
                }



            }

            .price {
                span {
                    font-size: 30px;
                    color: #333333;

                    em {
                        font-style: normal;
                        font-size: 38px;
                    }
                }

            }
        }

        .item-bg2 {
            background: url('./../../public/imgs/product/product-bg-2.png') no-repeat center;
            height: 480px;
            background-size: 1226px 397px;
        }

        .item-bg3 {
            background: url('./../../public/imgs/product/product-bg-3.png') no-repeat center;
            height: 480px;
            background-size: contain;
        }

        .item-swiper {
            margin: 36px auto 52px;

            .desc {
                font-size: 18px;
                color: #333333;
                text-align: center;
            }

            img {
                width: 100%;
            }
        }

        .item-video {
            text-align: center;
            background-color: black;
            color: #ffffff;
            margin-bottom: 76px;
            height: 1044px;

            h2 {
                font-size: 60px;
                padding-top: 82px;
                margin-bottom: 47px;
            }

            p {
                font-size: 24px;
                margin-bottom: 58px;
            }

            .video-bg {
                background: url('./../../public/imgs/product/gallery-1.png') no-repeat center;
                height: 480px;
                background-size: cover;
                cursor: pointer;
            }

            .video-box {
                .overlay {
                    position: fixed;
                    width: 100%;
                    height: 100%;
                    top: 0;
                    left: 0;
                    background-color: #000000;
                    z-index: 10;
                    opacity: .5;

                }

                @keyframes slideUp {
                    from {

                        opacity: 1;
                        top: 50%;
                    }

                    to {
                        opacity: 0;
                        top: -50%;


                    }
                }

                @keyframes slideDown {
                    from {
                        opacity: 0;
                        top: -50%;
                    }

                    to {
                        opacity: 1;
                        top: 50%;
                    }
                }

                .video {
                    position: fixed;
                    top: -70%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    z-index: 10;
                    width: 1000px;
                    height: 536px;
                    opacity: 1;

                    &.slideDown {
                        animation: slideDown .6s linear;
                        top: 50%;
                    }

                    &.slideUp {
                        animation: slideUp .6s linear;
                    }


                    .icon-close {
                        position: absolute;
                        top: 20px;
                        right: 20px;
                        width: 14px;
                        height: 14px;
                        background: url('./../../public/imgs/icon-close.png') no-repeat center;
                        background-size: 14px;
                        cursor: pointer;
                        z-index: 11;
                    }

                    video {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        outline: none;
                    }
                }

            }
        }
    }
}
</style>