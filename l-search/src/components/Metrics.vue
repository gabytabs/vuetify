<template>
    <div>
        <div>

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

        data() {
            return {
                show: false,
                setShow: searchedMetrics
            }
        },

        watch: {
            setShow: function() {
                this.show = true;
            }
        },

        computed: {
            ...mapGetters(['searchedMetrics', 'metrics'])
        }

    }
</script>