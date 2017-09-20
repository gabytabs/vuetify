<template>
    <div class="modal-card">
        <header class="modal-card-head">
            <p class="modal-card-title">Add A Manga</p>
        </header>
        <section class="modal-card-body">
            <div class="field">
                <label class="label">Title</label>
                <div class="control">
                    <input class="input"
                           type="text"
                           placeholder="Naruto"
                           v-model="title"/>
                </div>
                <label class="label">Type of Content</label>
                <div class="control">
                    <input class="input"
                           type="text"
                           placeholder="Doujinshi"
                           v-model="type"/>
                </div>
                <label class="label">Genre</label>
                <div class="control">
                    <input class="input"
                           type="text"
                           placeholder="Yaoi"
                           v-model="genre"/>
                </div>
            <input type="submit"
                   class="button is-light is-warning add-manga-button is-pulled-right"
                   @click="addManga({ title, type, genre, token: userToken})"/>
            </div>
        </section>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        data() {
            return {
                title: '',
                type: '',
                genre: ''
            }
        },

        computed: {
            ...mapGetters(['userToken'])
        },

        methods: {
            ...mapActions({
                addManga: 'addManga'
            }),
            reset: function () {
                this.title = '',
                this.type = '',
                this.genre = ''
            }
        }
    }
</script>

<style scoped lang="scss">
    label.label {
        margin-top: 3px;
    }

    .add-manga-button {
        color: black;
        margin-top: 5px;
    }
</style>