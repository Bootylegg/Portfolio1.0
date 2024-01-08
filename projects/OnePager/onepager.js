let phone = document.getElementById("phone")

function removeelement() {
    phone.style.opacity = 0
}

function addelement() {
    phone.style.opacity = 1
}

let app = document.getElementById("app")
let app2 = document.getElementById("app2")


function removeapp() {
    app.style.opacity = 0
}

function removeapp2() {
    app2.style.opacity = 0
}

function addapp(){
    app.style.opacity = 1
}

function addapp2(){
    app2.style.opacity = 1
}

let colorInterval

function startColorLoop() {
    let hovercheck = 0
    let colorchange = document.getElementById('text')

    colorInterval = setInterval(() => {
        switch (hovercheck) {
            case 0:
                colorchange.style.color = "blue"
                break
            case 1:
                colorchange.style.color = "red"
                break
                case 2:
                colorchange.style.color = "green"
                break
                case 3:
            default:
                colorchange.style.color = "black"
                break
        }
        hovercheck = (hovercheck + 1) % 3
    }, 100)
}

function startColorLoop2() {
    let hovercheck = 0
    let colorchange2 = document.getElementById('text2')

    colorInterval = setInterval(() => {
        switch (hovercheck) {
            case 0:
                colorchange2.style.color = "blue"
                break
            case 1:
                colorchange2.style.color = "red"
                break
                case 2:
                colorchange2.style.color = "green"
                break
                case 3:
            default:
                colorchange2.style.color = "black"
                break
        }
        hovercheck = (hovercheck + 1) % 3
    }, 100)
}

function stopColorLoop() {
    clearInterval(colorInterval)
    document.getElementById('text').style.color = "black"
}

function stopColorLoop2() {
    clearInterval(colorInterval)
    document.getElementById('text2').style.color = "black"
};

let logocheck = 0

function logo() {
    logocheck = 1
    while (logocheck = 1) {
        console.log("get crashed noob")
    }
}               

function backgroundswitch() {
    document.getElementById("right").style.backgroundColor = "white"
    document.getElementById("left").style.backgroundColor = "#970606"
}

function backgroundnormal() {
    document.getElementById("right").style.backgroundColor = "#970606"
    document.getElementById("left").style.backgroundColor = "white"
}

function startColorLoop3() {
    let hovercheck = 0
    let colorchange3 = document.getElementById('right')

    colorInterval = setInterval(() => {
        switch (hovercheck) {
            case 0:
                colorchange3.style.backgroundColor = "blue"
                break
            case 1:
                colorchange3.style.backgroundColor = "red"
                break
                case 2:
                colorchange3.style.backgroundColor = "green"
                break
                case 3:
            default:
                colorchange3.style.backgroundColor = "black"
                break
        }
        hovercheck = (hovercheck + 1) % 3
    }, 100)
}

function stopColorLoop3() {
    clearInterval(colorInterval)
    document.getElementById('right').style.backgroundColor = "#970606"
};  