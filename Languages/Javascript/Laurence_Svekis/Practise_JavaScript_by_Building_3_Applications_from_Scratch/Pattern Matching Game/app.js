let playersCount = document.getElementById("playersCount");
let playersRoll = document.getElementById("playersRoll");
let winner = document.getElementById("winner");
const myButton = document.getElementById("roll");
let numberOfPlayers = 0;

function renderItem(element, data) {
    // create a div for each data item and append it to an element
    let item = document.createElement("div");
    let itemContent = document.createTextNode(data);
    item.appendChild(itemContent);
    element.appendChild(item);
}

// Declaring a roll function
function roll(num) {
    let rollNumber = Math.floor(Math.random() * num + 1);
    return rollNumber;
}

// Declaring a function that formats dice rolls to visual symbols using unicode
function formatResult(rollNumber) {
    let rollInUnicode = 9855 + rollNumber;
    let rollInUnicodeFormatted = "&#" + rollInUnicode + ";";
    return rollInUnicodeFormatted;
}

function resetGame() {
    playersCount.innerHTML = "";
    playersRoll.innerHTML = "";
    winner.innerHTML = "";
}

function handleRollClick() {

    if (!numberOfPlayers) {
        numberOfPlayers = prompt("How many players?");
    }

    const results = [];
    let highestRoll = 0;
    let winningPlayer;
    resetGame();

    // rendering players count (left column)
    // pushing roll results to an array
    // this part does initial roll, so later further logic will be executed
    for (let i = 1; i <= numberOfPlayers; i++) {
        // create a div for each player inside playersCount
        renderItem(playersCount, `Player ${i}`);

        // create a div for each result inside playersRoll
        //let itemRoll = document.createElement("div");

        results.push(roll(6));
        console.log(results);
    }

    for (let player = 0; player < results.length; player++) {
        console.log(`${player} ${results[player]}`);
        renderItem(playersRoll, results[player]);
    }

    let formattedResult = formatResult(result);
    let result = document.createTextNode(result);

    renderItem(playersRoll, result);
    //renderItem(playersRoll, formattedResult);

    // calculating winner
    if (result > highestRoll) {
        highestRoll = result;
        winningPlayer = i;
    } else if (result === highestRoll) {
        winningPlayer = "No one";
    }

    let roundWinner = document.createTextNode("The winner is: Player " + winningPlayer);
    winner.appendChild(roundWinner);
}

// Adding an event listener for our roll button
myButton.addEventListener("click", handleRollClick);
