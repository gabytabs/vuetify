<template>
    <div class="columns is-multiline metrics-section-padding">
        <div v-for="metric in searchedMetrics" class="column is-one-third">
            <Metric :metric="metric"> </Metric>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Metric from './Metric.vue';

    export default {

        components: {
          Metric
        },

        computed: {
            ...mapGetters(['searchedMetrics'])
        }

    }
</script>

<style>
    .metrics-section-padding{
        padding-top: 25px;
    }
</style>