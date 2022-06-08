<template>
  <main class="main">
    <audio-player />
  </main>
</template>

<script>
import AudioPlayer from '../components/AudioPlayer.vue'
export default {
  components: { AudioPlayer },
  name: 'IndexPage'
}
</script>


<style lang="postcss">
.main{
  background-image: url('/Oyefondo.jpg');
  background-size: 100% 200%;
  height: 100vh;
}
</style>
