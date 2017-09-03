<template>
    <div>
        <button @click="showAll(todos)"> All </button>
        <button @click="showIncomplete(todos)"> Active </button>
        <button @click="showCompleted(todos)"> Completed </button>
    </div>
</template>

<script>
import { todosRef } from '../store'
import { mapGetters } from 'vuex';

    export default {
        computed: {
            ...mapGetters([ 'todos' ])
        },

        methods: {
            showAll: function (todos) {
                todos.map( todo => {
                    todosRef.child(todo['.key']).child('show').set(true);
                });
            },
            showIncomplete: function (todos) {
                todos.map( todo => {
                    if (todo.isCompleted !== false) {
                        todosRef.child(todo['.key']).child('show').set(false);
                    } else {
                        todosRef.child(todo['.key']).child('show').set(true);
                    }
                });
            },
            showCompleted: function (todos) {
                todos.map( todo => {
                    if (todo.isCompleted !== true) {
                        todosRef.child(todo['.key']).child('show').set(false);
                    } else {
                        todosRef.child(todo['.key']).child('show').set(true);
                    }
                });
            }
        }
    }
</script>