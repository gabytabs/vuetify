<template>
    <ul>
        <li v-for="todo in todos">
            <Todo :todoData="todo" v-if="todo.show === true"> </Todo>
        </li>
    </ul>
</template>

<script>
import { mapGetters } from 'vuex';
import Todo from './Todo.vue';

    export default {
        components: {
            Todo
        },

        computed: {
            ...mapGetters([
                'todos'
            ])
        }
    }

</script>