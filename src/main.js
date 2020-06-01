// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iview from 'iview'
import 'iview/dist/styles/iview.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.config.productionTip = false
import 'lib-flexible/flexible'
import $ from 'jquery'
/* eslint-disable no-new */
Vue.use(iview);
Vue.use(VueAwesomeSwiper);
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
