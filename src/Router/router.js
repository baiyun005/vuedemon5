import Vue from 'vue'
import Router from 'vue-router'

import Index from "../views/Index"
import Mershopping from "../views/Mershopping"
Vue.use(Router)
<<<<<<< HEAD
=======


import Foods from "../views/Foods"
import item1Lists from "../views/foods/item1Lists"

>>>>>>> feature_foods
export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:"/",
      component:Index
<<<<<<< HEAD
    },
    {
      path:"/shop",
      component:Mershopping
=======
    },{
      path:"/foods",
      component:Foods,
      children:[
        {
          path:"/item1lists",
          component:item1Lists
        }
      ]
>>>>>>> feature_foods
    }
  ]
})
