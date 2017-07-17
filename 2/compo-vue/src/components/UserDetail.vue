<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User name: {{ name }}</p>
        <div v-for="color in colorname">
            {{ color.colorName }}
        </div>
    </div>
</template>

<script>
    export default {
        props: ['name', 'colorname']
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
