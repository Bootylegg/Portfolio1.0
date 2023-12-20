

var blocksize = 25
var rows = 20
var cols = 20
var board
var context


var snakeX = blocksize * 5
var snakeY = blocksize * 5

var velocityX = 0
var velocityY = 0

var snakeBody = []


var foodX
var foodY

var gameOver = false

var snek_up = new Audio("./snek_audio/snek_up.mp3")
var snek_left_right = new Audio("./snek_audio/snek_left_right.mp3")
var snek_down = new Audio("./snek_audio/snek_down.mp3")


window.onload = function() {
    board = document.getElementById("board")
    board.height = rows * blocksize
    board.width = cols * blocksize
    context = board.getContext("2d")

    placeFood()
    document.addEventListener("keyup", changeDirection)
    //update()
    setInterval(update, 1000/10)
}

function update() {
    if (gameOver) {
        return
    }
    console.log(snakeBody)

    context.fillStyle = "blue"
    context.fillRect(0, 0, board.width, board.height)

    context.fillStyle = "red"
    context.fillRect(foodX, foodY, blocksize, blocksize)

    if (snakeX == foodX && snakeY == foodY) {
        snakeBody.push([foodX, foodY])
        placeFood()
    }

    for (let i = snakeBody.length-1; i > 0; i--) {
        snakeBody[i] = snakeBody[i-1]
    }
    if (snakeBody.length) {
        snakeBody[0] = [snakeX, snakeY]
    }

    context.fillStyle = "orange"
    snakeX += velocityX * blocksize
    snakeY += velocityY * blocksize
    context.fillRect(snakeX, snakeY, blocksize, blocksize)
    for (let i = 0; i < snakeBody.length; i++) {
        context.fillRect(snakeBody[i][0], snakeBody[i][1], blocksize, blocksize)
    }

    if (snakeX < 0 || snakeX > cols * blocksize || snakeY < 0 || snakeY > rows * blocksize) {
        gameOver = true
        alert("Snek is ded... oof! :P")
    }

    for (let i = 0; i < snakeBody.length; i++) {
        if (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) {
            gameOver = true
            alert("Snek is ded... oof! :P")
        }
    }
}

function changeDirection(e) {
    if (e.code == "ArrowUp" && velocityY != 1) {
        snek_up.play()
        velocityX = 0
        velocityY = -1
    }
    else if (e.code == "ArrowDown" && velocityY != -1) {
        snek_down.play()
        velocityX = 0
        velocityY = 1
    }
    else if (e.code == "ArrowLeft" && velocityX != 1) {
        snek_left_right.play()
        velocityX = -1
        velocityY = 0
    }
    else if (e.code == "ArrowRight" && velocityX != -1) {
        snek_left_right.play()
        velocityX = 1
        velocityY = 0
    }
}

function placeFood() {
    foodX = Math.floor(Math.random() * cols) * blocksize
    foodY = Math.floor(Math.random() * rows) * blocksize
}