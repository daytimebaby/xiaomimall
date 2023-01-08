<template>
    <div class="header">
        <div class="nav-tobar">
            <div class="container">
                <div class="tobar-menu">
                    <a href="javascript:;">小米商城</a>
                    <a href="javascript:;">MUI</a>
                    <a href="javascript:;">云服务</a>
                    <a href="javascript:;">协议规则</a>
                </div>
                <div class="tobar-user">
                    <a href="javascript:;">登陆</a>
                    <a href="javascript:;">注册</a>
                    <a href="javascript:;" class="myCart"><span class="icon-cart"></span>购物车（0）</a>
                </div>
            </div>
        </div>
        <div class="nav-header">
            <div class="container">
                <div class="header-logo">
                    <a href="/index"></a>
                </div>
                <div class="header-menu">
                    <div class="item-menu">
                        <span>小米手机</span>
                        <div class="children">
                            <ul>
                                <li class="product">
                                    <a href="javascript:;">
                                        <div class="pro-img">
                                            <img src="./../../public/imgs/nav-img/nav-1.png" alt="">
                                        </div>
                                        <div class="pro-name">小米CC9</div>
                                        <div class="pro-price">¥1799.00元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="javascript:;">
                                        <div class="pro-img">
                                            <img src="./../../public/imgs/nav-img/nav-2.png" alt="">
                                        </div>
                                        <div class="pro-name">小米CC9</div>
                                        <div class="pro-price">¥1799.00元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="javascript:;">
                                        <div class="pro-img">
                                            <img src="./../../public/imgs/nav-img/nav-3.png" alt="">
                                        </div>
                                        <div class="pro-name">小米CC9</div>
                                        <div class="pro-price">¥1799.00元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="javascript:;">
                                        <div class="pro-img">
                                            <img src="./../../public/imgs/nav-img/nav-4.png" alt="">
                                        </div>
                                        <div class="pro-name">小米CC9</div>
                                        <div class="pro-price">¥1799.00元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="javascript:;">
                                        <div class="pro-img">
                                            <img src="./../../public/imgs/nav-img/nav-5.png" alt="">
                                        </div>
                                        <div class="pro-name">小米CC9</div>
                                        <div class="pro-price">¥1799.00元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="javascript:;">
                                        <div class="pro-img">
                                            <img src="./../../public/imgs/nav-img/nav-6.png" alt="">
                                        </div>
                                        <div class="pro-name">小米CC9</div>
                                        <div class="pro-price">¥1799.00元</div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="item-menu">
                        <span>ReadMi红米</span>
                        <div class="children"></div>

                    </div>
                    <div class="item-menu">
                        <span>电视</span>
                        <div class="children"></div>

                    </div>

                </div>
                <div class="header-search">
                    <div class="wrapper">
                        <input type="text" name="keyword" />
                        <a href="javascript:;"></a>
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>
<script>
export default {
    name: "header",
    components: {

    },
    data() {
        return {
            phoneList: [
                {

                }
            ]
        }
    }

}
</script>
<style lang="scss">
@import "./../assets/scss/config.scss";

.header {

    .nav-tobar {
        height: 39px;
        line-height: 39px;
        color: #B0B0B0;
        background-color: $colorB;

        .container {
            position: relative;
            width: 1226px;
            margin-right: auto;
            margin-left: auto;
            display: flex;
            justify-content: space-between;
            align-items: center;

            a {
                color: #B0B0B0;
                display: inline-block;
                margin-right: 17px;
            }

            .myCart {
                width: 110px;
                height: 39px;
                line-height: 39px;
                text-align: center;
                color: $colorG;
                background-color: $colorA;
                margin-right: 0px;

                .icon-cart {
                    display: inline-block;
                    width: 16px;
                    height: 12px;
                    background: url('./../../public/imgs/icon-cart-checked.png') no-repeat center;
                    background-size: contain;
                    margin-right: 4px;
                }
            }

        }
    }

    .nav-header {
        .container {
            position: relative;
            width: 1226px;
            margin-right: auto;
            margin-left: auto;
            display: flex;
            justify-content: space-between;
            align-items: center;

            height: 112px;


            .header-logo {
                display: inline-block;
                width: 55px;
                height: 55px;
                background-color: $colorA ;

                a {

                    display: inline-block;
                    width: 110px;
                    height: 55px;

                    &:before {
                        content: '';
                        display: inline-block;
                        width: 55px;
                        height: 55px;
                        background: url('./../../public/imgs/mi-logo.png') no-repeat center;
                        background-size: 55px;
                        transition: margin .2s;
                    }

                    &::after {
                        content: '';
                        display: inline-block;
                        width: 55px;
                        height: 55px;
                        background: url('./../../public/imgs/mi-home.png') no-repeat center;
                        background-size: 55px;
                        transition: margin .2s;
                    }

                    &:hover::before {
                        margin-left: -55px;
                        transition: margin .2s;
                    }
                }

            }

            .header-menu {
                display: inline-block;
                width: 643px;
                line-height: 112px;
                color: $colorB;
                font-size: 16px;
                font-weight: bold;
                padding-left: 209px;

                .item-menu {
                    display: inline-block;
                    margin-right: 20px;

                    &:hover {
                        color: $colorA;

                        .children {
                            height: 220px;
                            opacity: 1;
                            transition: all 0.5s;

                        }
                    }

                    .children {
                        width: 1226px;
                        height: 0px;
                        opacity: 0;
                        position: absolute;
                        top: 112px;
                        left: 0px;
                        overflow: hidden;
                        background-color: $colorG;
                        border-top: 1px solid #e5e5e5;
                        box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
                        transition: all 0.5s;
                        z-index: 10;

                        ul {
                            .product {
                                display: inline-block;
                                width: 16.6%;
                                height: 220px;
                                font-size: 12px;
                                line-height: 12px;
                                text-align: center;
                                position: relative;

                                a {
                                    .pro-img {
                                        height: 137px;

                                        img {
                                            height: 111px;
                                            width: auto;
                                            margin-top: 20px;
                                        }
                                    }

                                    .pro-name {
                                        font-weight: bold;
                                        margin-top: 19px;
                                        margin-bottom: 8px;
                                        color: $colorB;
                                    }

                                    .pro-price {
                                        color: $colorA;

                                    }

                                }

                                &::before {
                                    content: "";
                                    position: absolute;
                                    top: 28px;
                                    right: 0;
                                    border-left: 1px solid #d7d7d7;
                                    height: 140px;
                                    width: 1px;


                                }

                                &:last-child::before {
                                    border: none;
                                }
                            }
                        }
                    }
                }

            }

            .header-search {
                width: 319px;

                .wrapper {
                    height: 50px;
                    border: 1px solid #e0e0e0;
                    display: flex;
                    align-items: center;

                    input {
                        width: 264px;
                        height: 50px;
                        // border: 1px solid #e0e0e0;
                        border: none;
                        border-right: 1px solid #e0e0e0;
                        box-sizing: border-box;
                        padding-left: 17px;
                    }

                    a {
                        display: inline-block;
                        width: 18px;
                        height: 18px;
                        background: url('./../../public/imgs/icon-search.png') no-repeat center;
                        background-size: contain;
                        margin-left: 17px;

                    }
                }
            }

        }
    }
}
</style>