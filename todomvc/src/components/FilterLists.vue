<template>
    <div>
        <button v-on:click="makeAllListTrue"> All </button>
        <button v-on:click="makeUndoneTrue"> Active </button>
        <button v-on:click="makeDoneTrue"> Completed </button>
    </div>
</template>

<script>
    export default {
        methods: {
            makeAllListTrue() {
                this.$emit('showAll');
            },
            makeDoneTrue() {
                this.$emit('showDone');
            },
            makeUndoneTrue() {
                this.$emit('showUndone');
            }
        }
    }
</script>

<style>

</style>