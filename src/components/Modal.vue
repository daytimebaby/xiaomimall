<template>
    <transition name="slide">
        <div class="modal" v-show="showModal">
            <div class="mask"></div>
            <div class="modal-dialog">
                <div class="modal-header">
                    <span>{{ title }}</span>
                    <a href="javascript:;" class="icon-close" v-on:click="$emit('cancel')"></a>
                </div>
                <div class="modal-boday">
                    <slot name="body"></slot>
                </div>
                <div class="modal-footer">
                    <a href="javascript:;" class="btn" v-if="btnType == 1" @click="$emit('submit')">{{ sureText }}</a>
                    <a href="javascript:;" class="btn" v-if="btnType == 2" @click="$emit('cancel')">{{ cancelText }}</a>
                    <div class="btn-group" v-if="btnType == 3">
                        <a href="javascript:;" class="btn" @click="$emit('submit')">{{ sureText }}</a>
                        <a href="javascript:;" class="btn" @click="$emit('cancel')">{{ cancelText }}</a>
                    </div>
                </div>
            </div>
        </div>
    </transition>

</template>
<script>
export default {
    name: 'modal',
    props: {
        modalType: {
            type: String,
            default: 'form'
        },
        title: {
            type: String,
            default: ''
        },
        btnType: String,
        sureText: {
            type: String,
            default: '确定'
        },
        cancelText: {
            type: String,
            default: '取消'
        },
        showModal: Boolean

    },
    data() {
        return {

        }
    },
    mounted() {

    },
    methods: {

    },
}
</script>
<style lang="scss">
@import './../assets/scss/config.scss';

.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    transition: all .5s;



    &.slide-enter {
        top: -100%;
    }

    &.slide-enter-active {

        top: 0;
    }

    &.slide-leave-active {

        top: -100%;
    }


    .mask {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba($color: #000000, $alpha: 0.5);

    }

    .modal-dialog {
        position: absolute;
        width: 660px;
        height: auto;
        top: 50%;
        left: 50%;
        background-color: $colorG;
        transform: translate(-50%, -50%);


        .modal-header {
            height: 60px;
            line-height: 60px;
            background-color: $colorJ ;
            padding: 0px 25px;
            font-size: 16px;

            .icon-close {
                // icon-close.png
                display: inline-block;
                width: 14px;
                height: 14px;
                background: url('./../../public/imgs/icon-close.png') no-repeat center;
                background-size: 14px;
                position: absolute;
                top: 23px;
                right: 25px;
                transition: transform .3s;

                &:hover {
                    transform: scale(1.5);
                }
            }

        }

        .modal-boday {
            padding: 42px 40px 54px;
            font-size: 14px;

        }

        .modal-footer {
            height: 82px;
            line-height: 82px;
            text-align: center;
            background-color: $colorJ;

            a {
                display: inline-block;
                width: 110px;
                height: 30px;
                line-height: 30px;
                text-align: center;
                background-color: $colorA;
                color: $colorG;
                border: none;
                cursor: pointer;
            }



        }
    }
}
</style>