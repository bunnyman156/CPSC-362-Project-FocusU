<template>
    <div>
        <div class="pomodoro-container">
            <div class="pomodoro-buttons">
                <button @click="switchTimerType('pomodoro')" class="pomodoro-btn" id="pomo-btn">Pomodoro</button>
                <button @click="switchTimerType('shortBreak')" class="pomodoro-btn" id="short-btn">Short Break</button>
                <button @click="switchTimerType('longBreak')" class="pomodoro-btn" id="long-btn">Long Break</button>
            </div>



            <div class="pomodoro-timer">
                <p class="timer">
                    <span>{{ settingsUser[type].minutes.toLocaleString(undefined, { minimumIntegerDigits: 2 }) }}</span>:
                    <span>{{ seconds.toLocaleString(undefined, { minimumIntegerDigits: 2 }) }}</span>
                </p>
            </div>

            <div class="pomodoro-start">
                <button v-show="!started" @click="start()" class="pomodoro-btn" id="start-btn">Start</button>
                <button v-show="started" @click="stop()" class="pomodoro-btn" id="stop-btn">Stop</button>
                <button @click="restart()" class="pomodoro-btn" id="restart-btn">Restart</button>
            </div>
            <SpotifySetUp/>
            <div class="task-container">
                <div id="newtask">
                    <input type="text" placeholder="Add Tasks">
                    <button id="push" @click="addTask()">Add</button>
                </div>
            <div id="tasks"></div>
             </div>
        </div>
        
    </div>
</template>

<script>
import {ref} from 'vue'
import {UseTimerSettings} from '../store/timerSettings'
import SpotifySetUp from './SpotifySetUp.vue';

export default{
    setup() {
        const started = ref(false);
        //used https://github.com/TREz-bits/Pomodoro-by-newt as reference for timer
        const settingsUser = UseTimerSettings();
        const type = ref("pomodoro");
        let minutesBackUp = settingsUser[type.value].back; // default should be 25:00
        const seconds = ref(0);
        let timer = ref(undefined);
        let timerID;
        // let timerID = ref(-1);
        //alternate timer value based on which type is chosen
        const switchTimerType = (timerType) => {
            type.value = timerType;
            started.value = false;
            minutesBackUp = settingsUser[type.value].back; // get the new value for timer type
            settingsUser[type.value].minutes = minutesBackUp; // set to new timer type value
            seconds.value = 0;
            clearInterval(timer);
        };
        //begin timer
        const start = () => {
            started.value = true;
            // console.log(timer)
            timer = setInterval(() => {
                seconds.value--;
                if (seconds.value < 0 && settingsUser[type.value].minutes != 0) {
                    timerID = timer; // get the id of timer so that clearInterval actually works
                    settingsUser[type.value].minutes--;
                    seconds.value = 59;
                }
                else if (seconds.value <= 0 && settingsUser[type.value].minutes <= 0) { // if timer is 00:00
                    clearInterval(timerID); // should clear timer
                    started.value = true;
                    settingsUser[type.value].minutes = minutesBackUp; // reset minutes to the original value based on type
                }
            }, 1000);
        };
        const stop = () => {
            started.value = false;
            clearInterval(timer);
        };
        const restart = () => {
            minutesBackUp = settingsUser[type.value].back; // contains the original value of the timer type
            settingsUser[type.value].minutes = minutesBackUp;
            seconds.value = 0;
            started.value = false;
            clearInterval(timer);
        };

        const addTask = () =>{
            if(document.querySelector('#newtask input').value.length == 0){
                alert("Kindly Enter Task Name!!!!")
            }
            else{
                document.querySelector('#tasks').innerHTML += `
                    <div class="task">
                        <span id="taskname">
                            ${document.querySelector('#newtask input').value}
                        </span>
                        <button class="delete">
                            <i class="far fa-trash-alt"></i>
                        </button>
                    </div>
                `;
                var current_tasks = document.querySelectorAll(".delete");
                for(var i=0; i<current_tasks.length; i++){
                    current_tasks[i].onclick = function(){
                        this.parentNode.remove();
                    }
                }
            }
        };

        // document.querySelector('#push').onclick = function(){
        // if(document.querySelector('#newtask input').value.length == 0){
        //     alert("Kindly Enter Task Name!!!!")
        // }
        // else{
        //     document.querySelector('#tasks').innerHTML += `
        //         <div class="task">
        //             <span id="taskname">
        //                 ${document.querySelector('#newtask input').value}
        //             </span>
        //             <button class="delete">
        //                 <i class="far fa-trash-alt"></i>
        //             </button>
        //         </div>
        //     `;
        //     var current_tasks = document.querySelectorAll(".delete");
        //     for(var i=0; i<current_tasks.length; i++){
        //         current_tasks[i].onclick = function(){
        //             this.parentNode.remove();
        //         }
        //     }
        // }
        return { started, timer, timerID, settingsUser, minutesBackUp, type, seconds, switchTimerType, start, restart, stop, addTask}; //fix
    },
    components: { SpotifySetUp }
}

</script>


<style>
</style>