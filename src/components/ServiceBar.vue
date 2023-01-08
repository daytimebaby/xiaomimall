<template>
    <div class="serverbar">
        <div class="container">
            <a href="javascript:;">
                <span class="icon-setting"></span>
                预约维修服务
            </a>
            <a href="javascript:;">
                <span class="icon-7day"></span>
                七天无理由退货
            </a>
            <a href="javascript:;">
                <span class="icon-15day"></span>
                15天免费换货
            </a>
            <a href="javascript:;">
                <span class="icon-post"></span>
                满150元包邮
            </a>
        </div>
    </div>
</template>
<script>
export default {
    name: "serverbar"
}
</script>
<style lang="scss">
@import './../assets/scss/config.scss';

.serverbar {
    // background-color: $colorD;
    border-top: 1px solid $colorE;

    .container {
        display: flex;
        position: relative;
        width: 1226px;
        margin-right: auto;
        margin-left: auto;
        justify-content: space-between;
        align-items: center;
        height: 90px;

        a {
            display: inline-block;
            width: 25%;
            text-align: center;
            border-right: 1px solid black;
            color: #666;
            font-size: 16px;

            span {
                display: inline-block;
                width: 20px;
                height: 20px;
                vertical-align: middle;
            }
        }

        a:last-child {
            border-right: none
        }

        .icon-setting {

            background: url('./../../public/imgs/icon-setting.png') no-repeat center;
            background-size: contain;
        }
        .icon-7day{
            background: url('./../../public/imgs/icon-7day.png') no-repeat center;
            background-size: contain;
        }
        .icon-15day{
            background: url('./../../public/imgs/icon-15day.png') no-repeat center;
            background-size: contain;
        }

        .icon-post{
            background: url('./../../public/imgs/icon-post.png') no-repeat center;
            background-size: contain;
        }


    }
}
</style>
