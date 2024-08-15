from typing import List

s = ["h","e","l","l","o"]
# Output: ["o","l","l","e","h"]

def reverseString(s : List[str]) -> List[str]:
    return s[::-1]

print(reverseString(s))
