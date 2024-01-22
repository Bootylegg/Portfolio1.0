var board
var boardWidth = 1500
var boardHeight = 600      
var context

var dinoWidth = 84
var dinoHeight = 94
var dinoX = 50
var dinoY = boardHeight - dinoHeight
var dinoImg

var dino = {
    x: dinoX,
    y: dinoY,
    width: dinoWidth * 0.8,
    height: dinoHeight * 0.8
}
var dinoY = boardHeight - dino.height  

var cactusArray = []

var cactus1Width = 34
var cactus2Width = 69
var cactus3Width = 94

var cactusHeight = 59
var cactusX = 1470
var cactusY = boardHeight - cactusHeight

var cactus1Img
var cactus2Img
var cactus3Img

var velocityX = -5
var velocityY = 0
var gravity = .39

var gameOver = false
var score = 0

var speedUpTimer = 0

window.onload = function() {
    board = document.getElementById("board")
    board.height = boardHeight
    board.width = boardWidth

    context = board.getContext("2d")

    dinoImg = new Image()
    dinoImg.src = "./img/biker1.png"
    dinoImg.onload = function() {
        context.drawImage(dinoImg, dino.x, dino.y, dino.width, dino.height)
    }

    cactus1Img = new Image()
    cactus1Img.src = "./img/cactus1.png"

    cactus2Img = new Image()
    cactus2Img.src = "./img/cactus2.png"

    cactus3Img = new Image()
    cactus3Img.src = "./img/cactus3.png"

    requestAnimationFrame(update)
    setInterval(placeCactus, 1000)
    document.addEventListener("keydown", moveDino)

    setInterval(function() {
        speedUpTimer += 1
        if (speedUpTimer % 10 === 0) {
            velocityX -= 0.5
        }
    }, 1000)
}

function update() {
    requestAnimationFrame(update)
    if (gameOver) {
        showGameOverScreen()
        return
    }
    context.clearRect(0, 0, board.width, board.height)

    velocityY += gravity
    dino.y = Math.min(dino.y + velocityY, dinoY)
    context.drawImage(dinoImg, dino.x, dino.y, dino.width, dino.height)

    for (let i = 0; i < cactusArray.length; i++) {
        let cactus = cactusArray[i]
        cactus.x += velocityX
        context.drawImage(cactus.img, cactus.x, cactus.y, cactus.width, cactus.height)

        if (detectCollision(dino, cactus)) {
            gameOver = true
        }
    }

    context.fillStyle = "black"
    context.font = "20px courier"
    score++
    context.fillText(score, 5, 20)
}

function moveDino(e) {
    if (gameOver) {
        return
    }

    if ((e.code == "Space" || e.code == "ArrowUp") && dino.y == dinoY) {
        velocityY = -11
    }
}

function placeCactus() {
    if (gameOver) {
        return
    }

    let cactus = {
        img: null,
        x: cactusX,
        y: cactusY,
        width: null,
        height: cactusHeight
    }

    let placeCactusChance = Math.random()

    if (placeCactusChance > .90) {
        cactus.img = cactus3Img
        cactus.width = cactus3Width
        cactusArray.push(cactus)
    }
    else if (placeCactusChance > .70) {
        cactus.img = cactus2Img
        cactus.width = cactus2Width
        cactusArray.push(cactus)
    }
    else if (placeCactusChance > .50) {
        cactus.img = cactus1Img
        cactus.width = cactus1Width
        cactusArray.push(cactus)
    }

    if (cactusArray.length > 5) {
        cactusArray.shift()
    }
}

function detectCollision(a, b) {
    return a.x < b.x + b.width &&
           a.x + a.width > b.x &&
           a.y < b.y + b.height &&
           a.y + a.height > b.y
}

function showGameOverScreen() {
    context.fillStyle = "transparent"
    context.fillRect(0, 0, board.width, board.height)

    context.fillStyle = "white"
    context.font = "40px courier"
    context.fillText("Game Over", boardWidth / 2 - 100, boardHeight / 2 - 20)

    context.font = "20px courier"
    context.fillText("Press R to restart", boardWidth / 2 - 100, boardHeight / 2 + 20)
    document.addEventListener("keydown", function(e) {
        if (e.key === "r" || e.key === "R") {
            restartGame()
        }
    })
}

function restartGame() {
    gameOver = false
    score = 0
    dino.y = dinoY
    velocityY = 0
    velocityX = -5
    cactusArray = []
    document.addEventListener("keydown", function(e) {
        if (e.key === "r" || e.key === "R") {
            restartGame()
        }
    })
}