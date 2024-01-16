let clickcount = 0;

let click1 = 15;
let click10 = 250;
let click25 = 2000;

let price1 = document.getElementById("price1")
let price10 = document.getElementById("price10")
let price25 = document.getElementById("price25")

let totalcollected = document.getElementById("totalcollected")

function audio() {
    var audio = new Audio('meow.mp3')
    audio.play()
}

function counter(){
    document.getElementById("clicknumber").innerHTML = Math.round(clickcount);
}

function clicky() {
    clickcount++
    chance()
    if(randomnumber == 1) {
        console.log("im 1")
        document.getElementById("gold").style.maxWidth = "30%"
    }
    totalcollected.innerHTML++
    counter()
    audio()
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
        setInterval(plus1, 1500)
        price1.innerHTML = Math.round(price1.innerHTML * 1.1)
    }
}

function add10click() {
    if(clickcount >= price10.innerHTML) {
        clickcount -= price10.innerHTML
        counter()
        document.getElementById("bought10").innerHTML++
        setInterval(plus10, 3000)
        price10.innerHTML = Math.round(price10.innerHTML * 1.35)
    }
}

function add25click() {
    if(clickcount >= price25.innerHTML) {
        clickcount -= price25.innerHTML
        counter()
        document.getElementById("bought25").innerHTML++
        setInterval(plus25, 5000)
        price25.innerHTML = Math.round(price25.innerHTML * 1.2)
    }
}

function add50click() {
    if(clickcount >= price50.innerHTML) {
        clickcount -= price50.innerHTML
        counter()
        document.getElementById("bought50").innerHTML++
        setInterval(plus50, 4000)
        price50.innerHTML = Math.round(price50.innerHTML * 1.2)
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

function plus50() {
    clickcount += 50
    totalcollected.innerHTML = parseInt(50) + parseInt(totalcollected.innerHTML)
    counter()
}

function chance() {
    randomnumber = Math.random()*450
    randomnumber = Math.round(randomnumber)
    console.log(randomnumber)
}

function goldcat() {
    let addgold = clickcount / 2
    addgold = Math.round(addgold)
    if (document.getElementById("gold").style.opacity = 1) {
        clickcount += addgold
        totalcollected.innerHTML = parseInt(addgold) + parseInt(totalcollected.innerHTML)
        chance()
        document.getElementById("gold").style.maxWidth = "0%"
        counter()
    }
}