import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import menu from "./module/menu"
import eleIndex from "./module/eleIndex"
export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules:{
    menu,
    eleIndex
  }
})
