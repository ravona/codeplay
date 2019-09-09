const message = document.querySelector(".message");
const score = document.querySelector(".score");
const buttons = document.querySelectorAll("button");
let winner = [0, 0];

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", playGame);
}

function playGame(e) {
    let playerSelection = e.target.innerText;
    let computerSelection = Math.random();
    if (computerSelection < 0.34) {
        computerSelection = "Rock";
    } else if (computerSelection <= 0.67) {
        computerSelection = "Paper";
    } else {
        computerSelection = "Scissors";
    }
    console.log(`Player selected: ${playerSelection} | Computer selected: ${computerSelection}`);
    let result = getWinner(playerSelection, computerSelection);

    if (result === "Player") {
        result += " wins!";
        winner[0]++;
    } else if (result === "Computer") {
        result += " wins!";
        winner[1]++;
    }

    function messager(mes) {
        message.innerHTML = mes;
    }

    score.innerHTML = `Player: ${winner[0]} | Computer: ${winner[1]}`;
    messager(`Player chose <b>${playerSelection}</b><br/> Computer chose <b>${computerSelection}</b><br/> ${result}`);

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
            return "Computer";
        } else {
            console.log('Player wins!');
            return "Player";
        }
    }

    if (playerSelection === "Paper") {
        if (computerSelection === "Scissors") {
            console.log('Computer wins!');
            return "Computer";
        } else {
            console.log('Player wins!');
            return "Player";
        }
    }

    if (playerSelection === "Scissors") {
        if (computerSelection === "Rock") {
            console.log('Computer wins!');
            return "Computer";
        } else {
            console.log('Player wins!');
            return "Player";
        }
    }
}

getWinner();