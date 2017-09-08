<template>
    <div class="search-section">
        <div class="field input-container">
            <div class="subtitle"> What are you looking for? </div>
            <div class="control">
                <input v-model.trim="searchMetric"
                       class="input has-text-centered is-medium"
                       placeholder="Ex. CTR facebook"
                       @keyup.enter.prevent="searchingForThis(metricFilter)" />
            </div>
        </div>
        <div class="field is-grouped">
            <div class="control">
                <button @click="resetMetric"
                    class="button is-success is-medium is-outlined"> Show All Metrics </button>
            </div>
            <div class="control">
                <div class="subtitle metric-length"> Total: {{ metricLength }} </div>
            </div>
        </div>
        <div class="field">
            <div class="subtitle sort-metrics-title"> Sort Metrics: </div>
            <div class="control sort-control-item">
                <button @click="sortByRecency"
                        class="button is-success is-medium is-outlined">
                    Sort by Recency
                </button>
            </div>
            <div class="control sort-control-item">
                <button @click="sortByOldness"
                        class="button is-success is-medium is-outlined">
                    Sort by Oldness
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { EventBus } from '../main';

    export default {

        data(){
            return{
                searchMetric: ''
            }
        },

        mounted(){
            EventBus.$on('resetInput',() => {
                this.searchMetric = '';
            } );
        },

        computed: {
            ...mapGetters([ 'searchedMetrics']),
            metricFilter: function () {
                return this.searchMetric.toLowerCase();
            },
            metricLength: function () {
                return Object.keys(this.searchedMetrics).length;
            }
        },

        methods: {
            ...mapActions({
                searchingForThis: 'searchingMetric',
                resetMetric: 'displayAllMetrics',
                sortByRecency: 'sortByRecency',
                sortByOldness: 'sortByOldness'
            })
        }
    }
</script>

<style scoped lang="scss">
    .search-section{
        position: fixed;
        top: 25%;
    }
    .input-container {
        padding-top: 25px;
        padding-bottom: 15px;
    }
    .metric-length {
        padding-top: 10px;
        position: relative;
        left: 20px;
    }
    .sort-metrics-title {
        padding-top: 15px;
    }
    .sort-control-item {
        padding-top: 5px;
    }
</style>