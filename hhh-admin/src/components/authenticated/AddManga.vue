<template>
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
                <label class="label">Level Of Maturity</label>
                <div class="control">
                    <input class="input"
                           type="text"
                           placeholder="3"
                           v-model="level"/>
                </div>
            <input type="submit"
                   class="button is-light is-warning add-manga-button is-pulled-right"
                   @click="addManga({ title, level, token: userToken})"/>
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
                level: ''
            }
        },

        computed: {
            ...mapGetters(['userToken'])
        },

        methods: {
            ...mapActions({
                addManga: 'addManga'
            })
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