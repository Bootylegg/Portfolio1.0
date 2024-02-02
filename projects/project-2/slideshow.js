let slide = document.getElementById("slide")
let button = document.getElementById("button")

let choice = document.getElementById("choice")
let choice2 = document.getElementById("choice2")
let choice3 = document.getElementById("choice3")

// function popup() {   
//     if (slide.style.backgroundImage.includes('url("pic1.jpg")')) {
//         console.log("i work")
//         slide.style.backgroundImage = 'url("pic1popup.jpg")'
//     }
// }

// function pic2choice1() {
//     if(slide.style.backgroundImage.includes('url("pic2.jpg")')) {
//         slide.style.backgroundImage = 'url("page2choice1.jpg")'
//         choice.style.opacity = 0
//         choice2.style.opacity = 0
//         choice3.style.opacity = 0
//     }
// }

// function pic2choice2() {
//     if(slide.style.backgroundImage.includes('url("pic2.jpg")')) {
//         slide.style.backgroundImage = 'url("page2choice2.jpg")'
//         choice.style.opacity = 0
//         choice2.style.opacity = 0
//         choice3.style.opacity = 0
//     }
// }

// function pic2choice3() {
//     if(slide.style.backgroundImage.includes('url("pic2.jpg")')) {
//         slide.style.backgroundImage = 'url("page2choice3.jpg")'
//         choice.style.opacity = 0
//         choice2.style.opacity = 0
//         choice3.style.opacity = 0
//         setTimeout(() => {location.reload()}, 5000);
//     }
// }

function home() {
    slide.style.backgroundImage = 'url("pic1.jpg")'
    document.getElementById("text").innerHTML = "Henk komt net thuis van zijn opleiding. Hij loopt naar boven en gaat achter zijn laptop zitten om zijn mail te checken. Hij opent de eerste mail die hij ziet";
    choice.style.opacity = 0
    choice2.style.opacity = 0
    choice3.style.opacity = 0
}

function nextslide() {
    if (slide.style.backgroundImage.includes('url("pic1.jpg")')) {
        document.getElementById("text").innerHTML = "Wow! Zegt Henk. “Een PS5 voor maar 50 euro! Die moet ik hebben” En hij klikt op de link.";
        slide.style.backgroundImage = 'url("pic2.jpg")'
    } else if (slide.style.backgroundImage.includes("pic2.jpg")) {
        slide.style.backgroundImage = 'url("pic3.jpg")'
        document.getElementById("text").innerHTML = "Hij komt op een vreemde site met veel taalfouten maar Henk ziet dat niet. Zonder erbij na te denken vult hij zijn bankgegevens in.";
    } else if (slide.style.backgroundImage.includes('url("pic3.jpg")')) {
        slide.style.backgroundImage = 'url("pic4.jpg")'
        document.getElementById("text").innerHTML = "Vervolgens gaat Henk naar bed met een lach op zijn gezicht. Wat een deal! Denkt Henk. ";
    } else if (slide.style.backgroundImage.includes('url("pic4.jpg")')) {
        slide.style.backgroundImage = 'url("pic5.jpg")'
        document.getElementById("text").innerHTML = "";
    } else if (slide.style.backgroundImage.includes('url("pic5.jpg")')) {
        slide.style.backgroundImage = 'url("pic6.jpg")'
        document.getElementById("text").innerHTML = "Henk wordt wakker en pakt zijn telefoon om te kijken of zijn loon er al is.";
    } else if (slide.style.backgroundImage.includes('url("pic6.jpg")')) {
        slide.style.backgroundImage = 'url("pic7.jpg")'
        document.getElementById("text").innerHTML = "Wanneer hij ziet dat er heel veel geld van zijn rekening is gehaald.";
    } else if (slide.style.backgroundImage.includes('url("pic7.jpg")')) {
        slide.style.backgroundImage = 'url("pic8.jpg")'
        document.getElementById("text").innerHTML = "OH NEE! Zegt Henk. Ik ben opgelicht!";
    } else if (slide.style.backgroundImage.includes('url("pic8.jpg")')) {
        slide.style.backgroundImage = 'url("pic9.jpg")'
        document.getElementById("text").innerHTML = "Er wordt op de deur geklopt!! *Klop Klop* ";
    } else if (slide.style.backgroundImage.includes('url("pic9.jpg")')) {
        slide.style.backgroundImage = 'url("pic10.jpg")'
        document.getElementById("text").innerHTML = "Henk doet de deur open en ziet dat het de deurwaarder is. Henk moet al zijn spullen inleveren om zijn schuld te betalen. Henk is alles kwijt.";
    } else if (slide.style.backgroundImage.includes('url("pic10.jpg")')) {
        slide.style.backgroundImage = 'url("pic11.jpg")'
        document.getElementById("text").innerHTML = "Henk kijkt om zich heen en ziet dat zijn hele huis leeg is, Hij voelt zich verdrietig";
    }  else if (slide.style.backgroundImage.includes('url("pic11.jpg")')) {
        slide.style.backgroundImage = 'url("scene12.jpg")'
        document.getElementById("text").innerHTML = "Oh het is zijn vriend, hij had gehoord wat er was gebeurd met Henk, Hij wil Henk helpen met hulp krijgen om zijn spullen terug te krijgen en zijn leven weer op te pakken. Hij raad aan om de GKB te bellen die kunnen wel helpen.";
    } else if (slide.style.backgroundImage.includes('url("scene12.jpg")')) {
        slide.style.backgroundImage = 'url("pic12.jpg")'
        document.getElementById("text").innerHTML = "Henk besluit om de GKB te bellen en maakt een afspraak om op bezoek te komen bij het GKB in Groningen. ";
    } else if (slide.style.backgroundImage.includes('url("pic12.jpg")')) {
        slide.style.backgroundImage = 'url("pic13.jpg")'
        document.getElementById("text").innerHTML = "";
    } else if (slide.style.backgroundImage.includes('url("pic13.jpg")')) {
        slide.style.backgroundImage = 'url("scene15.png")'
        document.getElementById("text").innerHTML = "Henk is bij de GKB aangekomen en heeft een gesprek met een medewerker van de GKB.";
    } else if (slide.style.backgroundImage.includes('url("scene15.png")')) {
        slide.style.backgroundImage = 'url("scene16.png")'
        document.getElementById("text").innerHTML = "De medewerker van de GKB helpt Henk met het oplossen van zijn schulden en het terug krijgen van zijn spullen. Henk is blij dat hij hulp heeft gekregen van de GKB.";
    } else if (slide.style.backgroundImage.includes('url("scene16.png")')) {
        slide.style.backgroundImage = 'url("credit.gif")'
        document.getElementById("text").innerHTML = "";
        document.getElementById("font").style.width = "0px"
 }
}

function previousslide() {
    if (slide.style.backgroundImage.includes('url("pic3.jpg")')) {
        slide.style.backgroundImage = 'url("pic2.jpg")'
        document.getElementById("text").innerHTML = "Wow! Zegt Henk. “Een PS5 voor maar 50 euro! Die moet ik hebben” En hij klikt op de link.";
    } else if (slide.style.backgroundImage.includes('url("pic2.jpg")')) {
        slide.style.backgroundImage = 'url("pic1.jpg")'
        document.getElementById("text").innerHTML = "Henk komt net thuis van zijn opleiding. Hij loopt naar boven en gaat achter zijn laptop zitten om zijn mail te checken. Hij opent de eerste mail die hij ziet";
    } else if (slide.style.backgroundImage.includes('url("pic4.jpg")')) {
        slide.style.backgroundImage = 'url("pic3.jpg")'
        document.getElementById("text").innerHTML = "Hij komt op een vreemde site met veel taalfouten maar Henk ziet dat niet. Zonder erbij na te denken vult hij zijn bankgegevens in.";
    } else if (slide.style.backgroundImage.includes('url("pic5.jpg")')) {
        slide.style.backgroundImage = 'url("pic4.jpg")'
        document.getElementById("text").innerHTML = "Vervolgens gaat Henk naar bed met een lach op zijn gezicht. Wat een deal! Denkt Henk.";
    } else if (slide.style.backgroundImage.includes('url("pic6.jpg")')) {
        slide.style.backgroundImage = 'url("pic5.jpg")'
        document.getElementById("text").innerHTML = "";
    } else if (slide.style.backgroundImage.includes('url("pic7.jpg")')) {
        slide.style.backgroundImage = 'url("pic6.jpg")'
        document.getElementById("text").innerHTML = "Henk wordt wakker en pakt zijn telefoon om te kijken of zijn loon er al is.";
    } else if (slide.style.backgroundImage.includes('url("pic8.jpg")')) {
        slide.style.backgroundImage = 'url("pic7.jpg")'
        document.getElementById("text").innerHTML = "Wanneer hij ziet dat er heel veel geld van zijn rekening is gehaald.";
    } else if (slide.style.backgroundImage.includes('url("pic9.jpg")')) {
        slide.style.backgroundImage = 'url("pic8.jpg")'
        document.getElementById("text").innerHTML = "OH NEE! Zegt Henk. Ik ben opgelicht!";
    } else if (slide.style.backgroundImage.includes('url("pic10.jpg")')) {
        slide.style.backgroundImage = 'url("pic9.jpg")'
        document.getElementById("text").innerHTML = "Er wordt op de deur geklopt!! *Klop Klop*";
    } else if (slide.style.backgroundImage.includes('url("pic11.jpg")')) {
        slide.style.backgroundImage = 'url("pic10.jpg")'
        document.getElementById("text").innerHTML = "Henk doet de deur open en ziet dat het de deurwaarder is. Henk moet al zijn spullen inleveren om zijn schuld te betalen. Henk is alles kwijt.";
    } else if (slide.style.backgroundImage.includes('url("scene12.jpg")')) {
        slide.style.backgroundImage = 'url("pic11.jpg")'
        document.getElementById("text").innerHTML = "Henk kijkt om zich heen en ziet dat zijn hele huis leeg is, Hij voelt zich verdrietig";
    } else if (slide.style.backgroundImage.includes('url("pic12.jpg")')) {
        slide.style.backgroundImage = 'url("scene12.jpg")'
        document.getElementById("text").innerHTML = "Oh het is zijn vriend, hij had gehoord wat er was gebeurd met Henk, Hij wil Henk helpen met hulp krijgen om zijn spullen terug te krijgen en zijn leven weer op te pakken. Hij raad aan om de GKB te bellen die kunnen wel helpen.";
    } else if (slide.style.backgroundImage.includes('url("pic13.jpg")')) {
        slide.style.backgroundImage = 'url("pic12.jpg")'
        document.getElementById("text").innerHTML = "Henk besluit om de GKB te bellen en maakt een afspraak om op bezoek te komen bij het GKB in Groningen.";
    } else if (slide.style.backgroundImage.includes('url("scene15.png")')) {
        slide.style.backgroundImage = 'url("pic13.jpg")'
        document.getElementById("text").innerHTML = "";
    } else if (slide.style.backgroundImage.includes('url("scene16.png")')) {
        slide.style.backgroundImage = 'url("scene15.png")'
        document.getElementById("text").innerHTML = "Henk is bij de GKB aangekomen en heeft een gesprek met een medewerker van de GKB.";
    }
}

function splash() {
    var img = document.getElementById('slide');
    img.style.opacity = 1
    console.log("i work")
    setTimeout(() => {  slide.style.backgroundImage = 'url("pic1.jpg")' }, 5000);
}


