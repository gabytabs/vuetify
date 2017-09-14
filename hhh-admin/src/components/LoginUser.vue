<template>
    <div>
        <input v-model="myEmail"/>
        <input type="password"
               v-model="myPassword"/>
        <input type="submit" @click.prevent="login({email: myEmail, password: myPassword})" />
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'

    export default {
        data() {
            return{
                myEmail: "",
                myPassword: ""
            }
        },

        computed: {
            ...mapGetters(['userToken'])
        },

        watch: {
            userToken: function () {
                this.$router.push({ name: 'auth', params: { id: this.userToken } });
            }
        },

        methods: {
            ...mapActions({
                login: 'loginUser'
            })
        }
    }
</script>