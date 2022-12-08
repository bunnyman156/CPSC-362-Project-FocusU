<template>
  <Modal v-show="modalActive" @close-modal="(modalActive = false)"/>
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
                    <li><a href="#" @click="toggleModal">About</a></li>
                    <!-- <button @click ="toggleModal" type = "button">Open Modal</button> -->
                    <!-- <li><a href="#">Tips</a></li> -->
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
