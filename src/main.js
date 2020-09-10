import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import qs from 'qs'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';    // 默认主题
import "babel-polyfill";
import 'jquery'
import store from './vuex/store' // 引入store
// 百度编辑器引入
import '../static/ueditor/ueditor.config.js'
import '../static/ueditor/ueditor.all.min.js'
import '../static/ueditor/lang/zh-cn/zh-cn.js'
import '../static/ueditor/ueditor.parse.min.js'
import { IndexBar, IndexAnchor } from 'vant';
Vue.use(IndexBar).use(IndexAnchor);
Vue.use(ElementUI, { size: 'small' });
Vue.prototype.$axios = axios;
Vue.prototype.baseURL = process.env.API_ROOT;
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    if (config.method != 'get') {
        config.data = qs.stringify(config.data);
    }
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    return config;
}, function (error) {
    return Promise.reject(error)
});
let instance=axios.create({
    baseURL:process.env.API_ROOT,
    timeout:1000,
});

Vue.prototype.instance=instance;

Vue.config.productionTip=false;
//使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requireAuth)) { // 判断该路由是否需要登录权限
        if (sessionStorage.getItem("token")) { // 判断缓存里面是否有 token  //在登录的时候设置它的值
            next();
        } else {
            next({
                path: '/login'
            })
        }
    } else {
        next();
    }
});
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');