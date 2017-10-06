<template>
  <v-app dark>
    <Toolbar />
    <router-view></router-view>
    <Pixels />
  </v-app>
</template>

<script>
  import Toolbar from './components/shared/Toolbar.vue'
  import Pixels from './components/shared/Pixels.vue'

  export default {
    components: {
      Toolbar,
      Pixels
    },
    data () {
      return { }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
