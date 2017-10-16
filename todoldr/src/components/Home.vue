<template>
  <section class="index-tasks">
    <div class="container">
      <div class="date-section">
        <div class="title"> Date Today: {{ today }} </div>
      </div>
      <div class="columns">
        <div class="column is-half">
          <div class="box">
            <div class="title">Her</div>
            <div class="undone-container">
              <div class="box box-margin">
                <h1 class="title has-text-centered">Undone</h1>
                <div class="lists" v-for="herTodo in herUndoneTasks">
                  <UndoneLists :herTodo="herTodo"/>
                </div>
              </div>
            </div>
            <div class="undone-container">
              <div class="box box-margin">
                <h1 class="title has-text-centered">Done</h1>
                <div class="lists" v-for="(herDoneTask, i) in herDoneTasks">
                  <DoneLists :doneTask="herDoneTask" :ix="i"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-half">
          <div class="box">
            <div class="title">Him</div>
            <div class="undone-container">
              <div class="box box-margin">
                <h1 class="title has-text-centered">Undone</h1>
                <div class="lists" v-for="herTodo in hisUndoneTasks">
                  <UndoneLists :herTodo="herTodo"/>
                </div>
              </div>
            </div>
            <div class="undone-container">
              <div class="box box-margin">
                <h1 class="title has-text-centered">Done</h1>
                <div class="lists" v-for="(hisDoneTask, i) in hisDoneTasks">
                  <DoneLists :doneTask="hisDoneTask" :ix="i"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { formattedDate } from '../store/date_today'
  import { hisTodosRef, herTodosRef } from '../store/index'
  import _ from 'lodash'
  // Components
  import UndoneLists from './UndoneLists.vue'
  import DoneLists from './DoneLists.vue'

  export default {
    components: { UndoneLists, DoneLists },
    data () {
      return {
        today: formattedDate
      }
    },
    computed: {
      ...mapGetters(['herTodos', 'hisTodos']),
      herDoneTasks: function () {
        return _.filter(this.herTodos, {'isDone': true})
      },
      herUndoneTasks: function () {
        return _.filter(this.herTodos, {'isDone': false})
      },
      hisDoneTasks: function () {
        return _.filter(this.hisTodos, {'isDone': true})
      },
      hisUndoneTasks: function () {
        return _.filter(this.hisTodos, {'isDone': false})
      }
    },
    mounted () {
      this.$store.dispatch('setHisTodoRef', hisTodosRef)
      this.$store.dispatch('setHerTodoRef', herTodosRef)
    }
  }
</script>

<style>
  .date-section {
    margin: 50px 0 25px 0;
  }
  .todo-text {
    font-size: 25px;
  }
  .box-margin {
    margin: 5px 0 15px 0;
  }
</style>
