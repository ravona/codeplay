const message = document.querySelector(".message");
const score = document.querySelector(".score");
const buttons = document.querySelectorAll(".button");

let winner = [0, 0];

const playGame = (e) => {
  let playerSelection = e.target.innerText;
  let computerSelection = Math.random();

  if (computerSelection < 0.34) {
    computerSelection = "Rock";
  } else if (computerSelection <= 0.67) {
    computerSelection = "Paper";
  } else {
    computerSelection = "Scissors";
  }

  let result = getWinner(playerSelection, computerSelection);

  if (result === "Player") {
    result += " wins!";
    winner[0]++;
  } else if (result === "Computer") {
    result += " wins!";
    winner[1]++;
  }

  function messager(text) {
    message.innerHTML = text;
  }

  score.innerHTML = `Player: ${winner[0]} | Computer: ${winner[1]}`;
  messager(
    `Player chose <b>${playerSelection}</b><br/> Computer chose <b>${computerSelection}</b><br/> ${result}`
  );
};

const getWinner = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    return "Draw";
  }

  if (playerSelection === "Rock") {
    if (computerSelection === "Paper") {
      return "Computer";
    } else {
      return "Player";
    }
  }

  if (playerSelection === "Paper") {
    if (computerSelection === "Scissors") {
      return "Computer";
    } else {
      return "Player";
    }
  }

  if (playerSelection === "Scissors") {
    if (computerSelection === "Rock") {
      return "Computer";
    } else {
      return "Player";
    }
  }
};

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", playGame);
}

getWinner();
