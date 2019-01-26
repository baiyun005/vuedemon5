import Vue from 'vue'
import Cube from './cube-ui'
import App from './App.vue'
import vant from "./vant"
import router from './Router/router'
import store from './Store/Index'
<<<<<<< HEAD
import vant from './vant'
=======
import './vant'


import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant)

>>>>>>> 780ecacf2568d5ddc1293364f8c882e0dde98048
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vant,
<<<<<<< HEAD
=======
  Cube,
>>>>>>> 780ecacf2568d5ddc1293364f8c882e0dde98048
  render: h => h(App)
}).$mount('#app')
