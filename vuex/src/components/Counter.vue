<template>
    <div>
        <button class="btn btn-primary" @click="increment({ by: 12, duration: 1000 })">Increment</button>
        <button class="btn btn-primary" @click="decrement({ by: 100, duration: 3000 })">Decrement</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        methods: {
            ...mapActions({
                increment: 'asyncIncrement',
                decrement: 'asyncDecrement'
            })
        }
    }
</script>