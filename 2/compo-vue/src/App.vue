<template>
  <div id="app">
    <app-user></app-user>
  </div>
</template>

<script>
import User from './components/User.vue'

export default {
  data () {
    return {
//
    }
  },
  components: {
      'app-user': User
  }
}
</script>

<style lang="scss">

</style>
