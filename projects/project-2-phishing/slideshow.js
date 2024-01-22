let slide = document.getElementById("slide")
let button = document.getElementById("button")

let choice = document.getElementById("choice")
let choice2 = document.getElementById("choice2")
let choice3 = document.getElementById("choice3")

// function popup() {   
//     if (slide.style.backgroundImage.includes('url("pic1.png")')) {
//         console.log("i work")
//         slide.style.backgroundImage = 'url("pic1popup.png")'
//     }
// }

function pic2choice1() {
    if(slide.style.backgroundImage.includes('url("pic2.png")')) {
        slide.style.backgroundImage = 'url("page2choice1.png")'
        choice.style.opacity = 0
        choice2.style.opacity = 0
        choice3.style.opacity = 0
    }
}

function pic2choice2() {
    if(slide.style.backgroundImage.includes('url("pic2.png")')) {
        slide.style.backgroundImage = 'url("page2choice2.png")'
        choice.style.opacity = 0
        choice2.style.opacity = 0
        choice3.style.opacity = 0
    }
}

function pic2choice3() {
    if(slide.style.backgroundImage.includes('url("pic2.png")')) {
        slide.style.backgroundImage = 'url("page2choice3.png")'
        choice.style.opacity = 0
        choice2.style.opacity = 0
        choice3.style.opacity = 0
        setTimeout(() => {location.reload()}, 5000);
    }
}

function home() {
    slide.style.backgroundImage = 'url("pic1.png")'
    choice.style.opacity = 0
    choice2.style.opacity = 0
    choice3.style.opacity = 0
}

function nextslide() {
    if (slide.style.backgroundImage.includes('url("pic1.png")')) {
        slide.style.backgroundImage = 'url("pic2.png")'
        choice.style.opacity = 1
        choice2.style.opacity = 1
        choice3.style.opacity = 1
    } else if (slide.style.backgroundImage.includes("page2choice1.png")) {
        slide.style.backgroundImage = 'url("pic3.png")'
    } else if (slide.style.backgroundImage.includes("page2choice2.png")) {
        slide.style.backgroundImage = 'url("pic3.png")'
    } else if (slide.style.backgroundImage.includes('url("pic3.png")')) {
        slide.style.backgroundImage = 'url("pic4.png")'
    } else if (slide.style.backgroundImage.includes('url("pic4.png")')) {
        slide.style.backgroundImage = 'url("pic5.png")'
    } else if (slide.style.backgroundImage.includes('url("pic5.png")')) {
        slide.style.backgroundImage = 'url("pic6.png")'
    } else if (slide.style.backgroundImage.includes('url("pic6.png")')) {
        slide.style.backgroundImage = 'url("pic7.png")'
    } else if (slide.style.backgroundImage.includes('url("pic7.png")')) {
        slide.style.backgroundImage = 'url("pic8.png")'
    }
}

function previousslide() {
    if (slide.style.backgroundImage.includes('url("pic3.png")')) {
        slide.style.backgroundImage = 'url("pic2.png")'
        choice.style.opacity = 1
        choice2.style.opacity = 1
        choice3.style.opacity = 1
    } else if (slide.style.backgroundImage.includes('url("pic2.png")')) {
        slide.style.backgroundImage = 'url("pic1.png")'
        choice.style.opacity = 0
        choice2.style.opacity = 0
        choice3.style.opacity = 0;
    } else if (slide.style.backgroundImage.includes('url("pic1popup.png")')) {
        slide.style.backgroundImage = 'url("pic1.png")'
    } else if (slide.style.backgroundImage.includes('url("pic4.png")')) {
        slide.style.backgroundImage = 'url("pic3.png")'
    } else if (slide.style.backgroundImage.includes('url("pic5.png")')) {
        slide.style.backgroundImage = 'url("pic4.png")'
    } else if (slide.style.backgroundImage.includes('url("pic6.png")')) {
        slide.style.backgroundImage = 'url("pic5.png")'
    } else if (slide.style.backgroundImage.includes('url("pic7.png")')) {
        slide.style.backgroundImage = 'url("pic6.png")'
    } else if (slide.style.backgroundImage.includes('url("pic8.png")')) {
        slide.style.backgroundImage = 'url("pic7.png")'
    }
}

function splash() {
    var img = document.getElementById('slide');
    img.style.opacity = 1
    console.log("i work")
    setTimeout(() => {  slide.style.backgroundImage = 'url("pic1.png")' }, 5000);
}
