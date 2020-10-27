
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import api from './components/request/api'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false;
import BaiduMap from 'vue-baidu-map'
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
