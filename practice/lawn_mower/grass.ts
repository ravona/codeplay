type Position = [number, number];
type Orientation = "N" | "E" | "S" | "W";
type Direction = "R" | "L";

const instructions: string = "FFFRFFFFFFFF";
const initialPosition: Position = [0, 0];
const initialOrientation: Orientation = "N";
const grid = 5;

const getFinalPosition = (instructions: string) => {
  const steps = instructions.split("");
  let position: Position = initialPosition;
  let orientation: Orientation = initialOrientation;

  const moveDictionary: Record<Orientation, Position> = {
    N: [0, 1],
    E: [1, 0],
    S: [0, -1],
    W: [-1, 0],
  };

  const turnDictionary: Record<Orientation, Record<Direction, Orientation>> = {
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

  const move = (position: Position, orientation: Orientation): Position => {
    const [dx, dy] = moveDictionary[orientation];
    const newPosition: Position = [position[0] + dx, position[1] + dy];

    if (
      newPosition[0] >= 0 &&
      newPosition[0] < grid &&
      newPosition[1] >= 0 &&
      newPosition[1] < grid
    ) {
      return newPosition;
    }
    return position;
  };

  const turn = (orientation: Orientation, step: string): Orientation => {
    const res = turnDictionary[orientation][step as Direction];
    return turnDictionary[orientation][step as Direction];
  };

  for (const step of steps) {
    if (step === "F") {
      position = move(position, orientation);
    } else {
      orientation = turn(orientation, step);
    }
  }

  return position;
};

console.log(getFinalPosition(instructions));
