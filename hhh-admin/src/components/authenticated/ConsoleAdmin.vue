<template>
    <router-view> </router-view>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        computed: {
            ...mapGetters(['userToken'])
        },

        data() {
            return {

            }
        }

        methods: {
            pushToHome: function () {
                this.$router.push('/')
            }
        }
    }
</script>