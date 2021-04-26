# Automatic Mower
An automatic lawn mower is designed to mow rectangular surfaces.  
The mower can be programmed to mow the entire surface.  

The position of the mower is represented by:
1. coordinates (x,y) - 2 integers
2. cardinal direction (N,E,W,S) - 1 letter string

The lawn is divided into a grid of equal sized rectangles to simplify the navigation.  
For example: a mower position can be « 0, 0, N ».  
That means, that the mow is located at the bottom-left corner of the lawn, and it is oriented North.

The mower is controlled by sending it a sequence of letters.  
Possible letters are: 
1. « L », « R » - rotates the mower 90° respectively to the left or to the right
1. « F » - moves the mower forward on the cell in front of it, without changing its orientation.

The mower will not move beyond lawn size.  
If it is instructed to move beyond lawn size, it will stay in its place, maintaining its last position and orientation, and wait for the next instruction.  

The cell directly at North of the position (x, y) has for coordinates (x, y+1).
An input file following these rules is given to program the mower:
● The first line is the coordinates of the upper-right corner of the lawn, coordinates of
lower-left corner are supposed to be (0,0)
● Next lines of the file drive all mowers. There are two lines for each mower:
● First line give the initial position and orientation of the mower. Position and orientation
are given by 2 numbers and a letter, separated by a space
● Second line is a sequence of instruction driving the mower across the lawn. Instructions
are a sequence of letters without space.
Each mower moves sequentially, it means that the second mower moves only after the first
one execute all its instructions.
When the mower has executed all its instructions, it outputs its position and orientation.
GOAL
Design and write a program implementing the above specifications and validating the following
test.
TEST
This file is given in input:
5 5
1 2 N
LFLFLFLFF
3 3 E
FFRFFRFRRF
This output is expected (final positions of mowers):
1 3 N
5 1 E