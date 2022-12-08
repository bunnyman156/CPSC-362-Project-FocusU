<template>
  <Modal @close ="toggleModal" :modalActive = "modalActive">
  <div class="modal-content">
    <h1> About </h1>
    <p> FocusU was designed as a way to combine the Pomodoro Technique with the lofi-study aesthetic to help students get in the zone. </p>

    <p> The Pomodoro Technique is a study method which utilizes a 25 minute timer followed by a 5 minute break.</p>
  </div>
</Modal>

  <div class="app">
    <div class="navbar">
        <div class="container">
            <a class="logo" href="#">FocusU</a>
            <img id="mobile-cta" class="mobile-menu" src="../assets/menu.svg" alt="open menu"> 
            <nav class="nav-list">
                <img id="mobile-exit" class="mobile-menu-exit"  src="../assets/exit.svg" alt="exit menu">
                <br>
                <ul class="primary-nav">
                    <li class="current"><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <button @click ="toggleModal" type = "button">Open Modal</button>
                    <!-- <li><a href="#">Tips</a></li> -->S
                </ul>
            </nav>
        </div>
        
    </div>
  </div>
</template>

<script>
import Modal from "@/components/TempModal.vue";
import { ref } from 'vue'
export default {
  name: "NavBar",
  components: {
    Modal,
  },

  setup() {
    const modalActive = ref(false);
    const toggleModal = () => {
      modalActive.value = !modalActive.value; 
    }
    return { modalActive, toggleModal };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../styles.css"
</style>
