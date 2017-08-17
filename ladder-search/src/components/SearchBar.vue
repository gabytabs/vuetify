<template>
    <div class="field">
        <label class="label is-large benchmark-label">Marketing Benchmarks</label>
        <div class="control has-icons-left has-icons-right">
            <input v-model="toBeSearchMetric" class="input is-large" placeholder="CPC, facebook, ctr.."/>
            <span class="icon is-small is-left">
              <i class="fa fa-search"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fa fa-check"></i>
            </span>
        </div>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                toBeSearchMetric: ""
            }
        },

        watch: {
            toBeSearchMetric(search) {
                this.searchingMetric(search);
            }
        },

        methods: {
            searchingMetric(metric) {
                this.$emit('searchMetric', metric);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .benchmark-label {
        color: white;
    }

</style>