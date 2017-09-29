import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main/Root'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'RootMainContent',
      component: Main
    }
  ]
})
