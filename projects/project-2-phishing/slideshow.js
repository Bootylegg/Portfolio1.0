let slide = document.getElementById("slide")

function popup() {   
    if (slide.src.includes("pics/pic1.png")) {
        slide.src="pics/pic1popup.png"
    } else {
    }
}

function nextslide() {
    if (slide.src.includes("pics/pic1popup.png")) {
        slide.src = "pics/pic2.png";
    } else if (slide.src.includes("pics/pic2.png")) {
        slide.src = "pics/pic3.png";
    }
}

function previousslide() {
    if (slide.src.includes("pics/pic3.png")) {
        slide.src = "pics/pic2.png";
    } else if (slide.src.includes("pics/pic2.png")) {
        slide.src = "pics/pic1.png";
    }
}