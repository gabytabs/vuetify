import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import HerLists from '../components/her-lists/HerLists.vue'
import HisLists from '../components/his-lists/HisLists.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomeUnA',
      component: Home
    },
    {
      path: '/her',
      name: 'HerPage',
      component: HerLists
    },
    {
      path: '/his',
      name: 'HisPage',
      component: HisLists
    }
  ]
})
