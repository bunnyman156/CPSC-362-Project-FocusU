<template>

<transition name = "modal-animation">
    <div v-show ="modalActive" class = "modal">
        <transition name = "modal-animation-inner">
            <div v-show ="modalActive" class="modal-inner">
                <i @click = "close" class = "far fa-times-circle"></i>
                <!-- Modal Content -->
                <slot />
                <button @click = "close" type = "button">Close</button>
            </div>
        </transition>
    </div>
</transition>


</template>



<script>
export default {
    props: ["modalActive"],
    setup(props, {emit}) {
        const close = () => {
            emit("close");
        }
        return {close};
    },
};


</script>

<style>


/*
.modal {
    display: none;
    position: fixed;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0,0,0);
    background-color: rgba(0, 0, 0, 0.4);
}
*/

.modal-inner{
    display: grid;
    position: fixed;
    margin: auto;
    width: 100vw;
    height: 100vh;
    place-items: center;
    background-color: rgb(0,0,0);
    background-color: rgba(0, 0, 0, 0.4);
}


</style>