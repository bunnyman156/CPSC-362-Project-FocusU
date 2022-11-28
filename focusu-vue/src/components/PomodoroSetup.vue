<template>
    <div>
        <!-- THIS IS ONLY A TEMPLATE -->
        <div class = "pomodoro-types">
            <p> Pomodoro </p>
        </div>
        <div class = "pomodoro-types">
            <p> Short Break </p>
        </div>
        <div class = "pomodoro-types">
            <p> Long Break </p>    
        </div>

        <div class = "timer">
            <div class="current-time">
                    <span class="minutes">25</span>:<span class="seconds">00</span>
            </div>
        </div>

        <div class = "pomodoro-start">
            <button class="start-btn">START</button>
            <button class="restart-btn">RESTART</button>
        </div>
    </div>
</template>

<style>
    .pomodoro-types{
        color: white;
        display: flex;
        justify-content: space-evenly;
    }
    .timer{
        color:white;
        display: flex;
        justify-content: center;
    }
</style>

<script>
    document.querySelector('#push').onclick = function(){
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
    }
</script>