test1 = 123
# 321

test2 = -123
# -321

test3 = 120
# 021

def reverseInteger(x : int) -> int:
    MIN_INT = -2**31
    MAX_INT = 2**31 - 1
    
    
    isNegative = True if x < 0 else False
    a = str(x)[::-1].replace("-", "")
    b = int(a)
    res = b * -1 if isNegative else b
    
    if res <= MIN_INT or res >= MAX_INT:
        return 0
    
    return res


reverseInteger(test1)
reverseInteger(test2)
reverseInteger(test3)