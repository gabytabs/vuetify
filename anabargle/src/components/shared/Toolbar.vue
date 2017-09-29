<template>
  <div class="toolbar-container">
    <v-navigation-drawer v-model="drawer" temporary>
        <!-- Navdrawer to be thought about -->
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
  export default {
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
