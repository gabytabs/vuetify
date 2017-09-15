<template>
    <div class="container">

        <h1 class="title has-text-centered"> Mangas </h1>

        <div class="columns is-multiline">
            <div class="column is-one-third" v-for="mangas in mangasData">
                <div class="card">
                    <div class="card-content">
                        <p class="title has-text-centered">
                            {{mangas.title}}
                        </p>
                    </div>
                    <footer class="card-footer">
                        <p class="card-footer-item">
                      <span>
                          Power Level: <span class="level-color"> {{mangas.level}} </span>
                      </span>
                        </p>
                        <p class="card-footer-item">
                          <router-link tag="span"
                                       class="clickable"
                                       :to="{ name: 'manga-episode', params: { title: mangas.title, id: mangas.id} }">
                              Go to Manga
                          </router-link>
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
    import AddManga from './AddManga.vue'

    export default {

        components: {
            AddManga
        },

        mounted(){
            axios.get(`http://localhost:3000/api/v1/manga_titles`).then(response => {
                console.log(response);
                this.mangasData = response.data
            })
        },

        data(){
            return{
                mangasData: {},
                isActive: false
            }
        },

        methods: {
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

    span.clickable {
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