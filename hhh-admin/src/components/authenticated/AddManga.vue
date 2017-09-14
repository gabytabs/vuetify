<template>
    <div>
        <input v-model="title"/>
        <input v-model="url"/>
        <input v-model="episode"/>
        <input type="submit"
               @click="addMangaEpisode({ title, url, episode, token: userToken})"/>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        data() {
            return {
                title: '',
                url: '',
                episode: ''
            }
        },

        computed: {
            ...mapGetters(['userToken'])
        },

        methods: {
            ...mapActions({
                addMangaEpisode: 'addMangaEpisode'
            })
        }

    }
</script>