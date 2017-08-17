<template>
  <div id="app">
    <section class="hero is-primary is-medium">
      <div class="hero-body">
        <div class="container">
          <SearchBar @searchMetric="searchingMetric"></SearchBar>
        </div>
      </div>
    </section>
    <section class="metric-section">
      <div class="container">
        <div class="columns is-multiline">
          <Metrics class="column is-one-third" v-for="metricsData in selectedMetrics" :key="metrics.id" :metric="metricsData"></Metrics>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import _ from 'lodash';
import axios from 'axios';

//Components
import SearchBar from './components/SearchBar.vue'
import Metrics from './components/Metrics.vue'

export default {
  name: 'app',

  components: {
      SearchBar,
      Metrics
  },

  data () {
      return {
          metrics: [],
          metricSearched: "",
          selectedMetrics: []
      }
  },

  mounted () {
    axios.get('https://ladder-api-app.herokuapp.com/api/v1/industries')
        .then(response => {
            this.metrics = response.data.metrics;
        })
  },

  methods: {
    searchingMetric: function (search) {
      this.metricSearched = search;
      this.mapMetric();
    },
    mapMetric: function() {
        _.map(this.metrics, this.transformMetric);
    },
    transformMetric: function (metric) {

        var self = this;

        let filteredMetricName = metric.metricName.toUpperCase();
        let filteredIndustry = metric.industry.toUpperCase();
        let filteredPlatform = metric.platform.toUpperCase();

        //Search Data Filtering Var
        let filteredSearch = this.metricSearched.toUpperCase();

        if(filteredMetricName === filteredSearch || filteredIndustry === filteredSearch || filteredPlatform === filteredSearch && filteredSearch !== null) {
            self.selectedMetrics.push(metric);
        } else if(filteredSearch === "") {
            self.removeAllMetric();
        }
    },
    removeAllMetric: function () {
        this.selectedMetrics = [];
    }
  }

}
</script>

<style lang="scss">

  .metric-section{
    padding-top: 30px;
  }
  .is-text-centered{
    text-align: center;
  }

</style>
