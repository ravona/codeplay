from Lawn import Lawn
from Mower import Mower

lawn = Lawn(width=5, length=5)
lawn.render_grid()

mower1 = Mower(position=[1, 2], orientation="N", directions=list("LFLFLFLFF"), lawn=lawn)
mower2 = Mower(position=[3, 3], orientation="E", directions=list("FFRFFRFRRF"), lawn=lawn )

mower1.move()
print(f"final mower1 position: {mower1.get_position()}")
print(f"final mower1 orientation: {mower1.get_orientation()}")

mower2.move()
print(f"final mower2 position: {mower2.get_position()}")
print(f"final mower2 orientation: {mower2.get_orientation()}")
