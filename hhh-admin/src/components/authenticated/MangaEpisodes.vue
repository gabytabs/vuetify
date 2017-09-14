<template>
    <div>
        <AddEpisode> </AddEpisode>
        <div v-for="manga in mangaEpisodes">
            {{ manga.episode }}
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import AddEpisode from './AddEpisode.vue'

    export default {
        components: {
            AddEpisode
        },

        data(){
            return {
                mangaEpisodes: {}
            }
        },

        methods: {
            getMangaEpisodes: function () {
                axios.get(`http://localhost:3000/api/v1/manga_titles/${this.$route.params.id}/mangas`)
                    .then( response => {
                        this.mangaEpisodes = response.data;
                    }).catch( e => {
                    console.log(e);
                })
            }
        },

        mounted(){
            this.getMangaEpisodes();
        }

    }
</script>