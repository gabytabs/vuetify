<template>
    <div>
        <input v-model="title"/>
        <input v-model="level"/>
        <input type="submit"
               @click="addManga({ title, level, token: userToken})"/>
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