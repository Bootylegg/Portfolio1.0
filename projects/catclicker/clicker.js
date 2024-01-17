let clickcount = 0
let clickplus = 1
let totalcollected = 0

let click1 = 15
let click10 = 250
let click25 = 2000

let price1 = document.getElementById("price1")
let price10 = document.getElementById("price10")
let price25 = document.getElementById("price25")

let height = document.getElementById("goldcat").offsetHeight
let width = document.getElementById("goldcat").offsetWidth

function audio() {
    var audio = new Audio('meow.mp3')
    audio.play()
}

function counter(){
    document.getElementById("clicknumber").innerHTML = clickcount
    document.getElementById("totalcollected").innerHTML = totalcollected
}

function clicky() {
    clickcount += clickplus 
    chance()
    height = document.getElementById("goldcat").offsetHeight
    width = document.getElementById("goldcat").offsetWidth
    let heightconvert = height -10 + "px"
    let widthconvert = width - 10 + "px";
    if(randomnumber == 1) {
        document.getElementById("gold").style.maxWidth = widthconvert
        document.getElementById("gold").style.minWidth = widthconvert
        document.getElementById("gold").style.maxHeight = heightconvert
        document.getElementById("gold").style.minHeight = heightconvert
    }
    totalcollected += clickplus
    counter()
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
        price10.innerHTML = Math.round(price10.innerHTML * 1.2)
    }
}

function add25click() {
    if(clickcount >= price25.innerHTML) {
        clickcount -= price25.innerHTML
        counter()
        document.getElementById("bought25").innerHTML++
        setInterval(plus25, 5000)
        price25.innerHTML = Math.round(price25.innerHTML * 1.3)
    }
}

function add50click() {
    if(clickcount >= price50.innerHTML) {
        clickcount -= price50.innerHTML
        cps.innerHTML += 12.5
        counter()
        document.getElementById("bought50").innerHTML++
        setInterval(plus50, 4000)
        price50.innerHTML = Math.round(price50.innerHTML * 1.4)
    }
}

function addclick() {
    if(clickcount >= priceclick.innerHTML)  {
        clickplus++
        clickcount -= priceclick.innerHTML
        counter()
        document.getElementById("boughtclick").innerHTML++
        priceclick.innerHTML = Math.round(priceclick.innerHTML * 1.5)
    }
}

function plus1() {
    clickcount++
    totalcollected = 1 + totalcollected
    counter()
}

function plus10() {
    clickcount += 10
    totalcollected = 10 + totalcollected
    counter()
}

function plus25() {
    clickcount += 25
    totalcollected = 25 + totalcollected
    counter()
}

function plus50() {
    clickcount += 50
    totalcollected = 50 + totalcollected
    counter()
}

function chance() {
    randomnumber = Math.random()*450
    randomnumber = Math.round(randomnumber)
}

function goldcat() {
    let addgold = clickcount / 2
    addgold = Math.round(addgold)
        clickcount += addgold
        totalcollected = addgold + totalcollected
        chance()
        document.getElementById("gold").style.maxWidth = "0%"
        counter()
        document.getElementById("gold").style.maxWidth = "0vw"
        document.getElementById("gold").style.minWidth = "0vw"
        document.getElementById("gold").style.maxHeight = "0vh"
        document.getElementById("gold").style.minHeight = "0vh"
}