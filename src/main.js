import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import vant from "./vant"
import router from './Router/router'
import store from './Store/Index'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vant,
  render: h => h(App)
}).$mount('#app')
