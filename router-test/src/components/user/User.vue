<template>
    <div>
        <h1>The User Page</h1>

        <button @click="navigateToHome">
            Go To Home
        </button>

    </div>
</template>

<script>
    export default {
        methods: {
            navigateToHome() {
                this.$router.push('/');
            }
        }
    }
</script>