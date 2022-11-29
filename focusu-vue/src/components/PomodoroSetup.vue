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