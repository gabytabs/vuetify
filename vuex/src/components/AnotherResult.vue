<template>
    <div>
    <p>Number of clicks: {{ clicks }}</p>
    <p>Double the counter is: {{ counter }}</p>
    <p> This is a Test: {{ yoloswag }} </p>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        //mapGetters will map the getters in the Store
        computed: {
            //Will have to 'npm install --save-dev babel-preset-stage-2
            ...mapGetters({
                clicks: 'stringCounter',
                counter: 'doubleCounter'
            }),
            yoloswag () {
                return 'asdsio';
            }
        }
    }
</script>