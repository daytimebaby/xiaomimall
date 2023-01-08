<template>
    <div class="index">
        <div class="container">
            <div class="swiper-box">
                <div class="nav-menu">
                    <ul class="menu-wrap">
                        <li class="menu-item">
                            <span>手机 电话卡</span>
                        </li>
                        <li class="menu-item">
                            <span>电视 盒子</span>
                        </li>
                        <li class="menu-item">
                            <span>笔记本 平板</span>
                        </li>
                        <li class="menu-item">
                            <span>家电 插线板</span>
                        </li>
                        <li class="menu-item">
                            <span>出行 穿戴</span>
                        </li>
                        <li class="menu-item">
                            <span>智能 路由器</span>
                        </li>
                        <li class="menu-item">
                            <span>电源 配件</span>
                        </li>
                        <li class="menu-item">
                            <span>生活 箱包</span>
                        </li>


                    </ul>
                </div>
                <swiper v-bind:options="swiperOption">
                    <swiperSlide v-for="(item, index) in slideList" v-bind:key="index">
                        <a v-bind:href="'/product/' + item.id"><img v-bind:src="item.img"></a>
                    </swiperSlide>
                    <div class="swiper-pagination" slot="pagination"></div>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                </swiper>
            </div>
            <div class="adb-box">
                <a href="javascript:;" v-for="(item, index) in adsList" v-bind:key="index">
                    <img v-lazy='item.img' alt="">
                </a>

            </div>
            <div class="banner">
                <a href="/product/30">
                    <img src="/imgs/banner-1.png">
                </a>
            </div>
        </div>
        <div class="product-box">
            <div class="container">
                <h2>手机</h2>
                <div class="wrapper">
                    <div class="banner-product">
                        <a href="javascript:;"><img src="./../../public/imgs/mix-alpha.jpg" alt=""></a>
                    </div>
                    <div class="list-product">
                        <div class="list" v-for="(arr, i) in phoneList" v-bind:key="i">
                            <div class="item" v-for="(item, j) in arr" v-bind:key="j">
                                <span class="new-pro">新品</span>
                                <div class="item-img">
                                    <img v-lazy="item.mainImage" alt="">
                                </div>
                                <div class="item-info">
                                    <h3>{{ item.name }}</h3>
                                    <p>{{ item.subtitle }}</p>
                                    <p class="price" @click="addCart(item.id)">{{ item.price }}元</p>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
        <serverBar></serverBar>
        <modal title="提示" sureText="查看购物车" btnType="1" modalType="middle" v-bind:showModal="showModal"
            v-on:submit="goToCart" v-on:cancel="showModal = false">
            <template v-slot:body>
                <p>商品添加成功</p>
            </template>
        </modal>
    </div>

</template>
<script>
import serverBar from './../components/ServiceBar.vue'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import modal from './../components/Modal.vue'
import 'swiper/dist/css/swiper.css'
export default {
    name: 'index',
    components: {
        serverBar,
        modal,
        swiper,
        swiperSlide,
    },
    mounted() {
        this.init();
    },
    methods: {
        init() {
            this.axios.get('/products', {
                params: {
                    categoryId: 100012,
                    pageSize: 14
                }
            }).then((res) => {
                res.list = res.list.slice(6, 14);
                this.phoneList = [res.list.slice(0, 4), res.list.slice(4, 8)];
            })
        },
        addCart(){
            this.showModal=true
        }
    },
    data() {
        return {
            swiperOption: {
                autoplay: true,
                loop: true,
                effect: 'cube',
                cubeEffect: {
                    slideShadows: true,
                    shadow: true,
                    shadowOffset: 70,
                    shadowScale: 0.6
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',

                }
            },
            slideList: [
                {
                    id: '42',
                    img: '/imgs/slider/slide-1.jpg'
                },
                {
                    id: '45',
                    img: '/imgs/slider/slide-2.jpg'
                },
                {
                    id: '46',
                    img: '/imgs/slider/slide-3.jpg'
                },
                {
                    id: '',
                    img: '/imgs/slider/slide-2.jpg'
                }
            ],
            adsList: [
                {
                    id: 33,
                    img: '/imgs/ads/ads-1.png'
                },
                {
                    id: 48,
                    img: '/imgs/ads/ads-2.png'
                },
                {
                    id: 45,
                    img: '/imgs/ads/ads-3.png'
                },
                {
                    id: 47,
                    img: '/imgs/ads/ads-4.png'
                },

            ],
            phoneList: [

            ],
            showModal: false

        }
    },

}
</script>
<style lang="scss">
@import './../assets/scss/config.scss';

.index {
    .container {
        position: relative;
        width: 1226px;
        margin-right: auto;
        margin-left: auto;

        .swiper-box {
            width: 1226px;

            .nav-menu {
                position: absolute;
                width: 264px;
                height: 451px;
                padding: 26px 0px;
                z-index: 10;
                background-color: #55585a7a;
                color: $colorG;
                box-sizing: border-box;

                .menu-wrap {
                    .menu-item {
                        height: 50px;
                        line-height: 50px;

                        &:hover {
                            background-color: $colorA;
                        }

                        span {
                            display: inline-block;
                            font-size: 16px;
                            padding-left: 30px;
                            position: relative;

                            &::after {
                                content: '';
                                display: inline-block;
                                width: 10px;
                                height: 15px;
                                background: url('./../../public/imgs/icon-arrow.png') no-repeat center;
                                background-size: contain;
                                position: absolute;
                                left: 238px;
                                top: 17.5px;
                            }
                        }

                    }
                }

            }

            .swiper-container {
                height: 451px;

                .swiper-button-prev {
                    left: 270px;
                }

                img {
                    width: 100%;
                    height: 451px;
                }


            }
        }

        .adb-box {
            width: 1226px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 10px;

            a {



                img {
                    width: 296px;
                    height: 167px;
                }
            }
        }

        .banner {
            margin-top: 10px;
            margin-bottom: 50px;

            img {
                width: 100%;
                height: 100%;
            }
        }




    }

    .product-box {
        background-color: #F5F5F5;
        padding: 30px 0 50px;

        .container {
            width: 1226px;
            margin-right: auto;
            margin-left: auto;

            h2 {
                font-size: 22px;
                height: 21px;
                line-height: 21px;
                color: #333333;
                margin-bottom: 20px;
            }

            .wrapper {
                display: flex;
                width: 1226px;
                margin-right: auto;
                margin-left: auto;
                justify-content: space-between;
                align-items: center;

                .banner-product {
                    margin-right: 16px;

                    img {
                        width: 224px;
                        height: 619px;
                    }

                }

                .list-product {

                    .list {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        margin-bottom: 14px;
                        width: 986px;

                        &:last-child {
                            margin-bottom: 0px;
                        }

                        .item {
                            width: 236px;
                            height: 302px;
                            background-color: #ffffff;
                            text-align: center;

                            .new-pro {
                                display: inline-block;
                                text-align: center;
                                width: 67px;
                                height: 24px;
                                color: $colorG;
                                background-color: #7ECF68;
                                line-height: 24px;

                            }

                            .item-img {
                                width: 236px;
                                // height: 198px;

                                img {
                                    width: 100%;
                                    height: 195px;
                                }
                            }

                            .item-info {
                                h3 {}

                                p {
                                    color: #999999;
                                    line-height: 13px;
                                    margin: 6px auto 13px;
                                }

                                .price {
                                    color: $colorA;
                                    font-size: 14px;
                                    font-weight: bold;
                                    cursor: pointer;

                                    &::after {
                                        content: "";
                                        display: inline-block;
                                        width: 20px;
                                        height: 20px;
                                        background: url('./../../public/imgs/icon-cart-hover.png') no-repeat center;
                                        background-size: contain;
                                        margin-left: 5px;
                                        vertical-align: middle;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

}
</style>