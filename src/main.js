import Vue from 'vue'
import Cube from './cube-ui'
import App from './App.vue'
import vant from "./vant"
import router from './Router/router'
import store from './Store/Index'
import './vant'


import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vant,
  Cube,
  render: h => h(App)
}).$mount('#app')
