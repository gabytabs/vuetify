<template>
    <div class="field">
        <div class="control is-expanded">
            <input v-on:keyup.enter.prevent="onSubmit" v-model="todo" class="input"/>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                todo: ''
            }
        },
        methods: {
            onSubmit: function (event) {
                let list = {
                    todo: this.todo,
                    isDone: false,
                    show: true
                };
                this.$emit('addList', list);
            }
        }
    }
</script>

<style>

</style>