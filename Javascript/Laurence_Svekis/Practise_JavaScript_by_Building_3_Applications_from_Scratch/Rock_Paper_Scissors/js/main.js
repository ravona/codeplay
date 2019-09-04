const message = document.querySelector(".message");
const score = document.querySelector(".score");
const buttons = document.querySelectorAll("button");
console.log(buttons);

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", playGame);
}

function playGame(e) {
    let playerSelection = e.target.innerText;
    let computerSelection = Math.random();
    if (computerSelection < 0.34) {
        computerSelection = "Rock";
    } else if (computerSelection < 0.67) {
        computerSelection = "Paper";
    } else {
        computerSelection = "Scissors";
    }
    console.log(`Player selected: ${playerSelection} | Computer selected: ${computerSelection}`);
}

playGame();

function getWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log('A tie!');
        return "Draw";
    }

    if (playerSelection === "Rock") {
        if (computerSelection === "Paper") {
            console.log('Computer wins!');
            return "Computer wins!";
        } else {
            console.log('Player wins!');
            return "Player wins!";
        }
    }

    if (playerSelection === "Paper") {
        if (computerSelection === "Scissors") {
            console.log('Computer wins!');
            return "Computer wins!";
        } else {
            console.log('Player wins!');
            return "Player wins!";
        }
    }

    if (playerSelection === "Scissors") {
        if (computerSelection === "Rock") {
            console.log('Computer wins!');
            return "Computer wins!";
        } else {
            console.log('Player wins!');
            return "Player wins!";
        }
    }
}

getWinner();