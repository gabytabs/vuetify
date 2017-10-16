<template>
  <div class="her-lists">
    <div class="todo-container">
      <div class="todo-text">
        {{doneTask.todolist}}
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
    props: ['doneTask'],
    data () {
      return {
        today: formattedDate
      }
    },
    computed: {
      day: function () {
        if (this.doneTask.date === this.today) {
          return 'Today'
        } else {
          return this.doneTask.date
        }
      }
    }
  }
</script>

<style scoped>
  .her-lists {
    padding: 15px;
    margin: 10px 0 10px 0;
    /*border: solid 1px #000;*/
    background-color: #66b9bf;
    color: white;
  }
  .todo-text {
    display: inline;
  }
  .done-icon {
    display: inline;
  }
</style>
