<template>
    <div>
        <AddManga> </AddManga>
    </div>
</template>

<script>
    import AddManga from './AddManga.vue'
    import { mapGetters } from 'vuex'

    export default {
        components: {
            AddManga
        },

        computed: {
            ...mapGetters(['userToken'])
        }
    }
</script>