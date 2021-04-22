# mower class:
#   properties:
#       position: (x , y)
#       orientation: N,E,W,S
#   methods:
#       move(an array of directions: [R,F,L,F])
#       getPosition
#       setPosition
#       getOrientation
#       setOrientation

# lawn class:
#   properties:
#       size: (x=5, y=5) // grid of 5 X 5

class Lawn:
    def __init__(self, size) -> None:
        self.size: list[int, int] = size
        self.grid: list[[0 for x in range(self.size[0])]]
    
    def get_size(self):
        print(f"grid size: {self.size[0]}")

    def render_grid(self):
        print(self.grid)



class Mower:
    def __init__(self, position, orientation, directions) -> None: 
        self.position: list[int, int] = [0, 0]
        self.orientation: str() = orientation
        self.directions: str() = directions
    
    def move(self):
        for step in self.directions:
            print(step)

mower1 = Mower([1,2],"N","LFLFLFLFF")
print('current mower position: ', mower1.position)
print('current mower orientation: ', mower1.orientation)
print('mower directions: ', mower1.directions)
mower1.move()

lawn1 = Lawn([5, 4])
print(lawn1.get_size())
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