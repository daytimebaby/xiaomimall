<template>
    <div class="footer">
        <div class="footer-logo">
            <img src="./../../public/imgs/logo-footer.png" alt="">
            <p>小米商城</p>
        </div>
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
</template>
<script>
export default {
    name: "footer",
    components: {

    }
}
</script>
<style lang="scss">
@import './../assets/scss/config.scss';

.footer {
    height: 238px;
    background-color: $colorB;
    border-top: 7px solid $colorA;
    color: $colorD;
    text-align: center;
    font-size: 16px;

    .footer-logo {

        margin-top: 46px;
        margin-bottom: 31px;

        img {
            width: 53px;
            height: 36px;
            margin-bottom: 13px;
        }
    }

    .footer-link {
        margin-bottom: 13px;

        a {
            color: $colorD;

        }
    }

    .copyright {
        .domain {
            color: $colorA;
        }

    }
}
</style>