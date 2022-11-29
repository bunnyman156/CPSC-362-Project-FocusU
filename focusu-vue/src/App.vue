<template>
  <NavBar />
  <PomodoroSetup/>
  <!-- <SpotifySetUp/> -->
</template>

<script>
import NavBar from './components/NavBar.vue'
import PomodoroSetup from './components/PomodoroSetup.vue'
// import SpotifySetUp from './components/SpotifySetUp.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    PomodoroSetup,
    // SpotifySetUp
}
}
</script>

<style>

</style>
