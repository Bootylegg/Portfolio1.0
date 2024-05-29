var userInputPikmin
var userInputUnion
var income = document.getElementById("inputPikmin")
var union = document.getElementById("inputUnion")
var time = document.getElementById("time")
var day = document.getElementById("days")
let daytime

var audio = new Audio('pikmin.mp3');

function valuePrompt() {
    audio.play()
    let value = (100000000000 / (income.value * union.value) / 60 / 60)
    time.innerHTML = value.toFixed(2)
    daytime = value / 24
    day.innerHTML = daytime.toFixed(2)
}
















let opc = 0;
let incrementInterval, decrementInterval;
    var img1 = document.getElementById("pic1")
    var img2 = document.getElementById("pic2")
    var img3 = document.getElementById("pic3")

function startIncrement() {
    incrementInterval = setInterval(() => {
        opc += 1;
        if (opc === 100) {
            clearInterval(incrementInterval);
            startDecrement();
            img1.style.opacity = opc
            img2.style.opacity = opc
            img3.style.opacity = opc
        }
    }, 0.5);
}

function startDecrement() {
    decrementInterval = setInterval(() => {
        opc -= 1;
        if (opc === 0) {
            clearInterval(decrementInterval);
            startIncrement();
            img1.style.opacity = opc
            img2.style.opacity = opc
            img3.style.opacity = opc
        }
    }, 0.5);
}

startIncrement();
