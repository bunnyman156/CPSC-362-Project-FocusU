<template>
    <div class = "modal-overlay">
        <div class="modal" >
            <h1> About </h1>
            <p> FocusU was designed as a way to combine the Pomodoro Technique with the lofi-study aesthetic to help students get in the zone. </p>
            <p> The Pomodoro Technique is a study method which utilizes a 25 minute timer followed by a 5 minute break.</p>
        </div>
        <div class="close" @click="$emit('close-modal')">
            <img class="close-img" src="../assets/exit.svg" alt=""/>
        </div>
    </div>
</template>



<script>
export default {
    setup() {
    },
};


</script>

<style>


</style>