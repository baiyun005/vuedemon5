import Vue from 'vue'
import Router from 'vue-router'
import Index from "../views/Index"
import login from "../views/login"
import changepw from "../views/changepw"
Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:"/",
      component:Index
    },{
      path:'/login',
      component:login,
    },{
      path:'/changepw',
      component:changepw
    }
  ]
})
