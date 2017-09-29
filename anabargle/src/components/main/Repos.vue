<template>
  <div class="repo-container">
    <v-list-tile v-for="repo in repos"
                 :key="repo['.key']"
                 class="lists-section"
                 @click="">
      <router-link tag="v-list-tile-content"
                   :to="{ name: 'RepoSelected', params: {id: repo['.key']}}">
        <v-list-tile-title>{{ repo.repoName }}</v-list-tile-title>
      </router-link>
    </v-list-tile>
    <div class="button-container">
      <v-btn absolute error fab medium dark
             @click.stop="showCreateRepoForm"
             class="add-repo-button">
        <v-icon>add</v-icon>
      </v-btn>
      <div class="repo-form-container">
        <v-dialog persistent v-model="showForm">
          <v-card>
            <v-card-title>
              <div class="headline"> Create Repository </div>
            </v-card-title>
            <v-card-text>
              <v-text-field active label="Name of Repository" v-model="repoName" required></v-text-field>
            </v-card-text>
            <v-spacer></v-spacer>
            <v-btn class="blue--text darken-1"
                   flat="flat"
                   @click.native="showCreateRepoForm">Back</v-btn>
            <v-btn class="blue--text darken-1"
                   flat="flat"
                   @click.native="addRepo">Submit</v-btn>
          </v-card>
        </v-dialog>
      </div>
    </div>
  </div>
</template>

<script>
  import { reposRef } from '../../store/store'
  import { mapGetters } from 'vuex'

  export default {
    data () {
      return {
        repoName: '',
        showForm: false
      }
    },
    computed: {
      ...mapGetters(['repos'])
    },
    mounted () {
      this.$store.dispatch('setReposRef', reposRef)
    },
    methods: {
      showCreateRepoForm: function () {
        if (this.showForm === false) {
          this.showForm = true
        } else {
          this.showForm = false
        }
      },
      addRepo: function () {
        reposRef.push({
          repoName: this.repoName
        })
        this.showForm = false
      }
    }
  }
</script>

<style>
  .lists-section {
    list-style-type: none !important;
  }
  .add-repo-button {
    right: 20px;
    bottom: 60px;
  }
</style>
