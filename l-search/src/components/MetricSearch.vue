<template>
    <div>
        <div class="field input-container">
            <div class="subtitle has-text-centered"> What are you looking for? </div>
            <div class="control">
                <input v-model.trim="searchMetric"
                       class="input has-text-centered is-medium"
                       placeholder="Ex. CTR"
                       @keyup.enter.prevent="searchingForThis(metricFilter)" />
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
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
            metricFilter: function () {
                return this.searchMetric.toLowerCase();
            }
        },

        methods: {
            ...mapActions({
                searchingForThis: 'searchingMetric'
            })
        }
    }
</script>

<style lang="scss">
    .input-container{
        padding-top: 25px;
    }
</style>