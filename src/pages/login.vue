<template>
    <div class="login">
        <div class="container">
            <a href="/index">
                <img src="./../../public/imgs/login-logo.png" alt="小米商城">
            </a>
        </div>
        <div class="wrapper">
            <div class="container">
                <div class="login-form">
                    <h3>
                        <span class="checked">账号登录</span>
                        <span class="sep-line">|</span>
                        <span>扫码登录</span>
                    </h3>
                    <div class="input">
                        <input class="input" type="text" />
                    </div>
                    <div class="input">
                        <input class="input" type="password" />
                    </div>

                    <a href="/index" class="btn">登陆</a>
                    <div class="tips">
                        <a href="javascript:;" class="sms">手机短信登录/注册</a>
                        <div class="reg">
                            <a href="javascript:;">立即注册</a>
                            <span>|</span>
                            <a href="javascript:;">忘记密码？</a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="footer-link">
                <a href="javascript:;">河畔一角主页</a><span>|</span>
                <a href="javascript:;">Vue全栈课程</a><span>|</span>
                <a href="javascript:;">React全家桶</a><span>|</span>
                <a href="javascript:;">微信支付专项课程（H5+小程序+Node+Mongo）</a>
            </div>
            <div class="copyright">
                Copyright ©2019
                <span class="domain">mi.futurefe.com</span>
                All Rights Reserved.
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'login',
    components: {

    },
    methods: {

    },
    mounted() {

    },
}
</script>
<style lang="scss">
@import './../assets/scss/config.scss';

.login {
    .container {
        width: 1226px;
        height: 113px;
        margin-right: auto;
        margin-left: auto;

    }

    .wrapper {
        height: 576px;
        background: url("./../../public/imgs/login-bg.jpg") no-repeat center;

        .container {
            position: relative;
            width: 1226px;
            height: 576px;
            margin-right: auto;
            margin-left: auto;

            .login-form {
                width: 410px;
                height: 510px;
                background-color: $colorG;
                position: absolute;
                bottom: 29px;
                right: 0;
                box-sizing: border-box;
                padding-left: 31px;
                padding-right: 31px;

                h3 {
                    line-height: 23px;
                    font-size: 24px;
                    text-align: center;
                    margin: 40px auto 49px;

                    .sep-line {
                        margin: 0 32px;
                    }

                    .checked {
                        color: $colorA;
                    }
                }

                .input {
                    display: block;
                    width: 350px;
                    height: 52px;
                    margin-bottom: 20px;
                    border: 1px solid #E5E5E5;

                    input {
                        box-sizing: border-box;
                        border: none;
                        padding: 18px;
                    }
                }

                .btn {
                    width: 350px;
                    height: 52px;
                    display: block;
                    text-align: center;
                    background-color: $colorA;
                    line-height: 52px;
                    color: #fff;
                    font-size: 16px;
                    margin-top: 10px;

                }

                .tips {
                    margin-top: 15px;
                    display: flex;
                    width: 350px;
                    justify-content: space-between;
                    align-items: center;
                    font-size: 14px;

                    .sms {
                        color: $colorA;
                    }

                    .reg {
                        display: inline-block;

                        span {
                            color: #999;
                            margin-left: 5px;
                            margin-right: 5px;
                        }

                        a {
                            color: #999;

                        }
                    }

                }
            }

        }


    }
    .footer{
        height: 100px;
        padding-top: 60px;
        text-align: center;
    }
}
</style>