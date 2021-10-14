const getRandomNumInRange = (min, max) =>
  Math.floor(Math.random() * (max - min) + min);

const getMidNumInRange = (min, max) => Math.floor((min + max) / 2);

const play = (min, max, playerGuess) => {
  const correctGuess = getRandomNumInRange(min, max);
  console.log(`Computer: I am thinking of a number between ${min} and ${max}`);

  const handlePlayerGuess = (playerGuess) => {
    console.log(`Player: I guess you thought of the number: ${playerGuess}`);

    if (playerGuess === correctGuess) {
      console.log(
        `Computer: You are correct! guesses to find my number - ${correctGuess}`
      );
      return correctGuess;
    }

    if (playerGuess > correctGuess) {
      console.log(`Computer: Your guess is too high!`);
      max = playerGuess - 1;
      playerGuess = getMidNumInRange(min, max);
      return handlePlayerGuess(playerGuess);
    } else {
      console.log(`Computer: Your guess is too low!`);
      min = playerGuess + 1;
      playerGuess = getMidNumInRange(min, max);
      return handlePlayerGuess(playerGuess);
    }
  };

  console.log("Randomly picked number: ", correctGuess);
  handlePlayerGuess(playerGuess);
};

let min = 1;
let max = 300;
play(min, max, getMidNumInRange(min, max));
