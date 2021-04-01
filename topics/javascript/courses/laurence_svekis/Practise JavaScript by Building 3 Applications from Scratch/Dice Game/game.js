"use strict";

const rollBtn = document.querySelector("#roll");
const resetBtn = document.querySelector("#reset");
const playersElement = document.querySelector("#players");
const rollsElement = document.querySelector("#rolls");
const notificationElement = document.querySelector("#notificationElement");

class Player {
  constructor(index) {
    this.index = index;
    this.roll = this.getRandomInt(6);
  }

  // maxInt is the highest possible number that can be rolled
  getRandomInt = (maxInt) => Math.floor(Math.random() * maxInt + 1);
}

class Game {
  constructor(numberOfPlayers) {
    this.numberOfPlayers = numberOfPlayers;
    this.winner = null;
    this.highestRoll = 0;
  }

  reset = () => {
    playersElement.textContent = "";
    rollsElement.textContent = "";
    notificationElement.textContent = "";
  };

  getWinner() {
    return this.winner;
  }

  formatResult = (rollNumber) => {
    // Unicode 9856 - 9861 represent dice symbols
    let rollInUnicode = 9855 + rollNumber;
    rollInUnicode = rollInUnicode.toString();
    rollInUnicode = String.fromCodePoint(rollInUnicode);
    return rollInUnicode;
  };

  displayWinner = () => {
    if (this.getWinner() === null) {
      notificationElement.textContent = "Nobody wins!";
    } else {
      notificationElement.textContent = `Player ${this.winner} wins with a ${this.highestRoll}!`;
    }
  };

  // Render functions:
  renderItem = (element, content, style) => {
    let item = document.createElement("div");
    let itemContent = document.createTextNode(content);
    item.appendChild(itemContent);
    item.className = style;
    element.appendChild(item);
  };

  play = () => {
    this.reset();

    // gathering the roll of each player
    for (let i = 1; i <= this.numberOfPlayers; i++) {
      let currentPlayer = new Player(i);
      console.log(currentPlayer);

      this.renderItem(
        playersElement,
        `Player ${currentPlayer.index}`,
        "player-index"
      );

      this.renderItem(
        rollsElement,
        this.formatResult(currentPlayer.roll),
        "player-roll"
      );

      if (currentPlayer.roll > this.highestRoll) {
        this.highestRoll = currentPlayer.roll;
        this.winner = currentPlayer.index;
      } else if (currentPlayer.roll === this.highestRoll) {
        this.winner = null;
      }
    }

    this.displayWinner();
  };
}

const handleRollClick = () => {
  let numberOfPlayers = null;
  while (
    !numberOfPlayers ||
    typeof numberOfPlayers !== "number" ||
    numberOfPlayers <= 1
  ) {
    numberOfPlayers = parseInt(
      prompt("How many Players? Please enter an integer, higher than 1")
    );
  }

  const newGame = new Game(numberOfPlayers);
  newGame.play();
};

// Event listeners:
rollBtn.addEventListener("click", handleRollClick);
