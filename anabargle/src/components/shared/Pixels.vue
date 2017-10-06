<template>
  <section>
    <div class="pixel-board-container" v-for="pixel in days">
      <Pixel :pixel="pixel"></Pixel>
    </div>
  </section>
</template>

<script>
  import Pixel from './Pixel.vue'

  export default {
    components: {
      Pixel
    },
    data () {
      return {
        days: 365
      }
    }
  }
</script>

<style>
  .pixel-board-container {
    background-color: white;
    padding: 10px;
  }
</style>

