<template>
  <v-app dark>
     <Navbar> </Navbar>
    <router-view></router-view>
  </v-app>
</template>

<script>
  import Navbar from './components/Navbar.vue'

  export default {
    components: {
      Navbar
    },
    data () {
      return {

      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
