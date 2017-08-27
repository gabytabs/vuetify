<template>
  <div id="app">
    <input v-model.trim="newTodoText" @keyup.enter="addTodo" placeholder="Add new todo">
    <ul>
      <li v-for="todo in todos">
        <input :value="todo.text" @input="updateTodoText(todo, $event.target.value)">
      </li>
    </ul>
  </div>
</template>

<script>
import Vuex from 'vuex';
import { todosRef } from './store';

  export default {
    computed: Vuex.mapGetters([ 'todos' ]),

    data () {
        return {
            newTodoText: ''
        }
    },

      methods: {
          // Database manipulation are done directly here for the sake of simplicity, but it makes more sense to use actions instead
          removeTodo: function(todo) {
              todosRef.child(todo['.key']).remove()
          },
          addTodo: function() {
              if (this.newTodoText.trim()) {
                  todosRef.push({
                      text: this.newTodoText,
                  });
                  this.newTodoText = ''
              }
          },
          updateTodoText: function (todo, newText) {
              todosRef.child(todo['.key']).child('text').set(newText)
          },
      },

      mounted() {
          console.log(this.todosRef);
          this.$store.dispatch('setTodosRef', todosRef);
      }
  }

</script>

<style lang="scss">

</style>
