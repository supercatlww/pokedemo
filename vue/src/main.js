// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'
import Cookies from 'js-cookie'
import * as req from "./api/request.js";

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.prototype.$cookie = Cookies;
Vue.prototype.$req = req;
window.eventBus = new Vue();
Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
