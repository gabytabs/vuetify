<template>
  <div class="input-todo">
    <input v-model="todolist" @keyup.enter="addTodo" placeholder="Get Milk"/>
  </div>
</template>

<script>
  import { herTodosRef } from '../../store/index'
  import { formattedDate } from '../../store/date_today'

  export default {
    data () {
      return {
        todolist: ''
      }
    },
    methods: {
      addTodo: function () {
        herTodosRef.push({
          todolist: this.todolist,
          date: formattedDate,
          isDone: false
        })
        this.todolist = ''
      }
    },
    mounted () {
      this.$store.dispatch('setHerTodoRef', herTodosRef)
    }
  }
</script>
