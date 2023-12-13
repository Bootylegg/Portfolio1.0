/* Make */
let a = 7;
let b = 7;
let c = 10;
let d = 10;
let gensound = new Audio("gen.mp3");

function generate() {
    gensound.play();
    a = Math.floor(Math.random() * (50 - -10 + 1) + -10)
    b = Math.floor(Math.random() * (50 - -10 + 1) + -10)
    c = Math.floor(Math.random() * (50 - -10 + 1) + -10)
    d = Math.floor(Math.random() * (50 - -10 + 1) + -10)
    let e = a + d
    let f = b + c
    let g = a + b
    let h = c + d
    let i = b + d
    let j = a + c
    document.getElementById("aa").innerHTML = e;
    document.getElementById("ad").innerHTML = f;
    document.getElementById("ah").innerHTML = g;
    document.getElementById("al").innerHTML = h;
    document.getElementById("an").innerHTML = i;
    document.getElementById("ao").innerHTML = j;
    clearansw();
}

function answer() {
    document.getElementById("af").innerHTML = a;
    document.getElementById("ag").innerHTML = b;
    document.getElementById("aj").innerHTML = c;
    document.getElementById("ak").innerHTML = d;
    setTimeout(clearansw, 25000)
}

function clearansw() {
    document.getElementById("af").innerHTML = "";
    document.getElementById("ag").innerHTML = "";
    document.getElementById("aj").innerHTML = "";
    document.getElementById("ak").innerHTML = "";
}

function func() {
    while (true) {
        console.warn(Math.floor(Math.random() * (9999 - -9999 + 1) + -9999));
    }
}
/* Make */
/* Solve */
let s1 = document.getElementById("bf")
let s2 = document.getElementById("bg")
let s3 = document.getElementById("bj")
let s4 = document.getElementById("bk")

let input1 = document.getElementById("bai")
let input2 = document.getElementById("bdi")
let input3 = document.getElementById("bhi")
let input4 = document.getElementById("bli")
let input5 = document.getElementById("bni")
let input6 = document.getElementById("boi")

let button = document.getElementById("solve")

function solve() {
    gensound.play();
    let s22 = -100;
    let s23 = -100;
    let s32 = -100;
    let s33 = -100;

    while (s23 + s33 != input6.value || s22 + s33 != input1.value || s32 + s23 != input2.value) {
        s32++
        s22 = input5.value - s32;
        s23 = input3.value - s22;
        s33 = input4.value - s32;
    }
    s1.innerText = s22;
    s2.innerText = s23;
    s3.innerText = s32;
    s4.innerText = s33;
}
button.addEventListener("click", solve);