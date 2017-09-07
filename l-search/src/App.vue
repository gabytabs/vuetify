<template>
  <div id="app">
    <MetricSearch></MetricSearch>
    <Metrics></Metrics>
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
