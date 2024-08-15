from typing import List, Set

def is_valid_sudoku(board: List[List[str]]) -> bool:
    rows: List[Set[str]] = [set() for _ in range(9)]
    cols: List[Set[str]] = [set() for _ in range(9)]
    boxes: List[Set[str]] = [set() for _ in range(9)]

    for i in range(9):
        for j in range(9):
            num = board[i][j]
            if num == '.':
                continue

            box_index = (i // 3) * 3 + j // 3

            if (num in rows[i] or 
                num in cols[j] or 
                num in boxes[box_index]):
                return False

            rows[i].add(num)
            cols[j].add(num)
            boxes[box_index].add(num)

    return True

# Example usage
board = [
    ["8","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
]

print(is_valid_sudoku(board))