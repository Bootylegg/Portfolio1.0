
let board;
let boardWidth = 1000;
let boardHeight = 500;
let context; 


let playerWidth = 150; 
let playerHeight = 10;
let playerVelocityX = 15; 

let player = {
    x : boardWidth/2 - playerWidth/2,
    y : boardHeight - playerHeight - 5,
    width: playerWidth,
    height: playerHeight,
    velocityX : playerVelocityX
}


let ballWidth = 10;
let ballHeight = 10;
let ballVelocityX = 2; 
let ballVelocityY = 1; 

let ball = {
    x : boardWidth/2,
    y : boardHeight/2,
    width: ballWidth,
    height: ballHeight,
    velocityX : ballVelocityX,
    velocityY : ballVelocityY
}


let blockArray = [];
let blockWidth = 50;
let blockHeight = 10;
let blockColumns = 8; 
let blockRows = 3; 
let blockMaxRows = 10; 
let blockCount = 0;


let blockX = 15;
let blockY = 45;

let score = 0;
let gameOver = false;

var audio = new Audio('./breakout_audio/begin_game.mp3');
var hit_wall = new Audio("./breakout_audio/hit_wall.mp3")
var lost = new Audio("./breakout_audio/game_over.mp3")

window.onload = function() {
    board = document.getElementById("board");
    board.height = boardHeight;
    board.width = boardWidth;
    context = board.getContext("2d"); 


    context.fillStyle="skyblue";
    context.fillRect(player.x, player.y, player.width, player.height);

    requestAnimationFrame(update);
    document.addEventListener("keydown", movePlayer);


    createBlocks();
}

function update() {
    requestAnimationFrame(update);

    if (gameOver) {
        return;
    }
    context.clearRect(0, 0, board.width, board.height);

    
    context.fillStyle = "blue";
    context.fillRect(player.x, player.y, player.width, player.height);

    
    context.fillStyle = "white";
    ball.x += ball.velocityX;
    ball.y += ball.velocityY;
    context.fillRect(ball.x, ball.y, ball.width, ball.height);

   
    if (topCollision(ball, player) || bottomCollision(ball, player)) {
        hit_wall.play()
        ball.velocityY *= -1;   
    }
    else if (leftCollision(ball, player) || rightCollision(ball, player)) {
        hit_wall.play()
        ball.velocityX *= -1;   
    }

    if (ball.y <= 0) { 
       
        ball.velocityY *= -1; 
    }
    else if (ball.x <= 0 || (ball.x + ball.width >= boardWidth)) {
        
        ball.velocityX *= -1; 
    }
    else if (ball.y + ball.height >= boardHeight) {
        lost.play()
        
        context.font = "20px sans-serif";
        context.fillText("Press 'Space' to Try again", 80, 400);
        gameOver = true;
    }


    context.fillStyle = "red";
    for (let i = 0; i < blockArray.length; i++) {
        let block = blockArray[i];
        if (!block.break) {
            if (topCollision(ball, block) || bottomCollision(ball, block)) {
                hit_wall.play()
                block.break = true;     
                ball.velocityY *= -1;   
                score += 100;
                blockCount -= 1;
            }
            else if (leftCollision(ball, block) || rightCollision(ball, block)) {
                hit_wall.play()
                block.break = true;     
                ball.velocityX *= -1;   
                score += 100;
                blockCount -= 1;
            }
            context.fillRect(block.x, block.y, block.width, block.height);
        }
    }

    
    if (blockCount == 0) {
        score += 100*blockRows*blockColumns; 
        blockRows = Math.min(blockRows + 1, blockMaxRows);
        createBlocks();
    }

   
    context.font = "20px sans-serif";
    context.fillText(score, 10, 25);
}

function outOfBounds(xPosition) {
    return (xPosition < 0 || xPosition + playerWidth > boardWidth);
}

function movePlayer(e) {
    if (gameOver) {
        if (e.code == "Space") {
            resetGame();
            console.log("RESET");
        }
        return;
    }
    if (e.code == "ArrowLeft") {
       
        let nextplayerX = player.x - player.velocityX;
        if (!outOfBounds(nextplayerX)) {
            player.x = nextplayerX;
        }
    }
    else if (e.code == "ArrowRight") {
        let nextplayerX = player.x + player.velocityX;
        if (!outOfBounds(nextplayerX)) {
            player.x = nextplayerX;
        }
         
    }
}

function detectCollision(a, b) {
    return a.x < b.x + b.width &&   
           a.x + a.width > b.x &&   
           a.y < b.y + b.height &&  
           a.y + a.height > b.y;    
}

function topCollision(ball, block) { 
    return detectCollision(ball, block) && (ball.y + ball.height) >= block.y;
}

function bottomCollision(ball, block) { 
    return detectCollision(ball, block) && (block.y + block.height) >= ball.y;
}

function leftCollision(ball, block) { 
    return detectCollision(ball, block) && (ball.x + ball.width) >= block.x;
}

function rightCollision(ball, block) { 
    return detectCollision(ball, block) && (block.x + block.width) >= ball.x;
}

function createBlocks() {
    blockArray = []; 
    for (let c = 0; c < blockColumns; c++) {
        for (let r = 0; r < blockRows; r++) {
            let block = {
                x : blockX + c*blockWidth + c*15, //space between
                y : blockY + r*blockHeight + r*15, //space between
                width : blockWidth,
                height : blockHeight,
                break : false
            }
            blockArray.push(block);
        }
    }
    blockCount = blockArray.length;
}

function resetGame() {
    gameOver = false;
    player = {
        x : boardWidth/2 - playerWidth/2,
        y : boardHeight - playerHeight - 5,
        width: playerWidth,
        height: playerHeight,
        velocityX : playerVelocityX
    }
    ball = {
        x : boardWidth/2,
        y : boardHeight/2,
        width: ballWidth,
        height: ballHeight,
        velocityX : ballVelocityX,
        velocityY : ballVelocityY
    }
    blockArray = [];
    blockRows = 3;
    score = 0;
    createBlocks();
}