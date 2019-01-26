import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './Router/router'
import store from './Store/Index'
import vant from './vant'

Vue.config.productionTip = false

Vue.use(vant)
new Vue({
  router,
  store,
  vant,
  render: h => h(App)
}).$mount('#app')
