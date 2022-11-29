<template>
  <div class="app">
    <div class="navbar">
        <div class="container">
            <a class="logo" href="#">{{logoName}}</a>
            <img id="mobile-cta" class="mobile-menu" src="../assets/menu.svg" alt="open menu"> 
            <nav class="nav-list">
                <img id="mobile-exit" class="mobile-menu-exit"  src="../assets/exit.svg" alt="exit menu">
                <br>
                <ul class="primary-nav">
                    <li class="current"><a href="#">{{homeNav}}</a></li>
                    <li><a href="#">{{aboutNav}}</a></li>
                    <li class="current"><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <!-- <li><a href="#">Tips</a></li> -->
                </ul>
            </nav>
        </div>
        
    </div>
  </div>
</template>

<script>

import {ref} from 'vue';

export default{
  setup(){
    let logoName = ref("FocusU");
    let homeNav = ref("Home");
    let aboutNav = ref("About");
    return {logoName,homeNav,aboutNav};
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../styles.css"
</style>
