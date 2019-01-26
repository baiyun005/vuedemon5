import Vue from 'vue'
import Cube from './cube-ui'
import App from './App.vue'
import Vant from "./vant"
import router from './Router/router'
import store from './Store/Index'
Vue.use(Vant)

Vue.config.productionTip = false

Vue.use(vant)
new Vue({
  router,
  store,
  Vant,
  Cube,
  render: h => h(App)
}).$mount('#app')
