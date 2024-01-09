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
}

function add1click() {
    if(clickcount > price1.innerHTML) {
        clickcount -= price1.innerHTML
        counter()
        setInterval(plus1, 2500)
        price1.innerHTML *= 2.5
    }
}

function add10click() {
    if(clickcount > price10.innerHTML) {
        clickcount -= price10.innerHTML
        counter()
        setInterval(plus10, 5000)
        price10.innerHTML *= 2.5
    }
}

function add25click() {
    if(clickcount > price25.innerHTML) {
        clickcount -= price25.innerHTML
        counter()
        setInterval(plus25, 7500)
        price25.innerHTML *= 2.5
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