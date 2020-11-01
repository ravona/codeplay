"use strict";

const rollBtn = document.querySelector("#roll");
let players = document.querySelector("#players");
let rolls = document.querySelector("#rolls");
let winner = document.querySelector("#winner");
let title = document.querySelector(".title");
let numberOfPlayers = 0;

// utility functions:
function renderItem(element, content, style) {
  let item = document.createElement("div");
  item.className = style;
  let itemContent = document.createTextNode(content);
  item.appendChild(itemContent);
  element.appendChild(item);
}

function getRandomInt(num) {
  return Math.floor(Math.random() * num + 1);
}

class Player {
  constructor(index, roll) {
    this.index = index;
    this.roll = roll;
  }
}

function formatResult(rollNumber) {
  let rollInUnicode = 9855 + rollNumber;
  rollInUnicode = rollInUnicode.toString();
  rollInUnicode = String.fromCodePoint(rollInUnicode);
  return rollInUnicode;
}

function resetGame() {
  players.textContent = "";
  rolls.textContent = "";
  winner.textContent = "";
}

function handleRollClick() {
  if (!numberOfPlayers) {
    numberOfPlayers = prompt("How many players?");
  }

  resetGame();

  let highestRoll = 0;
  let winningPlayer = "";
  winner.style.display = "flex";

  for (let i = 1; i <= numberOfPlayers; i++) {
    let currentPlayer = new Player(`Player ${i}`, getRandomInt(6));
    renderItem(players, currentPlayer.index, "player-index");
    renderItem(rolls, formatResult(currentPlayer.roll), "player-roll");

    if (currentPlayer.roll > highestRoll) {
      highestRoll = currentPlayer.roll;
      winningPlayer = currentPlayer.index;
    } else if (currentPlayer.roll === highestRoll) {
      winningPlayer = "Nobody";
    }
  }

  let roundWinner = document.createTextNode(winningPlayer + " wins!");
  winner.appendChild(roundWinner);
}

rollBtn.addEventListener("click", handleRollClick);
