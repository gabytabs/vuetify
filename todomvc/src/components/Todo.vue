<template>
    <div>
        <button @click="removeTodo(todoData)"> Delete </button>
        {{ todoName }}
        <button @click="completed(todoData)"> Completed </button>
    </div>
</template>

<script>
import { todosRef } from '../store'

    export default {
        props:[ 'todoData' ],

        data () {
            return {
                todoName: this.todoData.todo
            }
        },

        methods: {
            removeTodo: function(todo) {
                todosRef.child(todo['.key']).remove()
            },
            completed: function (todo) {
                let isCompleted = todosRef.child(todo['.key']).child('isCompleted');

                if( todo.isCompleted === false ) {
                    isCompleted.set(true);
                } else {
                    isCompleted.set(false);
                }
            }
        }
    }
</script>