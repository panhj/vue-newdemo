import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/iconfont.css'

require('./mock.js');

Vue.prototype.$axios = axios;
axios.defaults.baseURL = 'http://10.35.125.21:8999/openeco'
Vue.config.productionTip = false

Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
