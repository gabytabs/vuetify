<template>
  <v-app dark>
    <Toolbar />

  </v-app>
</template>

<script>
  import Toolbar from './components/shared/Toolbar.vue'

  export default {
    components: {
      Toolbar
    },
    data () {
      return { }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
