<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Routing</h1>
                <hr>
                <SampleHeader></SampleHeader>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import SampleHeader from './components/SampleHeader.vue'

    export default {
        components: {
            SampleHeader
        }
    }
</script>

<style>
</style>
