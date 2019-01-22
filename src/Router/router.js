import Vue from 'vue'
import Router from 'vue-router'

import Index from "../views/Index"
Vue.use(Router)


import Foods from "../views/Foods"
import item1Lists from "../views/foods/item1Lists"

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:"/",
      component:Index
    },{
      path:"/foods",
      component:Foods,
      children:[
        {
          path:"/item1lists",
          component:item1Lists
        }
      ]
    }
  ]
})
