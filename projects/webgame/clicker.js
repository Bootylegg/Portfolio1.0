let clickcount = 0;


// prices
let click1 = 100;
let click10 = 1000;
let click100 = 2000;

function counter(){
    document.getElementById("clicknumber").innerHTML = clickcount;
}

function clicky() {
    clickcount++
    counter()
}

function add1click() {
    if(clickcount => click1) {
        // 1 click per second extra :D
    }
}
