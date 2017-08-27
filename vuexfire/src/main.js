import Vue from 'vue'
import App from './App.vue'

import Vuex from 'vuex'
import VuexFire from 'vuexfire'
import { store } from './store'

Vue.use(Vuex, VuexFire);

new Vue({
  el: '#app',
  store,
  render: h => h(App)
});
