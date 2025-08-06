const display = document.getElementById('display');
const title = document.getElementById('title');

let startingMinutes = 25;
let time = startingMinutes * 60;
let isRunning = false;
let timer = null;


function updateCountdown(){
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;


    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');
    display.innerText = `${minutes}:${seconds}`;
    time--;
    time = time < 0 ? 0 : time;
    if (time === 0){
        title.innerText = 'BREAK';
    }
}

function start(){
    if (!isRunning){
        timer = setInterval(updateCountdown, 1000);
        isRunning = true
    }
}

function pause(){
    if (isRunning){
        clearInterval(timer);
        isRunning = false;
    }
}

function reset(){
    clearInterval(timer);
    startingMinutes = 25
    time = startingMinutes * 60
    isRunning = false
    display.textContent = "25:00"
    title.innerText = 'FOCUS';
}