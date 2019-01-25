import Vue from 'vue'
import Router from 'vue-router'

import Index from "../views/Index"
import Mershopping from "../views/Mershopping"
Vue.use(Router)
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:"/",
      component:Index
    },
<<<<<<< HEAD
=======
    {
      path:"/shop",
      component:Mershopping
    }
>>>>>>> shop
  ]
})
