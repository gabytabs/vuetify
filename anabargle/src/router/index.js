import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/components/main/Root'
import Repo from '@/components/main/Repo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'RootMainContent',
      component: Main
    },
    {
      path: '/:id',
      name: 'RepoSelected',
      component: Repo
    }
  ]
})
