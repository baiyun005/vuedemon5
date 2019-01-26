import Vue from 'vue'
import Router from 'vue-router'

import Index from "../views/Index"
import Position from '../views/Position'
import Search from '../views/Search'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:"/",
      component:Index
    },
    {
      path:'/position',
      component:Position
    },
    {
      path:'/search/:id',
      component:Search
    }
  ]
})
