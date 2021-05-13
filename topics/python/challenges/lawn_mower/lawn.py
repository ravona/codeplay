class Lawn:
    def __init__(self, width, length) -> None:
        self._grid = []
        self.width = width
        self.length = length

        x_axis = [x for x in range(self.width)]
        y_axis = [y for y in range(self.length)]

        for i, y in enumerate(y_axis):
            self._grid.append([])
            for x in x_axis:
                self._grid[i].append((x, y))

        self._grid = reversed(self._grid)

    def render_grid(self):
        for row in self._grid:
            print(row)