let clickcount = 0;

let click1 = 15;
let click10 = 250;
let click25 = 2000;

let price1 = document.getElementById("price1")
let price10 = document.getElementById("price10")
let price25 = document.getElementById("price25")

function counter(){
    document.getElementById("clicknumber").innerHTML = Math.round(clickcount);
}

function clicky() {
    clickcount++
    counter()
    twenny()
}

function add1click() {
    if(clickcount >= price1.innerHTML) {
        clickcount -= price1.innerHTML
        counter()
        setInterval(plus1, 2500)
        price1.innerHTML = Math.round(price1.innerHTML * 1.9)
        twenny()
    }
}

function add10click() {
    if(clickcount >= price10.innerHTML) {
        clickcount -= price10.innerHTML
        counter()
        setInterval(plus10, 5000)
        price10.innerHTML = Math.round(price10.innerHTML * 2.5)
        twenny()
    }
}

function add25click() {
    if(clickcount >= price25.innerHTML) {
        clickcount -= price25.innerHTML
        counter()
        setInterval(plus25, 7500)
        price25.innerHTML = Math.round(price25.innerHTML * 2.5)
        twenny()
    }
}

function plus1() {
    clickcount++
    counter()
}

function plus10() {
    clickcount += 10
    counter()
}

function plus25() {
    clickcount += 25
    counter()
}

function twenny() {
    if(clickcount == 20) {
        document.getElementById("clicker").style.backgroundImage = 'url("cat20.png")'
    } else {
        document.getElementById("clicker").style.backgroundImage = 'url("catclick.png")'
    }
}

// make a visual indication for how many cllicker you have
// total cookies collected