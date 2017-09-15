<template>
    <section class="manga-episode-container">
        <h1 class="title has-text-centered">{{$route.params.title}}</h1>
        <div class="container">
            <table class="table is-bordered is-fullwidth">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Episode Number</th>
                        <th>Number of Chapters</th>
                    </tr>
                </thead>
                <tbody>
                <tr v-for="manga in mangaEpisodes">
                    <td>{{manga.id}}</td>
                    <td>{{manga.episode}}</td>
                    <MangaContent :manga="manga"></MangaContent>
                </tr>
                </tbody>
            </table>
            <button @click="activateModal" class="active-modal-button is-pulled-right">
                <i class="fa fa-pencil-square-o fa-4x" aria-hidden="true"></i>
            </button>
        </div>

        <div class="add-manga-section">
            <div class="modal" :class="{'is-active': isActive}">
                <div class="modal-background"></div>
                <AddEpisode> </AddEpisode>
                <button @click="deactivateModal" class="modal-close is-large" aria-label="close"></button>
            </div>
        </div>

    </section>
</template>

<script>
    import axios from 'axios'
    import AddEpisode from './AddEpisode.vue'
    import MangaContent from './MangaContent.vue'

    export default {
        components: {
            AddEpisode,
            MangaContent
        },

        data(){
            return {
                mangaEpisodes: {},
                isActive: false
            }
        },

        computed: {
            numberOfChapters: function () {
                let number = [];
                this.mangaEpisodes.map( episode => {
                    episode.manga_contents.map( chapter => {
                        number.push(chapter.id);
                    })
                });
                return Object.keys(number).length;
            }
        },

        methods: {
            getMangaEpisodes: function () {
                axios.get(`https://hhh-api.herokuapp.com/api/v1/manga_titles/${this.$route.params.id}/mangas`)
                    .then( response => {
                        this.mangaEpisodes = response.data;
                    }).catch( e => {
                    console.log(e);
                })
            },
            activateModal: function () {
                this.isActive = true;
            },
            deactivateModal: function () {
                this.isActive = false;
            }
        },

        mounted(){
            this.getMangaEpisodes();
        }

    }
</script>

<style>
    button.active-modal-button {
        border: none;
        background: none;
        color: darkcyan;
    }
    section.manga-episode-container {
        margin-top: 25px;
    }
</style>