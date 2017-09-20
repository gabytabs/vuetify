<template>
    <section class="hero is-fullheight">
        <div class="hero-body">
            <div class="container">
                <div :hidden="errorHidden" class="notification is-danger">
                    <button @click="hideError" class="delete"></button>
                    {{errorMsg}}
                </div>
                <h1 class="title">
                    Hey!
                </h1>
                <h2 class="subtitle">
                    Uploading more `ecchi-ness`, I see..
                </h2>
                <div class="login-form-section">
                    <LoginUser> </LoginUser>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import LoginUser from './LoginUser.vue'
    import { mapGetters } from 'vuex'

    export default {
        components: {
            LoginUser
        },

        data(){
            return {
                errorHidden: true,
                errorMsg: ''
            }
        },

        computed: {
            ...mapGetters(['errorData'])
        },

        watch: {
            errorData: function () {
                this.showErrorMsg()
            }
        },

        methods: {
            showErrorMsg: function () {
                this.errorMsg = 'Error: Please log in your correct authentication';
                this.errorHidden = false;
            },
            hideError: function () {
                this.errorHidden = true;
            }
        }
    }
</script>