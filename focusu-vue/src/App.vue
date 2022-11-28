<template>
  <NavBar />
  <PomodoroSetup/>

</template>

<script>
import NavBar from './components/NavBar.vue'
import PomodoroSetup from './components/PomodoroSetup.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    PomodoroSetup
}
}
</script>

<style>

</style>
