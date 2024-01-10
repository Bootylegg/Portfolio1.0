let clickcount = 0;

let click1 = 15;
let click10 = 250;
let click25 = 2000;

let price1 = document.getElementById("price1")
let price10 = document.getElementById("price10")
let price25 = document.getElementById("price25")

let totalcollected = document.getElementById("totalcollected")

var audio = new Audio('meow.mp3')
audio.play()

function counter(){
    document.getElementById("clicknumber").innerHTML = Math.round(clickcount);
}

function clicky() {
    clickcount++
    totalcollected.innerHTML++
    counter()
    twenny()
    audio.play()
    document.getElementById("clicker").style.backgroundImage = 'url("catclickmouth.png")'
    setTimeout(() => {
        document.getElementById("clicker").style.backgroundImage = 'url("catclick.png")'
    }, 500);
    
}

function add1click() {
    if(clickcount >= price1.innerHTML) {
        clickcount -= price1.innerHTML
        counter()
        document.getElementById("bought1").innerHTML++
        setInterval(plus1, 2500)
        price1.innerHTML = Math.round(price1.innerHTML * 1.1)
        twenny()
    }
}

function add10click() {
    if(clickcount >= price10.innerHTML) {
        clickcount -= price10.innerHTML
        counter()
        document.getElementById("bought10").innerHTML++
        setInterval(plus10, 5000)
        price10.innerHTML = Math.round(price10.innerHTML * 1.35)
        twenny()
    }
}

function add25click() {
    if(clickcount >= price25.innerHTML) {
        clickcount -= price25.innerHTML
        counter()
        document.getElementById("bought25").innerHTML++
        setInterval(plus25, 7500)
        price25.innerHTML = Math.round(price25.innerHTML * 1.75)
        twenny()
    }
}

function plus1() {
    clickcount++
    totalcollected.innerHTML = parseInt(1) + parseInt(totalcollected.innerHTML)
    counter()
}

function plus10() {
    clickcount += 10
    totalcollected.innerHTML = parseInt(10) + parseInt(totalcollected.innerHTML)
    counter()
}

function plus25() {
    clickcount += 25
    totalcollected.innerHTML = parseInt(25) + parseInt(totalcollected.innerHTML)
    counter()
}

function twenny() {
    if(clickcount == 20) {
        document.getElementById("clicker").style.backgroundImage = 'url("cat20.png")'
    } else {
        document.getElementById("clicker").style.backgroundImage = 'url("catclick.png")'
    }
}