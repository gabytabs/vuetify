<template>
  <div class="todo-lists-container">
    <InputList />
    <section class="lists">
      <div v-for="herTodo in herTodos">
        <List :herTodo="herTodo" :id="herTodo['.key']" />
      </div>
    </section>
  </div>
</template>

<script>
  import List from './HerList.vue'
  import InputList from './HerInputList.vue'
  import { mapGetters } from 'vuex'

  import _ from 'lodash'

  export default {
    components: {InputList, List},
    computed: {
      ...mapGetters(['herTodos']),
      doneTasks: function () {
        return _.filter(this.herTodos, {'isDone': true})
      }
    },
    watch: {
      doneTasks: function () {
        this.storeAllDoneTask()
      }
    },
    methods: {
      storeAllDoneTask: function () {
        this.$store.dispatch('pushToCompleteHerTasks', this.doneTasks)
      }
    }
  }
</script>
