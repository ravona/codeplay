const rollButton = document.getElementById("roll");
let players = document.getElementById("players");
let rolls = document.getElementById("rolls");
let winner = document.getElementById("winner");
let title = document.querySelector(".title");
let numberOfPlayers = 0;

class Player {
    constructor(index, roll) {
        this.index = index;
        this.roll = roll;
    }
}

// creates an element and appending data inside of it
function renderItem(element, data) {
    let item = document.createElement("div");
    let itemContent = document.createTextNode(data);
    item.appendChild(itemContent);
    element.appendChild(item);
}

function roll(num) {
    return Math.floor(Math.random() * num + 1);
}

//formats roll number to be displayed as a visual symbol using unicode
function formatResult(rollNumber) {
    let rollInUnicode = 9855 + rollNumber;
    rollInUnicode = rollInUnicode.toString();
    rollInUnicode = String.fromCodePoint(rollInUnicode);
    return rollInUnicode;
}

// resets game
function resetGame() {
    players.innerHTML = "";
    rolls.innerHTML = "";
    winner.innerHTML = "";
}

function handleRollClick() {
    const results = [];
    let result;
    result = document.createTextNode(result);
    let highestRoll = 0;
    let winningPlayer = '';
    winner.style.display = "flex";

    if (!numberOfPlayers) {
        numberOfPlayers = prompt("How many players?");
    }

    resetGame();

    // rendering players count (left column)
    for (let i = 1; i <= numberOfPlayers; i++) {
        // create a div for each player inside players
        let currentPlayer = new Player(`Player ${i}`, roll(6));
        renderItem(players, currentPlayer.index);
        renderItem(rolls, formatResult(currentPlayer.roll));

        // push each roll to results array for later use of choosing a winner
        results.push(currentPlayer.roll);

        // choosing a winner
        if (currentPlayer.roll > highestRoll) {
            highestRoll = currentPlayer.roll;
            winningPlayer = currentPlayer.index;
        } else if (currentPlayer.roll === highestRoll) {
            winningPlayer = "Nobody";
        }
    }


    let roundWinner = document.createTextNode(winningPlayer + " wins");
    winner.appendChild(roundWinner);
}

// Adding an event listener for our roll button
rollButton.addEventListener("click", handleRollClick);
