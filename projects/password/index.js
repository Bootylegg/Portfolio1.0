let pInput = document.getElementById("passwordInput")
let pOutput = document.getElementById("passwordGuess")
let list = document.getElementById("list")
let randomTotal = ""

var array = ['a','A','b','B','c','C','d','D','e','E','f','F','g','G','h','H','i','I','j','J','k','K','l','L','m','M','n','N','o','O','p','P','q','Q','r','R','s','S','t','T','u',"U",'v','V','w','W','x','X','y','Y','z','Z',0,1,2,3,4,5,6,7,8,9,'!','@'];
function passwordGuess() {
        let random = array[Math.floor(Math.random() * 64)]
            randomTotal += random
            if(randomTotal.length == pInput.value.length){
                console.log(randomTotal)
                pOutput.innerHTML = 'current guess: ' + randomTotal
                list.innerHTML += randomTotal + ' '
                if(randomTotal == pInput.value) {
                    alert("guessed")
                } else {
                        setTimeout(passwordGuess,0) 
                }
                randomTotal = ""
            } else {
                setTimeout(passwordGuess,0)
            }

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
        setTimeout(numbGuess,0) 
    }
}

let random = 0

function numbRandom() {
  random = Math.floor(Math.random() * parseInt(numberInput.value) + 1)
  numberList.innerHTML += random + ' '
  if(parseInt(numberInput.value) === random) {
    alert("guessed")
  } else {
    setTimeout(() => {
      numbRandom()
    }, 0);
  }
}

let passwordsArray; 

function loadFile(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        callback(xhr.responseText);
      } else {
        console.error('Error loading file:', xhr.statusText);
      }
    }
  };
  xhr.open('GET', url);
  xhr.send();
}

// Function to load the file and start instant mode
function startInstantMode() {
  // Load rockyou.txt file
  loadFile('rockyou.txt', function(data) {
    // Split the data into an array of passwords
    passwordsArray = data.split('\n');
    
    // Now you have passwordsArray which contains all passwords from rockyou.txt
    console.log(passwordsArray.length);

    // Call the instantMode function
    instantMode();
  });
}
let index = 0; // Define an index variable to keep track of the current position

function instantMode() {
  if (!passwordsArray) {
    // If passwordsArray is not yet defined, wait and retry after a delay
    setTimeout(instantMode, 100);
    return;
  }

  // Increment the index
  index++;

  // Check if the index exceeds the array length and reset it if needed
  if (index >= passwordsArray.length) {
    index = 0;
  }

  // Access the password at the updated index
  let randomP = passwordsArray[index];

  document.getElementById('passwordGuess').innerHTML = 'current guess: ' + randomP;
  document.getElementById('list').innerHTML += randomP + ' ';
  console.log(randomP)
  let inputPassword = document.getElementById('passwordInput').value;
  if(randomP === inputPassword) {
    alert("Guessed");
  } else {
    // Call instantMode recursively with a delay
    setTimeout(function() {
      instantMode();
    }, 0);
  }
}