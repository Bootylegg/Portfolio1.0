let slide = document.getElementById("slide")
let button = document.getElementById("button")

let choice = document.getElementById("choice")
let choice2 = document.getElementById("choice2")
let choice3 = document.getElementById("choice3")

function popup() {   
    if (slide.src.includes("pics/pic1.png")) {
        slide.src="pics/pic1popup.png"
    }
}

function pic2choice1() {
    if(slide.src.includes("pics/pic2.png")) {
        slide.src = "pics/page2choice1.png"
        choice.style.opacity = 0
        choice2.style.opacity = 0
        choice3.style.opacity = 0
    }
}

function pic2choice2() {
    if(slide.src.includes("pics/pic2.png")) {
        slide.src = "pics/page2choice2.png"
        choice.style.opacity = 0
        choice2.style.opacity = 0
        choice3.style.opacity = 0
    }
}

function pic2choice3() {
    if(slide.src.includes("pics/pic2.png")) {
        slide.src = "pics/page2choice3.png"
        choice.style.opacity = 0
        choice2.style.opacity = 0
        choice3.style.opacity = 0
        setTimeout(() => {location.reload()}, 5000);
    }
}

function home() {
    slide.src = "pics/pic1.png"
    choice.style.opacity = 0
    choice2.style.opacity = 0
    choice3.style.opacity = 0
}

function nextslide() {
    if (slide.src.includes("pics/pic1popup.png")) {
        slide.src = "pics/pic2.png"
        choice.style.opacity = 1
        choice2.style.opacity = 1
        choice3.style.opacity = 1
    } else if (slide.src.includes("pics/page2choice1.png")) {
        slide.src = "pics/pic3.png"
    } else if (slide.src.includes("pics/page2choice2.png")) {
        slide.src = "pics/pic3.png"
    } else if (slide.src.includes("pics/pic3.png")) {
        slide.src = "pics/pic4.png"
    } else if (slide.src.includes("pics/pic4.png")) {
        slide.src = "pics/pic5.png"
    } else if (slide.src.includes("pics/pic5.png")) {
        slide.src = "pics/pic6.png"
    } else if (slide.src.includes("pics/pic6.png")) {
        slide.src = "pics/pic7.png"
    } else if (slide.src.includes("pics/pic7.png")) {
        slide.src = "pics/pic8.png"
    }
}

function previousslide() {
    if (slide.src.includes("pics/pic3.png")) {
        slide.src = "pics/pic2.png"
        choice.style.opacity = 1
        choice2.style.opacity = 1
        choice3.style.opacity = 1
    } else if (slide.src.includes("pics/pic2.png")) {
        slide.src = "pics/pic1.png"
        choice.style.opacity = 0
        choice2.style.opacity = 0
        choice3.style.opacity = 0;
    } else if (slide.src.includes("pics/pic1popup.png")) {
        slide.src = "pics/pic1.png"
    } else if (slide.src.includes("pics/pic4.png")) {
        slide.src = "pics/pic3.png"
    } else if (slide.src.includes("pics/pic5.png")) {
        slide.src = "pics/pic4.png"
    } else if (slide.src.includes("pics/pic6.png")) {
        slide.src = "pics/pic5.png"
    } else if (slide.src.includes("pics/pic7.png")) {
        slide.src = "pics/pic6.png"
    } else if (slide.src.includes("pics/pic8.png")) {
        slide.src = "pics/pic7.png"
    }
}

window.onload = function() {
    var img = document.getElementById('slide');
    img.style.opacity = 1
    if (slide.src.includes("pics/splashscreen.png")) {
        setTimeout(() => {  slide.src = "pics/pic1.png" }, 5000);
    }
}
