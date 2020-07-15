// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css' //引用swiper
import ElementUI from 'element-ui'; //引用elementUi
import 'element-ui/lib/theme-chalk/index.css' //引用elementUI中的样式
Vue.config.productionTip = false
import 'lib-flexible/flexible'
import $ from 'jquery'
import BaiduMap from 'vue-baidu-map' //引用百度地图组件
import animate from 'animate.css'
/* eslint-disable no-new */
Vue.use(VueAwesomeSwiper, router);
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
