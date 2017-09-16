<template>
    <div class="field is-grouped">
        <div class="control">
        <input class="input"
               type="text"
               placeholder="Your Email"
               v-model="myEmail"/>
        </div>
        <div class="control">
        <input type="password"
               class="input"
               placeholder="Your Password"
               v-model="myPassword"/>
        </div>
        <div class="control">
        <input type="submit"
               class="button is-light is-warning"
               @click.prevent="login({email: myEmail, password: myPassword})" />
        </div>
        <div class="control">
            <router-link tag="button"
                         class="button is-light is-warning"
                         to="/yoloswagmaster420blazeit">
                Register..
            </router-link>
        </div>
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
                this.$router.push('/auth');
            }
        },

        methods: {
            ...mapActions({
                login: 'loginUser'
            })
        }
    }
</script>