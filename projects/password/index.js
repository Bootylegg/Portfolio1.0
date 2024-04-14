let pInput = document.getElementById("passwordInput")
let pOutput = document.getElementById("passwordGuess")
let list = document.getElementById("list")

var array = ['a', 'A', 'b', 'B', 'c', 'C', 'd', 'D', 'e', 'E', 'f', 'F', 'g', 'G', 'h', 'H', 'i', 'I', 'j', 'J', 'k', 'K', 'l', 'L', 'm', 'M', 'n', 'N', 'o', 'O', 'p', 'P', 'q', 'Q', 'r', 'R', 's', 'S', 't', 'T', 'u', "U", 'v', 'V', 'w', 'W', 'x', 'X' , 'y', 'Y', 'z', 'Z'
               , 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '!', '@'];

function passwordGuess() {
        let random1 = array[Math.floor(Math.random() * 64)]
        let random2 = array[Math.floor(Math.random() * 64)]
        let random3 = array[Math.floor(Math.random() * 64)]
        let random4 = array[Math.floor(Math.random() * 64)]
            let randomTotal = random1 + random2 + random3 + random4
            pOutput.innerHTML = 'current guess: ' + randomTotal
            console.log(randomTotal)
            list.innerHTML += randomTotal + ' '
            if(randomTotal == pInput.value) {
                setTimeout(() => {
                    alert('guessed')
                }, 1);
            } else {
                setTimeout(() => {
                    passwordGuess()
                }, 0);
            }
}

function instantMode() {
    pOutput.innerHTML = 'current guess: ' + pInput.value
    list.innerHTML += pInput.value + " ";
    setTimeout(() => {
        alert('guessed')
    }, 1);
}

let numberInput = document.getElementById("numberInput")
let numberGuess = document.getElementById("numberGuess")
let numberList = document.getElementById("numberList")
let guessNumber = 0

function numbGuess() {
    console.log(guessNumber)
    numberList.innerHTML += guessNumber + ' '
    if(parseInt(numberInput.value) === guessNumber) {
        setTimeout(() => {
            alert('guessed')
        }, 1);
        guessNumber = 0
    } else {
        guessNumber++
        numbGuess()
    }
}