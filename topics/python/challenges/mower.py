class Lawn:
    def __init__(self, width, length) -> None:
        self._grid = []
        self.width = width
        self.length = length

    def render_grid(self):
        x_axis = [x for x in range(self.width)]
        y_axis = [y for y in range(self.length)]

        for i, y in enumerate(y_axis):
            self._grid.append([])
            for x in x_axis:
                self._grid[i].append((x, y))

        self._grid = reversed(self._grid)
        for row in self._grid:
            print(row)


lawn = Lawn(width=5, length=5)
lawn.render_grid()


class Mower:
    def __init__(self, position, orientation, directions):
        self._position = position
        self._orientation = orientation
        self._directions = list(directions)

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

    def move(self):
        for step in self._directions:
            [x, y] = self.get_position()
            # print(
            #     f"current position: {[x,y]} | step {step} | current orientation {self._orientation}"
            # )
            if step == "F":
                # set new position according to current orientation:
                if self.get_orientation() == "N":
                    self.set_position([x, min(lawn.length, y + 1)])
                    # print("new position set successfully", self._position)

                elif self.get_orientation() == "E":
                    self.set_position([min(x + 1, lawn.width), y])
                    # print("new position set successfully", self._position)

                elif self.get_orientation() == "S":
                    self.set_position([x, max(y - 1, 0)])
                    # print("new position set successfully", self._position)

                elif self.get_orientation() == "W":
                    self.set_position([max(0, x - 1), y])
                    # print("new position set successfully", self._position)

                # don't forget logic for lawn borders

            else:
                if self._orientation == "N":
                    if step == "L":
                        self.set_orientation("W")
                    else:
                        self.set_orientation("E")

                elif self._orientation == "E":
                    if step == "L":
                        self.set_orientation("N")
                    else:
                        self.set_orientation("S")

                elif self._orientation == "S":
                    if step == "L":
                        self.set_orientation("E")
                    else:
                        self.set_orientation("W")

                elif self._orientation == "W":
                    if step == "L":
                        self.set_orientation("S")
                    else:
                        self.set_orientation("N")


mower1 = Mower(position=[1, 2], orientation="N", directions="LFLFLFLFF")
mower2 = Mower(position=[3, 3], orientation="E", directions="FFRFFRFRRF")

mower1.move()
print(f"final mower position: {mower1.get_position()}")
print(f"final mower orientation: {mower1.get_orientation()}")

mower2.move()
print(f"final mower position: {mower2.get_position()}")
print(f"final mower orientation: {mower2.get_orientation()}")
