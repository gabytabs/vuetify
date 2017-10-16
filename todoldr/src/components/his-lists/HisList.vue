<template>
  <section class="list">
    <input type="checkbox"
           :checked="hisTodo.isDone"
           @click="taskIsDone" />

    {{ hisTodo.todolist }}

  </section>
</template>

<script>
  import { hisTodosRef } from '../../store/index'
  import { mapGetters } from 'vuex'

  export default {
    props: ['hisTodo', 'id'],
    computed: {
      ...mapGetters(['hisTodos'])
    },
    methods: {
      taskIsDone: function () {
        if (this.hisTodo.isDone === false) {
          hisTodosRef.child(this.id).child('isDone').set(true)
        } else {
          hisTodosRef.child(this.id).child('isDone').set(false)
        }
      }
    }
  }
</script>
