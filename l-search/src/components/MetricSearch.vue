<template>
    <div>
        <input v-model.trim="searchMetric"
               @keyup.enter.prevent="searchingForThis(metricFilter)" />
    </div>
</template>

<script>
import { mapActions } from 'vuex';

    export default {

        data(){
            return{
                searchMetric: ''
            }
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