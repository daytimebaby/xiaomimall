<template>
    <div class="nav-bar" :class="{ 'is_fixed': isFixed }">
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
    </div>
</template>
<script>
export default {
    name: 'nav-bar',
    data() {
        return {
            isFixed: false
        }
    },
    components: {

    }, methods: {
        initHeight() {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            this.isFixed = scrollTop >= 152 ? true : false;
        }
    }, mounted() {
        window.addEventListener('scroll', this.initHeight);
    }, destroyed() {
        window.removeEventListener('scroll', this.initHeight)

    },
}
</script>
<style lang="scss">
@import './../assets/scss/config.scss';

.nav-bar {
    border-top: 1px solid #e5e5e5;
    background-color: #ffffff;
    &.is_fixed {
        width: 100%;
        position: fixed;
        top: 0;
        box-shadow: 0px 5px 5px $colorE;
    }

    .container {
        display: flex;
        width: 1226px;
        height: 70px;
        line-height: 70px;
        margin-left: auto;
        margin-right: auto;
        justify-content: space-between;
        align-items: center;

        .pro-title {
            display: inline-block;
            color: black;
            font-size: 18px;
            font-weight: bold;
        }

        .param {
            display: inline-block;

            a {
                font-size: 14px;
                font-weight: bold;
                color: #666;
            }

            span {
                margin: 0px 10px;
            }

            .btn {
                font-weight: normal;
                margin-left: 10px;
                display: inline-block;
                width: 110px;
                height: 30px;
                line-height: 30px;
                text-align: center;
                background-color: #FF6600;
                color: #ffffff;
                border: none;
                cursor: pointer;

            }
        }

    }
}
</style>