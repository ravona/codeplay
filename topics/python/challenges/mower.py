class Lawn:
    def __init__(self, size):
        self.size = size
        self.grid = []
        self.width = self.size[0]
        self.length = self.size[1]

    def render_grid(self):
        x_axis = [col for col in range(self.width)]
        print(x_axis)
        y_axis = [row for row in range(self.length)]
        print(y_axis)
        for i, y in enumerate(y_axis):
            self.grid.append([])
            for x in x_axis:
                self.grid[i].append((x,y))

        self.grid = reversed(self.grid)
        for row in self.grid:
            print(row)

class Mower:
    def __init__(self, position, orientation, directions):
        self._position = position
        self._orientation = orientation
        self._directions = directions

    def get_position(self):
        return self._position

    def set_position(self, position):
        self._position = position

    def get_orientation(self):
        return self._orientation

    def set_orientation(self, orientation):
        self._orientation = orientation

    def get_directions(self):
        return self._directions

    def move(self):
        for step in self._directions:
            if step=="F":
                print('moving forward', self.get_position())
            else:
                self.set_orientation(step)
                new_orientation = self.get_orientation()
                print('new orientation', new_orientation)



mower1 = Mower(position=[1, 2], orientation="N", directions="LFLFLFLFF")
mower1.move()
print(f"mower directions: {mower1.get_directions()}")
print(f"current mower position: {mower1.get_position()}")
print(f"current mower orientation: {mower1.get_orientation()}")


lawn1 = Lawn([5, 4])
print(lawn1.render_grid())

# TEST
# This file is given in input:
# 5 5
# 1 2 N
# LFLFLFLFF
# 3 3 E
# FFRFFRFRRF
# This output is expected (final positions of mowers):
# 1 3 N
# 5 1 E
