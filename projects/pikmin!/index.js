var userInputPikmin
var userInputUnion
var income = document.getElementById("inputPikmin")
var union = document.getElementById("inputUnion")
var time = document.getElementById("time")

var audio = new Audio('pikmin.webm');

function valuePrompt() {
    audio.play()
    userInputPikmin = income.value
    userInputUnion = union.value
    let value = (100000000000 / (income.value * union.value) / 60 / 60)
    time.innerHTML = Math.round(value)
}