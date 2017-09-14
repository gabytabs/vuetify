<template>
    <div>
        <div v-for="mangas in mangasData">
            <router-link
                    :to="{ name: 'manga-episode', params: { title: mangas.title, id: mangas.id } }">
                {{mangas.title}}
            </router-link>
        </div>
        <AddManga></AddManga>
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
                mangasData: {}
            }
        }
    }

</script>