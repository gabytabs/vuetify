<template>
    <section class="hero is-fullheight">
        <div class="hero-body">
            <div class="container">
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

    export default {
        components: {
            LoginUser
        }
    }
</script>