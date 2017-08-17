import Vue from 'vue'
import App from './App.vue'
import _ from 'lodash'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios, _);

new Vue({
  el: '#app',
  render: h => h(App)
})
