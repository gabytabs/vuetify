<template>
    <div>
        <input placeholder="url" v-model="url"/>
        <input placeholder="episode #" v-model="episode"/>
        <input type="submit"
               @click="addEpisode({ url, episode, token: userToken, mangaTitleId: $route.params.id })"/>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        data() {
            return {
                episode: '',
                url: '',
            }
        },

        computed: {
            ...mapGetters(['userToken'])
        },

        methods: {
            ...mapActions({
                addEpisode: 'addEpisode'
            })
        }

    }
</script>