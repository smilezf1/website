// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
import 'lib-flexible/flexible'
import $ from 'jquery'
import animate from 'animate.css'
import BaiduMap from 'vue-baidu-map'
/* eslint-disable no-new */
Vue.use(VueAwesomeSwiper);
Vue.use(ElementUI);
Vue.use(router);
Vue.use(BaiduMap, { ak: 'er1y12cHwwo0MvygGKGizpduaN4qjkhs' })
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
