import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'
import vSelect from 'vue-select'
import MainPage from '@/components/MainPage'

Vue.use(Router)
Vue.use(Vuex)
Vue.component('v-select', vSelect)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    }
  ]
})
