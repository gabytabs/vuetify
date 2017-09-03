<template>
  <div id="app">
    <section class="hero is-primary is-medium">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title"> TodoMVC </h1>

          <div class="field">
            <div class="control">
              <TodoInput />
            </div>
          </div>

          <Todos />
          <TodoFilters />

        </div>
      </div>
    </section>
  </div>
</template>

<script>
import TodoInput from './components/TodoInput.vue'
import Todos from './components/Todos.vue'
import TodoFilters from './components/TodoFilters.vue'

  export default {
    components: {
        TodoInput,
        Todos,
        TodoFilters
    }
  }

</script>

<style lang="scss">

</style>
