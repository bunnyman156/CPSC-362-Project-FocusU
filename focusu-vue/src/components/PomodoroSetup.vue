<template>
    <div>
        <div class="pomodoro-container">
            <div class="pomodoro-buttons">
                <button class="pomodoro-btn">Pomodoro</button>
                <button class="short-btn">Short Break</button>
                <button class="long-btn">Long Break</button>
            </div>
            <div class="pomodoro-timer">
                <!-- make timer dynamic -->
                <p><span class="minutes">25</span>:<span class="seconds">00</span> </p>
            </div>
            <div class="pomodoro-start">
                <button class="start-btn">START</button>
                <button class="restart-btn">RESTART</button>
            </div>
        </div>
    </div>
</template>

<script>
    
</script>


<style>

    .button{
        display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
    }
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