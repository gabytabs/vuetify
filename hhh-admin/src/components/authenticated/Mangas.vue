<template>
    <div class="container">

        <h1 class="title has-text-centered"> Mangas </h1>

        <div class="columns is-multiline">
            <div class="column is-one-third" v-for="mangas in mangas">
                <div class="card">
                    <div class="card-content">
                        <router-link
                                tag="p"
                                class="title has-text-centered clickable"
                                :to="{ name: 'manga-episode', params: { title: mangas.title, id: mangas.id} }">
                            {{mangas.title}}
                        </router-link>
                    </div>
                    <footer class="card-footer">
                        <p class="card-footer-item">
                      <span>
                          <span class="level-color"> {{mangas.manga_type}} </span>
                      </span>
                        </p>
                        <p class="card-footer-item">
                          <span>Genre: {{mangas.genre}} </span>
                        </p>
                    </footer>
                </div>
            </div>
        </div>

        <div class="add-manga-section">

            <button @click="activateModal" class="active-modal-button">
                <i class="fa fa-pencil-square-o fa-4x" aria-hidden="true"></i>
            </button>

            <div class="modal" :class="{'is-active': isActive}">
                <div class="modal-background"></div>
                    <AddManga></AddManga>
                <button @click="deactivateModal" class="modal-close is-large" aria-label="close"></button>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import { mapActions, mapGetters } from 'vuex'

    // Components
    import AddManga from './AddManga.vue'

    export default {

        components: {
            AddManga
        },

        data(){
            return{
                isActive: false
            }
        },

        computed: {
            ...mapGetters(['mangas'])
        },

        watch: {
            mangas: function () {
                this.deactivateModal();
            }
        },

        mounted(){
            this.retrieveMangaData();
        },

        methods: {
            ...mapActions({
               retrieveMangaData: 'getManga'
            }),
            activateModal: function () {
                this.isActive = true;
            },
            deactivateModal: function () {
                this.isActive = false;
            }
        }
    }
</script>

<style scoped lang="scss">

    h1.title {
        padding-top: 20px;
    }

    span.level-color {
        color: hsl(217, 71%, 53%);
    }

    .clickable {
        &:hover {
            color: hsl(217, 71%, 53%);
            cursor: pointer;
        }
    }

    button.active-modal-button {
        border: none;
        background: none;
        color: darkcyan;
        position: fixed;
        right: 20px;
        bottom: 30px;
    }
</style>