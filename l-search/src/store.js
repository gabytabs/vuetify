import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios'
import _ from 'lodash';

Vue.use(Vuex, axios, VueAxios);

export const store = new Vuex.Store({

   state: {
       metrics: {},
       searchedMetrics: {}
   },

   getters: {
       metrics: state => state.metrics,
       searchedMetrics: state => state.searchedMetrics
   },

   mutations: {
       bindApi (state) {
           axios.get('https://ladder-api-app.herokuapp.com/api/v1/industries')
               .then( response => {
                   state.metrics = response.data.metrics;
               })
       },
       search(state, payload){
           let searchMetric = [];

           _.find(state.metrics, function (metric) {
               if(metric.metricName.toLowerCase() === payload) {
                   searchMetric.push(metric);
               }
           });
           state.searchedMetrics = searchMetric;
       },
   },

    actions: {
       binddingApi(context) {
           context.commit('bindApi');
       },
       searchingMetric(context, payload){
           context.commit('search', payload);
       }
    }

});