import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios'
import _ from 'lodash';

import { EventBus } from "./main";

Vue.use(Vuex, axios, VueAxios);

export const store = new Vuex.Store({

   state: {
       metrics: {},
       searchedMetrics: {}
   },

   getters: {
       searchedMetrics: state => state.searchedMetrics
   },

   mutations: {
       bindApi (state) {
           axios.get('https://ladder-api-app.herokuapp.com/api/v1/industries')
               .then( response => {
                   state.metrics = response.data.metrics;
                   state.searchedMetrics = response.data.metrics;
               })
               .catch(function (error) {
                   state.searchedMetrics = false;
               });
       },
       search(state, payload){
           let searchMetric = [];
           let mets = state.metrics;

           _.find(state.metrics, function (metric) {
               switch(payload) {
                   case metric.metricName.toLowerCase():
                       searchMetric.push(metric);
                       break;
                   case metric.platform.toLowerCase():
                       searchMetric.push(metric);
                       break;
                   case metric.industry.toLowerCase():
                       searchMetric.push(metric);
                       break;
                   case `${metric.metricName} ${metric.platform}`.toLowerCase():
                       searchMetric.push(metric);
                       break;
                   case `${metric.platform} ${metric.metricName}`.toLowerCase():
                       searchMetric.push(metric);
                       break;
                   case `${metric.metricName} ${metric.industry}`.toLowerCase():
                       searchMetric.push(metric);
                       break;
                   case `${metric.industry} ${metric.metricName}`.toLowerCase():
                       searchMetric.push(metric);
                       break;
                   case `${metric.platform} ${metric.industry}`.toLowerCase():
                       searchMetric.push(metric);
                       break;
                   case `${metric.industry} ${metric.platform}`.toLowerCase():
                       searchMetric.push(metric);
                       break;
               }
           });
           state.searchedMetrics = searchMetric;
           EventBus.$emit('resetInput');
       },
       resetMetrics: function (state) {
           state.searchedMetrics = state.metrics;
       },
       sortByRecency: function (state) {
           state.searchedMetrics = _.sortBy(state.searchedMetrics, function (metric) {
               return metric.sourceDateFrom;
           }).reverse();
       },
       sortByOldness: function (state) {
           state.searchedMetrics = _.sortBy(state.searchedMetrics, function (metric) {
               return metric.sourceDateFrom;
           });
       }
   },

    actions: {
       binddingApi(context) {
           context.commit('bindApi');
       },
       searchingMetric(context, payload){
           context.commit('search', payload);
       },
       displayAllMetrics(context) {
           context.commit('resetMetrics');
       },
       sortByRecency(context) {
           context.commit('sortByRecency');
       },
       sortByOldness(context) {
           context.commit('sortByOldness');
       }
    }

});