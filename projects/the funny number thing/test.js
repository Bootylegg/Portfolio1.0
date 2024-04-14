function test() {
    let numbers = [];
    
    for (let index = 1; index <= 32; index++) {
        let id = index;
        let element = document.getElementById(id);
        
        if (element) {
            let randomNumber = Math.floor(Math.random() * 32);
            numbers.push(randomNumber);
            element.innerText = randomNumber;
            console.log("id = " + id + ", randomNumber = " + randomNumber);
        } else {
            console.log("Element with id " + id + " not found.");
        }
    }
    
    let duplicateFound = false;
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] === numbers[j]) {
                duplicateFound = true;
                break;
            }
        }
        if (duplicateFound) {
            break;
        }
    }
    
    if (duplicateFound) {
        console.log("Duplicate numbers found.");
        setTimeout(() => {
            test()
        }, 0);
    } else {
        console.log("No duplicate numbers found.");
    }
}

let pInput = document.getElementById("passwordInput")
let pOutput = document.getElementById("passwordGuess")
let list = document.getElementById("list")

var array = ['a', 'A', 'b', 'B', 'c', 'C', 'd', 'D', 'e', 'E', 'f', 'F', 'g', 'G', 'h', 'H', 'i', 'I', 'j', 'J', 'k', 'K', 'l', 'L', 'm', 'M', 'n', 'N', 'o', 'O', 'p', 'P', 'q', 'Q', 'r', 'R', 's', 'S', 't', 'T', 'u', "U", 'v', 'V', 'w', 'W', 'x', 'X' , 'y', 'Y', 'z', 'Z'
               , 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '!', '@'];

function passwordGuess() {
        let random1 = array[Math.floor(Math.random() * 64)]
        let random2 = array[Math.floor(Math.random() * 64)]
            let randomTotal = random1 + random2
            pOutput.innerHTML = (randomTotal)
            console.log(randomTotal)
            list.innerHTML += randomTotal + ' '
            if(randomTotal == pInput.value) {
                alert("guessed")
            } else {
                setTimeout(() => {
                    passwordGuess()
                }, 0);
            }
}