import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home'
import Index from './pages/index'
import Cart from './pages/cart'
import Order from './pages/order'

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
            children: [
                {
                    path: "/index",
                    name: "index",
                    component: Index,
                },
                {
                    path: "/product/:id",
                    name: "product",
                    component: () => import('./pages/product.vue'),
                },
                {
                    path: "/detail/:id",
                    name: "detail",
                    component: () => import('./pages/detail.vue'),
                }
            ]
        },
        {
            path: "/cart",
            name: "cart",
            component: Cart,
        },
        {
            path: "/order",
            name: 'order',
            component: Order,
            children: [
                {
                    path: "confirm",
                    name: "order-confirm",
                    component: () => import("./pages/orderConfirm.vue"),
                },
                {
                    path: "list",
                    name: "order-list",
                    component: () => import("./pages/orderList.vue"),
                },
                {
                    path: "pay",
                    name: "order-pay",
                    component: () => import("./pages/orderPay.vue"),
                },
                {
                    path: "alipay",
                    name: "ali-pay",
                    component: () => import("./pages/alipay.vue"),
                }
            ]
        },
        {
            path: 'login',
            name: 'login',
            component: () => import("./pages/login.vue"),
        }
    ]
});