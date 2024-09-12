var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || window.webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

var recognition = new SpeechRecognition();

recognition.continuous = false;
recognition.lang = 'nl-NL';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

var diagnostic = document.querySelector('.output');
var bg = document.querySelector('html');
var hints = document.querySelector('.hints');

var card1
var card2
var turn = 1

document.getElementById("listen").onclick = function() {
  recognition.start();
  console.log('Ready to receive a command.');
}

recognition.onresult = function(event) {
  // Get the transcript
  var transcript = event.results[0][0].transcript.trim().toLowerCase();
  
  // Get the confidence level
  var confidence = event.results[0][0].confidence;
  
  diagnostic.textContent = 'Ik hoorde: ' + transcript;
  
  // Call the check function with the transcript
  check(transcript);

};

recognition.onspeechend = function() {
  recognition.stop();
}

recognition.onnomatch = function(event) {
  diagnostic.textContent = "Ik verstond het niet";
}

recognition.onerror = function(event) {
  diagnostic.textContent = 'Error: ' + event.error;
}

// non skidded part

const spoken = document.getElementById("check")

const what = document.getElementById("what")

function color() {
  var blocks = document.querySelectorAll(".block");

  blocks.forEach(function(block) {
    block.style.backgroundColor = "gray";
  });
}

let cardSave

function check(transcript) {
  const phrases = [
    ["A een", "a een", "a1"], ["A twee", "a twee", "a2"], ["A 3", "a 3", "a3"], ["A 4", "a 4", "a4"], 
    ["A 5", "a 5", "a5"], ["A 6", "a 6", "a6"], ["A 7", "a 7", "a7"], ["A 8", "a 8", "a8"],
    ["B een", "b een", "b1"], ["B twee", "b twee", "b2"], ["B 3", "b 3", "b3"], ["B 4", "b 4", "b4"], 
    ["B 5", "b 5", "b5"], ["B 6", "b 6", "b6"], ["B 7", "b 7", "b7"], ["B 8", "b 8", "b8"], 
    ["C een", "c een", "c1"], ["C twee", "c twee", "c2"], ["C 3", "c 3", "c3"], ["C 4", "c 4", "c4"], 
    ["C 5", "c 5", "c5"], ["C 6", "c 6", "c6"], ["C 7", "c 7", "c7"], ["C 8", "c 8", "c8"],
    ["D een", "d een", "d1"], ["D twee", "d twee", "d2"], ["D 3", "d 3", "d3"], ["D 4", "d 4", "d4"], 
    ["D 5", "d 5", "d5"], ["D 6", "d 6", "d6"], ["D 7", "d 7", "d7"], ["D 8", "d 8", "d8"]
  ];
  
  for (let i = 0; i < phrases.length; i++) {
    for (let j = 0; j < phrases[i].length; j++) {
      if (transcript.includes(phrases[i][j])) { 
        let blockId = (i + 1);
        console.log("Matched phrase:", phrases[i][j]); 
        console.log("Block ID:", blockId);
        if (turn === 1) {
          card1 = blockId;
          console.log("Card is: ", card1 +  "and turn is ", turn);
          turn = 2; // Update turn to 2
        } else if (turn === 2) {
          card2 = blockId;
          console.log("Second card is: ", card2, "and turn is ", turn, "and card1 is", card1);
          turn = 1; // Update turn to 1
          // Call checkCard function with card1 and card2 values
          if((parseInt(card1) + parseInt(card2)) === 33)
          {
            console.log("they match")
          }
          else
          {
              alert("they do not match")
              document.getElementById(card1.toString()).style.backgroundImage = 'url("img/kaartje.png")';
              card2.style.backgroundImage = 'url("img/kaartje.png")'
          }
        } 
        
        let blockElement = document.getElementById(blockId);
        if (blockElement) {
          console.log(blockId)
          if(blockId == 1 || blockId == 32) {
            blockElement.style.backgroundImage = 'url("img/bij.png")'
          } else if(blockId == 2 || blockId == 31) {
            blockElement.style.backgroundImage = 'url("img/bloem.png")'
          } else if(blockId == 3 || blockId == 30) {
            blockElement.style.backgroundImage = 'url("img/bloemwit.png")'
          } else if(blockId == 4 || blockId == 29) {
            blockElement.style.backgroundImage = 'url("img/boom.png")'
          } else if(blockId == 5 || blockId == 28) {
            blockElement.style.backgroundImage = 'url("img/eend.png")'
          } else if(blockId == 6 || blockId == 27) {
            blockElement.style.backgroundImage = 'url("img/hond.png")'
          } else if(blockId == 7 || blockId == 26) {
            blockElement.style.backgroundImage = 'url("img/kat.png")'
          } else if(blockId == 8 || blockId == 25) {
            blockElement.style.backgroundImage = 'url("img/kikker.png")'
          } else if(blockId == 9 || blockId == 24) {
            blockElement.style.backgroundImage = 'url("img/kip.png")'
          } else if(blockId == 10 || blockId == 23) {
            blockElement.style.backgroundImage = 'url("img/klavertje.png")'
          } else if(blockId == 11 || blockId == 22) {
            blockElement.style.backgroundImage = 'url("img/lammetje.png")'
          } else if(blockId == 12 || blockId == 21) {
            blockElement.style.backgroundImage = 'url("img/lieveheersbeestje.png")'
          } else if(blockId == 13 || blockId == 20) {
            blockElement.style.backgroundImage = 'url("img/paard.png")'
          } else if(blockId == 14 || blockId == 19) {
            blockElement.style.backgroundImage = 'url("img/tulp.png")'
          } else if(blockId == 15 || blockId == 18) {
            blockElement.style.backgroundImage = 'url("img/vlinder.png")'
          } else if(blockId == 16 || blockId == 17) {
            blockElement.style.backgroundImage = 'url("img/vogel.png")'
          } 
        } else {
          console.error("Block element not found:", blockId);
        }
        return;
      }
    }
  }
}

function userBrowser() {
  if(navigator.userAgent.includes("Firefox")) {
    alert("Browser not supported")
  }
}

// end speech recognision

// for loop om te shuffelen 
// wiskundige formule 0 + 31 1 +30 ect.


let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 32]


// function shuffle() {
//   let elementIDs = [];
//   for (let i = 1; i <= 32; i++) {
//       elementIDs.push(i);
//   }

//   for (let i = elementIDs.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [elementIDs[i], elementIDs[j]] = [elementIDs[j], elementIDs[i]];
//   }

//   elementIDs.forEach(function(id, index) {
//       let element = document.getElementById((index + 1));
//       if (element) {
//           element.value = id;
//       } else {
//           console.log("Element with id " + 'element_' + (index + 1) + " not found.");
//       }
//   });
// }


// function test() {
//   for (let index = 0; index < values.length; index++) {
//     const element = values[index];
//     console.log(index)
//   }
// }

//     Math.floor(Math.random()*32)

