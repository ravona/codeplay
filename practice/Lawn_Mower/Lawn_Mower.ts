type Position = { x: number; y: number };
type Orientation = "N" | "E" | "S" | "W";
type Direction = "R" | "L";
type Step = Direction | "F";

type LawnMowerState = {
  position: Position;
  orientation: Orientation;
};

const MOVES: Record<Orientation, Position> = {
  N: { x: 0, y: 1 },
  E: { x: 1, y: 0 },
  S: { x: 0, y: -1 },
  W: { x: -1, y: 0 },
};

const TURNS: Record<Orientation, Record<Direction, Orientation>> = {
  N: { L: "W", R: "E" },
  E: { L: "N", R: "S" },
  S: { L: "E", R: "W" },
  W: { L: "S", R: "N" },
};

const parseInstructions = (instructions: string): Step[] =>
  instructions.split("") as Step[];

const isPositionWithinGrid = (position: Position, grid: number): boolean =>
  position.x >= 0 && position.x < grid && position.y >= 0 && position.y < grid;

const getNextPosition = (
  position: Position,
  orientation: Orientation
): Position => ({
  x: position.x + MOVES[orientation].x,
  y: position.y + MOVES[orientation].y,
});

const move = (
  position: Position,
  orientation: Orientation,
  grid: number
): Position => {
  const newPosition = getNextPosition(position, orientation);
  return isPositionWithinGrid(newPosition, grid) ? newPosition : position;
};

const turn = (orientation: Orientation, direction: Direction): Orientation =>
  TURNS[orientation][direction];

const executeStep = (
  state: LawnMowerState,
  step: Step,
  grid: number
): LawnMowerState => {
  const stepActions: Record<Step, (s: LawnMowerState) => LawnMowerState> = {
    F: (s) => ({
      ...s,
      position: move(s.position, s.orientation, grid),
    }),
    R: (s) => ({
      ...s,
      orientation: turn(s.orientation, "R"),
    }),
    L: (s) => ({
      ...s,
      orientation: turn(s.orientation, "L"),
    }),
  };

  const action = stepActions[step];
  if (!action) {
    throw new Error(`Invalid instruction: ${step}`);
  }

  return action(state);
};

const getFinalPosition = (
  initialState: LawnMowerState,
  instructions: string,
  grid: number
): Position =>
  parseInstructions(instructions).reduce(
    (state, step) => executeStep(state, step, grid),
    initialState
  ).position;

// Usage
const instructions = "FFFRFRF";
const initialPosition: Position = { x: 0, y: 0 };
const initialOrientation: Orientation = "N";
const grid = 5;

const finalPosition = getFinalPosition(
  { position: initialPosition, orientation: initialOrientation },
  instructions,
  grid
);

console.log(finalPosition);
