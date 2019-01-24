import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './Router/router'
import store from './Store/Index'


import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
