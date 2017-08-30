<template>
    <div>
        <h1>The User Page</h1>
        <hr>
        <button @click="navigateToHome">
            Go To Home
        </button>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        methods: {
            navigateToHome() {
//                this.$router.push('/');
//                this.$router.push({ path: '/' });
                this.$router.push({ name: 'root' })
            }
        }
    }
</script>