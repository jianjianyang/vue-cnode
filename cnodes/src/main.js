// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import AmazeVue from 'amaze-vue';
import 'amaze-vue/dist/amaze-vue.css';
import '@/config/global'
import * as custom from '@/filters/time'

Object.keys(custom).forEach(key => {
  Vue.filter(key, custom[key])
})
Vue.use(AmazeVue);
Vue.config.productionTip = false
Vue.use(VueAxios, axios)
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
