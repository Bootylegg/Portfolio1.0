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

let gif = document.getElementById("left")
let gif2 = document.getElementById("flexstart")

let cpsnum = 0 
let extraclick = 1

var audio = new Audio('meow.mp3')
var audio2 = new Audio('yippee.mp3')
var audio3 = new Audio('upgrademeow.mp3')

function backgroundBody() {
    gif2.style.backgroundImage = "url('firework.gif')"
    setTimeout(() => {
        gif2.style.backgroundImage = "url('')"
    }, 5500);
}

function backgroundLeft() {
    gif.style.backgroundImage = "url('maxwell-cat.gif')"
    setTimeout(() => {
        gif.style.backgroundImage = "url('')"
    }, 5500);
}

function cpsconvert() {
    document.getElementById("totalcps").innerHTML = cpsnum.toFixed(2)
    // to fixed to makes it a string
}

function counter(){
    document.getElementById("clicknumber").innerHTML = clickcount
    document.getElementById("totalcollected").innerHTML = totalcollected
}

function clicky() {
    clickcount += clickplus 
    chance()
    audio.play()
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
    audio3.play
    if(clickcount >= price1.innerHTML) {
        clickcount -= price1.innerHTML
        cpsnum++
        audio3.play()
        cpsconvert()
        counter()
        document.getElementById("bought1").innerHTML++
        setInterval(plus1, 1000)
        price1.innerHTML = Math.round(price1.innerHTML * 1.1)
        backgroundLeft()
        backgroundBody()
    }
}

function add10click() {
    if(clickcount >= price10.innerHTML) {
        clickcount -= price10.innerHTML
        cpsnum += 5
        audio3.play()
        cpsconvert()
        counter()
        document.getElementById("bought10").innerHTML++
        setInterval(plus10, 2000)
        price10.innerHTML = Math.round(price10.innerHTML * 1.2)
        backgroundLeft()
        backgroundBody()
    }
}

function add25click() {
    if(clickcount >= price25.innerHTML) {
        clickcount -= price25.innerHTML
        cpsnum += 6.25
        audio3.play()
        cpsconvert()
        counter()
        document.getElementById("bought25").innerHTML++
        setInterval(plus25, 4000)
        price25.innerHTML = Math.round(price25.innerHTML * 1.3)
        backgroundLeft()
        backgroundBody()
    }
}

function add50click() {
    if(clickcount >= price50.innerHTML) {
        clickcount -= price50.innerHTML
        counter()
        cpsnum += 8.33
        audio3.play()
        cpsconvert()
        document.getElementById("bought50").innerHTML++
        setInterval(plus50, 6000)
        price50.innerHTML = Math.round(price50.innerHTML * 1.4)
        backgroundLeft()
        backgroundBody()
    }
}

function clickperupdate() {
    document.getElementById("clicksperclick").innerHTML = extraclick
}

function addclick() {
    if(clickcount >= priceclick.innerHTML)  {
        extraclick++
        audio3.play()
        clickperupdate()
        clickplus++
        clickcount -= priceclick.innerHTML
        counter()
        document.getElementById("boughtclick").innerHTML++
        priceclick.innerHTML = Math.round(priceclick.innerHTML * 1.5)
        backgroundLeft()
        backgroundBody()
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
    if (document.getElementById("gold").src.includes("catgold.png")) {
        let addgold = clickcount / 2
        addgold = Math.round(addgold)
        clickcount += addgold
        audio2.play()
        totalcollected = addgold + totalcollected
        chance()
        counter()
        document.getElementById("gold").src = "yippee.png"
        setTimeout(() => {
            document.getElementById("gold").src = "catgold.png"
        }, 3000);
        setTimeout(() => {
            document.getElementById("gold").style.maxWidth = "0px"
            document.getElementById("gold").style.minWidth = "0px"
            document.getElementById("gold").style.maxHeight = "0px"
            document.getElementById("gold").style.minHeight = "0px"
        }, 2500);
    }
}

// stock market randomly generated numbers from -10 to +10 
// 1 item costs (price) and if player buys at -5 sells at +3 do x8

let setprice = document.getElementById("marketprice")

const market = [500,1000,1500,2500,3000,3500,4000,4500,5000,5500]
let marketsave

let randomprice = market[Math.floor(Math.random() * 10)]

function updateprice() {
    setprice.innerHTML = setmarketprice
}

function randommarket() {
    setmarketprice = 1000
    console.log("randomMarket", randomprice)
    setmarketprice = (setmarketprice += randomprice)
    setprice.innerHTML = setmarketprice 
    console.log("market price =",setmarketprice)
    setprice = document.getElementById("marketprice")
}

function marketcheck() {
    if(clickcount >= setmarketprice){
        clickcount -= setmarketprice
        counter()
        if(randomprice == 500) {
            let marketsave = 0
        } else if(randomprice == 1000) {
            marketsave = 1
        } else if(randomprice == 1500) {
            marketsave = 2
        } else if(randomprice == 2000) {
            marketsave = 3
        } else if(randomprice == 2500) {
            marketsave = 4
        } else if(randomprice == 3000) {
            marketsave = 5
        } else if(randomprice == 3500) {
            marketsave = 6
        } else if(randomprice == 4000) {
            marketsave = 7
        } else if(randomprice == 4500) {
            marketsave = 8
        } else if(randomprice == 5000) {
            marketsave = 9
        } else if(randomprice == 5500) {
            marketsave = 10
        }
    }
    console.log("im ",marketsave, " randomprice = ",randomprice,)
}