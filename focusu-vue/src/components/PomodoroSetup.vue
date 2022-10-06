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
    .pomodoro-buttons{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 60px;

    width: 1000px;
    height: 400px;

    }

    .pomodoro-btn{
        padding: 20px;
        border-radius: 15px;
        font-family: 'Roboto';
        font-style: normal;
        font-size: 30px;
        line-height: 30px;
        text-align: center;
    }


    .short-btn{
        padding: 20px;
        border-radius: 15px;
        font-family: 'Roboto';
        font-style: normal;
        font-size: 30px;
        line-height: 30px;
        text-align: center;
    }

    .long-btn{
        padding: 20px;
        border-radius: 15px;
        font-family: 'Roboto';
        font-style: normal;
        font-size: 30px;
        line-height: 30px;
        text-align: center;
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