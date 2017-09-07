<template>
  <div id="app">
    <div class="container is-fluid">
      <div class="columns">
        <div class="column is-one-quarter">
          <MetricSearch></MetricSearch>
        </div>
        <div class="column">
          <Metrics></Metrics>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MetricSearch from './components/MetricSearch.vue'
import Metrics from './components/Metrics.vue'

export default {

    components: {
        MetricSearch,
        Metrics
    },

    created(){
        this.$store.dispatch('binddingApi');
    }

}
</script>

<style lang="scss">

</style>
