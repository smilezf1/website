// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'; //引用elementUi
import api from './components/request/api'
import 'element-ui/lib/theme-chalk/index.css' //引用elementUI中的样式
Vue.config.productionTip = false;
import BaiduMap from 'vue-baidu-map' //引用百度地图组件
import animate from 'animate.css'
import guid from './guid'
Vue.prototype.api = api;
Vue.prototype.guid = guid;
Vue.use(router);
Vue.use(ElementUI);
Vue.use(animate);
Vue.use(BaiduMap, {
  ak: 'er1y12cHwwo0MvygGKGizpduaN4qjkhs'
})
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
router.beforeEach((to, from, next) => {
  next()
})
