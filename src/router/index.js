import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'
import MainPage from '@/components/MainPage'

Vue.use(Router)
Vue.use(Vuex)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    }
  ]
})
