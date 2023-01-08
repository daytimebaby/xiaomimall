import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { Message } from 'element-ui'
import vuelazyload from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import 'element-ui/lib/theme-chalk/index.css';

//根据前端的跨域方式做调整
axios.defaults.baseURL = '/api'
axios.defaults.timeout = 8000;

//接口错误拦截
axios.interceptors.response.use(function (response) {
  let res = response.data;
  let path = location.pathname;
  // path =path.slice();
  if (res.status == 0) {
    return res.data;
  } else if (res.status == 10) {
    if (path != '/index' && path != '/login') {
      window.location.href = '/login';
    }
  } else {
    Message.warning(res.msg);
    return Promise.reject(res);
  }
}, (error) => {
  let res = error.response;
  alert(res);
  return Promise.reject(res);

})

Vue.prototype.$message = Message;

Vue.config.productionTip = false
Vue.use(VueCookie);
Vue.use(VueAxios, axios)
Vue.use(vuelazyload, {
  loading: './imgs/loading-svg/loading-bars.svg'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
