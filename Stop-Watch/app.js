// Getting Ui vars
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');
const resetBtn = document.querySelector('[data-action="reset"]');

// Adding Event listerns 
startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);

// setting timer interval
let timeInterval = 00;
let interval;
let isRunning = false;


// creating the timer function
function startTimer() {
    if (isRunning) return;

    isRunning = true;
    interval = setInterval(incrementTimer, 1000);
}


function stopTimer() {
    if (!isRunning) return;

    isRunning = false;
    clearInterval(interval);
}

function resetTimer() {
    timeInterval = 0;

    minutes.innerText = '00';
    seconds.innerText = '00';
    stopTimer();

}

// setting the time interval function to 1s and incrementing the time interval var
function incrementTimer() {

    timeInterval++;

    // Appending time interal to minutes and secs in ui
    const numberOfMinutes = Math.floor(timeInterval / 60);
    const numberOfSeconds = timeInterval % 60;

    minutes.innerText = patch(numberOfMinutes);
    seconds.innerText = patch(numberOfSeconds);

    // console.log({ numberOfMinutes, numberOfSeconds })
}
// adding 0 to the end of mins and secs in Ui
function patch(number) {
    return (number < 10) ? '0' + number : number;
    // if(number < 10){
    //     return '0' + number;
    // }else{
    //     return number;
    // }
}