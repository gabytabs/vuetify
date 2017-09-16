<template>
    <section class="hero is-fullheight">
        <div class="hero-body">
            <div class="container">
                <h1 class="title">
                    Register!
                </h1>
                <div class="field is-grouped">
                    <div class="control">
                        <input class="input"
                               type="text"
                               placeholder="Your Email"
                                v-model="pushEmail" />
                    </div>
                    <div class="control">
                        <input  type="password"
                                class="input"
                                placeholder="Your Password"
                                v-model="pushPassword" />
                    </div>
                    <div class="control">
                        <input  type="password"
                                class="input"
                                placeholder="Confirm Password"
                                v-model="pushPasswordConf"/>
                    </div>
                    <div class="control">
                        <input type="submit"
                            class="button is-light is-warning"
                            @click.prevent="createUser({ email: pushEmail, password: pushPassword, passwordConf: pushPasswordConf })"/>
                    </div>
                    <div class="control">
                        <router-link tag="input"
                                     type="button"
                                     value="Log In Instead.."
                                     class="button is-light is-info"
                                     to="/"> </router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
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
            ...mapActions('user', {
                userAuth: 'createUser'
            })
        },

        computed: {
            ...mapGetters(['userToken'])
        },

        watch: {
            userToken: function () {
                this.$router.push('/auth');
            }
        },
}
</script>