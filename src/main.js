import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './Router/router'
import store from './Store/Index'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
