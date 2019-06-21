// Initialisation
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// Constants
const CANVAS_WIDTH = canvas.width;
const CANVAS_HEIGHT = canvas.height;

// Global Variables
let g = new Game();
let $levelName = document.getElementById("levelName");
let $levelNumber = document.getElementById("levelNumber");
let $levelMax = document.getElementById("numberOfLevels");
let $body = document.querySelector("body");
let $audio = document.getElementById("myAudio")


// ANIMATION

function animation() {
  drawEverything();
  updateEverything();

  showLevelNumber();
  hideLevelName();
  window.requestAnimationFrame(animation);
}

animation();


// DRAW

function drawEverything() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  g.draw(ctx);
}


// UPDATE

function updateEverything() {
  g.update();
}


// HOME

function drawHomeScreen() {
  ctx.save();

  $body.style.backgroundColor = "#eeeeee";
  ctx.fillStyle = "#eeeeee"
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#004d61";
  ctx.font = "80px Permanent Marker";
  ctx.textAlign = "center";
  ctx.fillText("Where is Maxence ?", CANVAS_WIDTH / 2, 300);
  ctx.fillStyle = "#ff5722";
  ctx.font = "20px Permanent Marker";
  ctx.fillText("< SPACE >", CANVAS_WIDTH / 2, 500);

  ctx.restore();
}


// WIN

function drawWinScreen() {
  ctx.save();

  $body.style.backgroundColor = "#94fc13";

  ctx.fillStyle = "#94fc13";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#004d61";
  ctx.font = "120px Permanent Marker";
  ctx.textAlign = "center";
  ctx.fillText("You Win !!", CANVAS_WIDTH / 2, 300);
  ctx.font = "40px Permanent Marker";
  ctx.textAlign = "center";
  ctx.fillText("Started from the Bottom", CANVAS_WIDTH / 2, 500);
  ctx.fillText("now you´re here ! :)", CANVAS_WIDTH / 2, 550) 

  ctx.restore();
}


// GAME OVER

function drawGameOver() {
  ctx.save();

      ctx.globalAlpha = 0.8;
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      ctx.globalAlpha = 1;
      ctx.fillStyle = "#eeeeee";
      ctx.font = "120px Permanent Marker";
      ctx.textAlign = "center";
      ctx.fillText("Game over", CANVAS_WIDTH / 2, 275);
      ctx.fillStyle = "#94fc13";
      ctx.font = "30px Permanent Marker";
      ctx.textAlign = "center";
      ctx.fillText("You lost him, I know it´s hard, but", CANVAS_WIDTH / 2, 350)
      ctx.fillText("come on, You can do better !! ;)", CANVAS_WIDTH / 2, 400);
      ctx.fillStyle = "#ff5722";
      ctx.font = "20px Permanent Marker";
      ctx.textAlign = "center";
      ctx.fillText("< space >", CANVAS_WIDTH / 2, 500);

      ctx.restore();
}

// DOM MANIPULATION

function hideLevelName() {
  if (g.page === "home" || g.isGameOver || g.page === "win") {
    $levelName.style.display = "none";
    $levelNumber.style.display = "none";
    $levelMax.style.display = "none";
  } else {
    $levelName.style.display = "inline";
    $levelNumber.style.display = "inline";
    $levelMax.style.display = "inline";
  }
}

function showLevelNumber() {
  if (g.page !== "home") 
  $levelNumber.innerHTML = g.level;
}


// MOUSECLICK ON CANVAS

function distance(a, b) {
  return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
}

document.querySelector("canvas").onclick = e => {
  let x = (e.layerX / canvas.clientWidth) * CANVAS_WIDTH;
  let y = (e.layerY / canvas.clientHeight) * CANVAS_HEIGHT;

  initGame()
  g.guess(x, y);
  $audio.play();
  
};


// EVENTLISTENER

function initGame() {
  if (g.page === "home" || g.page === "win" || g.isGameOver) {
    g.level = 1;
    g.startGame();
  }
}

document.onkeydown = event => {
  if (event.keyCode === 32) {
    initGame();
    $audio.play();
  }
};

