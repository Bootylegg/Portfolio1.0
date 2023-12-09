let phone = document.getElementById("phone")
var colorchange = document.getElementById("text")

function removeelement() {
    phone.style.opacity = 0
}

function addelement() {
    phone.style.opacity = 1
}

// function coloredtext() {
//     var colorchange = document.getElementById('text'); 
//     var randomNumber = Math.floor(Math.random() * 10) + 1;

//     switch(randomNumber) {
//         case 1:
//             colorchange.style.color = "red";
//             break;
//         case 2:
//             colorchange.style.color = "blue";
//             break;
//         case 3:
//             colorchange.style.color = "green";
//             break;
//                     case 3:
//             colorchange.style.color = "green";
//             break;
//         case 4:
//             colorchange.style.color = "yellow";
//             break;
//                 case 3:
//             colorchange.style.color = "green";
//             break;
//                 case 3:
//             colorchange.style.color = "green";
//             break;
//         case 5:
//             colorchange.style.color = "pink";
//             break;
//     }
// }

let hovercheck = 0;

function hover() {
    hovercheck = 1
    console.log(hovercheck)
}

function offhover() {
    hovercheck = 0
    console.log(hovercheck)
}

// function colorloop() {  
//     if (hovercheck = 1) {
//         coloredtext
//         console.log("i work")
//     }   
// }

function colorloop() {
    for (let loop = 0; hovercheck <5; hovercheck++) {
        if(hovercheck < 5) {
            console.log(hovercheck)
            var colorchange = document.getElementById('text'); 
    var randomNumber = Math.floor(Math.random() * 10) + 1;

    switch(randomNumber) {
        case 1:
            colorchange.style.color = "red";
            break;
        case 2:
            colorchange.style.color = "blue";
            break;
        case 3:
            colorchange.style.color = "green";
            break;
                    case 3:
            colorchange.style.color = "green";
            break;
        case 4:
            colorchange.style.color = "yellow";
            break;
                case 3:
            colorchange.style.color = "green";
            break;
                case 3:
            colorchange.style.color = "green";
            break;
        case 5:
            colorchange.style.color = "pink";
            break;
    }
        }

    }
}