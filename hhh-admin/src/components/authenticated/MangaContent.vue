<template>
        <td>
            {{numberOfEpisodes}}
        </td>
</template>

<script>
    export default {
        props: ['manga'],

        computed: {
            numberOfEpisodes: function () {
                return Object.keys(this.manga.manga_contents).length;
            }
        }
    }
</script>