import Vue from 'vue'
import App from './App.vue'
import { store } from '../store/store'
import VueRouter from 'vue-router';

import { routes } from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
   routes,
   mode: 'history'
});

export const EventBus = new Vue();

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});