<template>
    <div class="field has-addons">
        <div class="control">
            <input type="checkbox" v-on:click="todoIsDone" />
        </div>
        <div class="control">
            <h1>{{list.todo}}</h1>
        </div>
        <div class="control">
            <button v-on:click="removeTodo">Delete</button>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['list'],
        methods: {
            todoIsDone() {
                this.$emit('todoIsDone', this.list);
            },
            removeTodo() {
                this.$emit('remove');
            }
        }
    }
</script>

<style>

</style>