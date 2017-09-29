<template>
  <div>
  <v-navigation-drawer class="purple lighten-4" v-model="sideNav">
    <v-list class="pa-1">
      <v-list-tile>
        <v-list-tile-action>
          <v-icon>account_balance</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          Hey!
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
  <!-- Navigation -->
  <v-toolbar class="deep-purple darken-1">
    <!-- Side Icon -->
    <v-toolbar-side-icon
      @click.native.stop="sideNav = !sideNav">
    </v-toolbar-side-icon>
    <!-- End of Side Icon-->
    <v-toolbar-title>HHH</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>search</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>apps</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>refresh</v-icon>
    </v-btn>
  </v-toolbar>
  <!-- End of Nav component-->
  </div>
</template>

<script>
  export default {
    data () {
      return {
        sideNav: false
      }
    }
  }
</script>
