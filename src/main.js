
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
const defaultTitle = '蛮犀科技|构建智慧安全生活',
  head = document.getElementsByTagName("head")[0],
  title = document.getElementsByTagName("title")[0],
  meta1 = document.createElement("meta"),
  meta2 = document.createElement("meta");
meta1.name = "keywords";
meta2.name = "description";
router.beforeEach((to, from, next) => {
  document.title = to.meta.title ? to.meta.title : defaultTitle;
  meta1.content = to.meta.keyWords;
  meta2.content = to.meta.description;
  next()
})
head.appendChild(meta1);
head.appendChild(meta2);
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
