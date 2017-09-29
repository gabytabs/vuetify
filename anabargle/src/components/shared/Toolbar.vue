<template>
  <div class="toolbar-container">
    <v-navigation-drawer v-model="drawer" temporary>
      <v-list class="pa-1">
        <v-list-tile avatar>
          <!--<v-list-tile-avatar>-->
          <!--<img src="https://randomuser.me/api/portraits/men/85.jpg" />-->
          <!--</v-list-tile-avatar>-->
          <v-list-tile-content>
            <v-list-tile-title>User's Name</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-divider></v-divider>
      <Repos />
    </v-navigation-drawer>

    <v-toolbar>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>GitItDone</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat>
        <v-icon class="icon-toolbar">add</v-icon>
          Sign Up
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
  import Repos from '../main/Repos.vue'

  export default {
    components: {
      Repos
    },
    data () {
      return {
        drawer: false
      }
    }
  }
</script>

<style scoped>
  .icon-toolbar {
    margin-right: 3px;
  }
</style>
