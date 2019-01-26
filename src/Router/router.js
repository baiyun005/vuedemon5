import Vue from 'vue'
import Router from 'vue-router'
import Index from "../views/Index"
<<<<<<< HEAD
import Order from '../views/Order'
=======
import login from "../views/login"
import changepw from "../views/changepw"
import Mershopping from "../views/Mershopping"
>>>>>>> 780ecacf2568d5ddc1293364f8c882e0dde98048
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
<<<<<<< HEAD
    },
    {
      path:"/order",
      component:Order
=======
    },{
      path:'/login',
      component:login,
    },{
      path:'/changepw',
      component:changepw
    },
    {
      path:"/shop",
      component:Mershopping
    },{
      path:"/foods",
      component:Foods,
      children:[
        {
          path:"/item1lists",
          component:item1Lists
        }
      ]
>>>>>>> 780ecacf2568d5ddc1293364f8c882e0dde98048
    }
  ]
})
