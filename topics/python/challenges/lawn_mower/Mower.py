from Lawn import Lawn


class Mower(Lawn):
    def __init__(self, position, orientation, directions, lawn) -> None:
        # how can I define and validate that "position" is expected to be an array of 2 ints only?
        self._position = position
        self._orientation = orientation
        self._directions = directions
        self._lawn = lawn

    def get_position(self):
        return self._position

    def set_position(self, position):
        self._position = position

    def get_orientation(self):
        return self._orientation

    def set_orientation(self, orientation):
        self._orientation = orientation

    def get_directions(self):
        for step in self._directions:
            return step

    def set_next_position(self):
        [x, y] = self._position

        # how can I refer to object lawn without hard coding?
        next_position = {
            "N": [x, min(self._lawn.length, y + 1)],
            "E": [min(self._lawn.width, x + 1), y],
            "S": [x, max(0, y - 1)],
            "W": [max(0, x - 1), y],
        }

        self.set_position(next_position[self._orientation])

    def set_next_orientation(self, step):
        turn = {
            # turn 90 degrees clockwise
            "R": {
                "N": "E",
                "E": "S",
                "S": "W",
                "W": "N",
            },
            # turn 90 degrees counter clockwise
            "L": {
                "N": "W",
                "W": "S",
                "S": "E",
                "E": "N",
            },
        }

        next_orientation = turn[step][self._orientation]
        self.set_orientation(next_orientation)

    def move(self):
        for step in self._directions:
            # if step is forward (F):
            # only the position changes, so get the next position
            if step == "F":
                self.set_next_position()
            # if step is left (L) or right (R):
            # only the orientation changes, so get the next orientation
            elif step == "L" or "R":
                self.set_next_orientation(step)
            else:
                "Error in step input"