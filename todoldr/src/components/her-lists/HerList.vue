<template>
  <section class="list">
    <input type="checkbox"
           :checked="herTodo.isDone"
           @click="taskIsDone" />

    {{ herTodo.todolist }}

  </section>
</template>

<script>
  import { herTodosRef } from '../../store/index'
  import { mapGetters } from 'vuex'

  export default {
    props: ['herTodo', 'id'],
    computed: {
      ...mapGetters(['herTodos'])
    },
    methods: {
      taskIsDone: function () {
        if (this.herTodo.isDone === false) {
          herTodosRef.child(this.id).child('isDone').set(true)
        } else {
          herTodosRef.child(this.id).child('isDone').set(false)
        }
      }
    }
  }
</script>
