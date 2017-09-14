<template>
    <div>
        <form>
            <input v-model="pushEmail" />
            <input v-model="pushPassword" />
            <input v-model="pushPasswordConf"/>
            <input type="button"
                   value="Submit"
                   @click.prevent="createUser({ email: pushEmail, password: pushPassword, passwordConf: pushPasswordConf })"/>
        </form>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    import { EventBus } from '../main'

    export default {
        data() {
            return {
                pushEmail: '',
                pushPassword: '',
                pushPasswordConf: ''
            }
        },

        methods: {
            ...mapActions({
                createUser: 'createUser'
            })
        },

        computed: {
            ...mapGetters(['userToken'])
        },

        watch: {
            userToken: function () {
                this.$router.push({ name: 'auth' });
            }
        },
}
</script>