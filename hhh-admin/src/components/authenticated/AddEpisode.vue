<template>
    <div class="modal-card">
        <header class="modal-card-head">
            <p class="modal-card-title">Upload A Manga Episode</p>
        </header>
        <section class="modal-card-body">
            <div class="field">
                <label class="label">URL</label>
                <div class="control">
                    <input class="input"
                           type="text"
                           placeholder="http://www.facebook.com"
                           v-model="url"/>
                </div>

                <label class="label">Episode</label>
                <div class="control">
                    <input placeholder="3"
                           class="input"
                           type="text"
                           v-model="episode"/>
                </div>

            <input type="submit"
                class="button is-light is-warning add-manga-button is-pulled-right"
                @click="addEpisode({ url, episode, token: userToken, mangaTitleId: $route.params.id })"/>
            </div>
        </section>
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

<style>
    label.label {
        margin-top: 3px;
    }

    .add-manga-button {
        color: black;
        margin-top: 5px;
    }
</style>