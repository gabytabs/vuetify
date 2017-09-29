<template>
  <div class="repo-container">
    <v-list-tile v-for="repo in repos"
                 :key="repo['.key']"
                 @click="">
      <v-list-tile-action>
        <v-icon>keyboard_arrow_right</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>{{ repo.repoName }}</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
  </div>
</template>

<script>
  import { reposRef } from '../../store/store'
  import { mapGetters } from 'vuex'
  export default {
    data () {
      return {
        repoName: ''
      }
    },
    computed: {
      ...mapGetters(['repos'])
    },
    mounted () {
      this.$store.dispatch('setReposRef', reposRef)
    }
  }
</script>
