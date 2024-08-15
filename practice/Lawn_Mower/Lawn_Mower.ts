type Position = { x: number; y: number }; // {x, y}
type Orientation = "N" | "E" | "S" | "W"; // North, East, South, West
type Direction = "R" | "L"; // Right, Left
type Step = Direction | "F"; // Right, Left, Forward

const instructions: string = "FFFRFRF";
const initialPosition: Position = { x: 0, y: 0 };
const initialOrientation: Orientation = "N";
const grid = 5;

// When step value is "F"
// Returns the delta position value based on the orientation
const movesDictionary: Record<Orientation, Position> = {
  N: { x: 0, y: 1 },
  E: { x: 1, y: 0 },
  S: { x: 0, y: -1 },
  W: { x: -1, y: 0 },
};

// When step value is "R" or "L"
// Returns the new orientation after turning
const turnsDictionary: Record<Orientation, Record<Direction, Orientation>> = {
  N: { L: "W", R: "E" },
  E: { L: "N", R: "S" },
  S: { L: "E", R: "W" },
  W: { L: "S", R: "N" },
};

const parseInstructions = (instructions: string): string[] => {
  return instructions.split("");
};

const isPositionWithinGrid = (position: Position, grid: number): boolean => {
  return (
    position.x >= 0 && position.x < grid && position.y >= 0 && position.y < grid
  );
};

const getNextPosition = (
  position: Position,
  orientation: Orientation
): Position => {
  const delta = movesDictionary[orientation];
  return { x: position.x + delta.x, y: position.y + delta.y };
};

const move = (position: Position, orientation: Orientation): Position => {
  const newPosition = getNextPosition(position, orientation);
  return isPositionWithinGrid(newPosition, grid) ? newPosition : position;
};

const turn = (orientation: Orientation, direction: Direction): Orientation => {
  return turnsDictionary[orientation][direction];
};

class LawnMower {
  private position: Position;
  private orientation: Orientation;
  private steps: string[];

  constructor(
    position: Position,
    orientation: Orientation,
    instructions: string
  ) {
    this.position = position;
    this.orientation = orientation;
    this.steps = parseInstructions(instructions);
  }

  move() {
    this.position = move(this.position, this.orientation);
  }

  turn(direction: Direction) {
    this.orientation = turn(this.orientation, direction);
  }

  getPosition() {
    return this.position;
  }

  getOrientation() {
    return this.orientation;
  }

  getFinalPosition(): Position {
    for (const step of this.steps) {
      if (step === "F") {
        this.move();
      } else if (step === "R" || step === "L") {
        this.turn(step);
      } else {
        throw new Error(`Invalid instruction: ${step}`);
      }
    }

    return this.position;
  }
}

const lawnMower = new LawnMower(
  initialPosition,
  initialOrientation,
  instructions
);

console.log(lawnMower.getFinalPosition());
