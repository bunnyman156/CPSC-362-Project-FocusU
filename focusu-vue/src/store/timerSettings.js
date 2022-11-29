import {defineStore} from "pinia"

//basic timer settings
export const UseTimerSettings = defineStore('settings',{
    state : () => ({
        pomodoro : {
            type : 'pomodoro',
            minutes : 25,
            back : 25
        },
        shortBreak : {
            type : 'shortBreak',
            minutes : 5,
            back : 5
        },
        longBreak : {
            type : 'longBreak',
            minutes : 10,
            back : 10
        },
    })
}
)