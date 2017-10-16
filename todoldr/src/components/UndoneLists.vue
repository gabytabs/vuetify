<template>
  <div class="her-lists">
    <div class="todo-container">
      <div class="todo-text">
        {{herTodo.todolist}}
      </div>
      <div class="done-icon is-pulled-right">
        {{day}}
      </div>
    </div>
  </div>
</template>

<script>
  import { formattedDate } from '../store/date_today'

  export default {
    props: ['herTodo'],
    data () {
      return {
        today: formattedDate
      }
    },
    computed: {
      day: function () {
        if (this.herTodo.date === this.today) {
          return 'Today'
        } else {
          return this.herTodo.date
        }
      }
    }
  }
</script>

<style>
  .her-lists {
    padding: 15px;
    margin: 10px 0 10px 0;
    /*border: solid 1px #000;*/
    background-color: #e37222;
    color: white;
  }
  .todo-text {
    display: inline;
  }
  .done-icon {
    display: inline;
  }
</style>
