let timer = document.getElementById(`counter`);
let btnStart = document.getElementById(`start-stop`);
let btnReset = document.getElementById('reset');
let btnRecord = document.getElementById('record');
let chronometer = null;
let laps = '';

// Variables to help verify counter
let isCounterStarted = false;

// Variables to set the chronometer
let milisec = 0;
let sec = 0;
let min = 0;

// variables to set placeholders to milisec, sec and min
let phMilisec = document.getElementById('miliseconds');
let phSec = document.getElementById('seconds');
let phMin = document.getElementById('minutes');
let phTimer = null;
let counter = 0;
let phFullTime = '';

// EVENT HANDLERS
// Add event listeners CLICK to the respective buttons
btnStart.addEventListener('click', () => {
    this.toogleStartStop()
})

btnReset.addEventListener('click', () => {
    resetChronometer();
})

btnRecord.addEventListener('click', () => {
    recordLap(++counter);
})

// Add event listeners to Keypress
btnStart.addEventListener('keypress', () => {

})

btnReset.addEventListener('keypress', () => {

})

btnRecord.addEventListener('keypress', () => {

})

// Functions to handle
// this function toogles the button image
function toogleImageStartStop() {

}


function toogleStartStopButtonText(isStarted) {
    if (!isStarted) {
        btnStart.innerHTML = `Stop`;
        return;
    }
    btnStart.innerHTML = `Start`;
}

function resetChronometer() {
    if (isCounterStarted) {
        return;
    }
    clearTimeout(btnStart);
    milisec = 0;
    sec = 0;
    min = 0;
    phMilisec.innerHTML = '00';
    phSec.innerHTML = '00';
    phMin.innerHTML = '00';
}
// Enable and Disable BUTTON RESET
function enableBtnReset() {
    btnReset.removeAttribute("disabled");
}
function disableBtnReset() {
    btnReset.setAttribute("disabled", "disabled");
}
// Enable and Disable BUTTON RECORD
function enableBtnRecord() {
    btnRecord.removeAttribute("disabled");
}
function disableBtnRecord() {
    btnRecord.setAttribute("disabled", "disabled");
}
// Record lap
function recordLap(counter) {
    let record = document.getElementById('record-lap');
    if (record.children.length === 0) {
        record.appendChild("DIV");
    }
}

// handler to start / stop chronometer
function toogleStartStop() {
    const placeholderZero = '0';
    // here checks if the counter started
    if (!isCounterStarted) {
        toogleStartStopButtonText(isCounterStarted)
        disableBtnReset()
        enableBtnRecord()
        isCounterStarted = !isCounterStarted;
        chronometer = setInterval(() => {
            phMilisec.innerHTML = milisec > 9 ? `${milisec++}` : `0${milisec++}`;
            if (milisec > 99) {
                phMilisec.innerHTML = milisec = 0;
                phSec.innerHTML = sec > 9 ? `${++sec}` : `0${++sec}`;
                if (sec > 59) {
                    phSec.innerHTML = sec = 0;
                    phMin.innerHTML = min > 9 ? `${++min}` : `0${++min}`;
                    phFullTime = `${phMin}:${phSec}:${phMilisec}`
                }
            }
        }, 10)
    } else {
        enableBtnReset()
        disableBtnRecord()
        toogleStartStopButtonText(isCounterStarted)
        isCounterStarted = !isCounterStarted;
        clearInterval(chronometer)
    }
}
