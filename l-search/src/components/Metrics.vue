<template>
    <transition-group
            name="custom-classes-transition"
            enter-active-class="animated zoomIn"
            leave-active-class="animated zoomOut"
            class="columns is-multiline metrics-section-padding">
        <div v-for="metric in searchedMetrics" class="column is-one-third" :key="metric.id">
            <Metric :metric="metric"> </Metric>
        </div>
    </transition-group>
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