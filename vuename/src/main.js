// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
/*引入vue框架*/
import App from './App'
/*引入根组件*/
import Router from 'vue-router'
// 引入store
import store from './vuex/store'
//引入组件
import routes from './routes'
/*关闭生产模式下给出的提示*/
Vue.config.productionTip = false;
// 引入echarts
//import echarts from 'echarts'
window.echarts = require('echarts');
/* eslint-disable no-new */
Vue.use(ElementUI);
/*引入路由设置*/
Vue.use(Router);
const router = new Router({
  mode: 'history',
  routes
});
/*定义实例*/
new Vue({
  el: '#app',
  router,
  store,//全局注入
  components: { App },
  template: '<App/>'
});

