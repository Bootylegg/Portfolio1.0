var userInputPikmin
var userInputUnion
var income = document.getElementById("inputPikmin")
var time = document.getElementById("time")

function valuePrompt() {
    let value = (income.value * (16 * 16) * 384)
    time.innerHTML = value.toFixed(0) + " blocks"
}
