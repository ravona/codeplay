const message = document.querySelector(".message");
const gameArea = document.querySelector(".gameArea");
const gameColors = ["red", "blue", "green", "yellow"];
const button = document.querySelector(".button");

let gameClicks = [];
let userClicks = [];
let inPlay = false;
let playNum = 3;

button.addEventListener("click", function () {
  if (!inPlay) {
    player();
  }
});

function player() {
  button.style.display = "none";
  gameClicks = [];
  userClicks = [];
  runSequence(playNum);
}

function runSequence(num) {
  let squares = document.querySelectorAll(".box");
  num--;

  if (num < 0) {
    inPlay = true;
    return;
  }

  let randomNum = Math.floor(Math.random() * gameColors.length);
  gameClicks.push(gameColors[randomNum]);
  console.log(gameClicks);
  squares[randomNum].style.opacity = 1;

  setTimeout(function () {
    squares[randomNum].style.opacity = "0.5";
    setTimeout(function () {
      runSequence(num);
    }, 100);
  }, 500);
}

function setup() {
  for (let x = 0; x < gameColors.length; x++) {
    let div = elementFactory("div");
    div.classList.add("box");
    div.style.opacity = "0.5";
    div.style.backgroundColor = gameColors[x];
    div.myColor = gameColors[x];
    div.addEventListener("click", checkAnswer);
    gameArea.appendChild(div);
  }
}

function checkAnswer(e) {
  if (inPlay) {
    let el = e.target;
    console.log(el.myColor);
    userClicks.push(el.myColor);
    console.log(userClicks);
    el.style.opacity = "1";
    setTimeout(function () {
      el.style.opacity = "0.5";
    }, 500);
    if (userClicks.length === gameClicks.length) {
      inPlay = false;
      endGame();
    }
  }
}

function messanger(mes) {
  message.innerHTML = mes;
}

function endGame() {
  button.style.display = "block";
  messanger("Game Over");

  if (userClicks.toString() === gameClicks.toString()) {
    playNum++;
    messanger("Correct! You are at level " + playNum);
  } else {
    messanger("Not Correct");
    inPlay = false;
    playNum = 3;
  }
}

function elementFactory(elementType) {
  return document.createElement(elementType);
}

window.addEventListener("load", setup);
