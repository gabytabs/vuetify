<template>
  <div class="todo-lists-container">
    <InputList />
    <section class="lists">
      <div v-for="hisTodo in hisTodos">
        <List :hisTodo="hisTodo" :id="hisTodo['.key']" />
      </div>
    </section>
  </div>
</template>

<script>
  import List from './HisList.vue'
  import InputList from './HisInputList.vue'
  import { mapGetters } from 'vuex'

  export default {
    components: {InputList, List},
    computed: {
      ...mapGetters(['hisTodos'])
    }
  }
</script>
