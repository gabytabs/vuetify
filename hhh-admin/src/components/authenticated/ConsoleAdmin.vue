<template>
    <router-view> </router-view>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        computed: {
            ...mapGetters(['userToken'])
        },

        mounted() {
            if(this.userToken === "") {
                this.pushToHome();
            }
        },

        methods: {
            pushToHome: function () {
                this.$router.push('/')
            }
        }
    }
</script>