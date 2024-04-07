type Position = [number, number];
const instructions = "FFRF";
const grid = 5;
const initialPosition = [1, 1];
const initialOrientation = "N";

const getFinalPosition = (instructions: string) => {
  const steps = instructions.split("");
  let position = initialPosition;
  let orientation = initialOrientation;

  const moveDictionary = {
    N: [0, 1],
    E: [1, 0],
    S: [0, -1],
    W: [-1, 0],
  };

  const turnDictionary = {
    N: {
      R: "E",
      L: "W",
    },
    E: {
      R: "S",
      L: "N",
    },
    S: {
      R: "W",
      L: "E",
    },
    W: {
      R: "N",
      L: "S",
    },
  };

  const move = (position: Position, orientation: string): Position => {
    const newX = position[0] + moveDictionary[orientation][0];
    const newY = position[1] + moveDictionary[orientation][1];

    return [newX, newY];
  };

  const turn = (orientation: string, step: string) => {
    return turnDictionary[orientation][step];
  };

  for (let i = 0; i < instructions.length; i++) {
    if (steps[i] === "F") {
      position = move(position as any, orientation);
    } else {
      orientation = turn(orientation, steps[i]);
    }
  }

  return position;
};

console.log(getFinalPosition(instructions));
