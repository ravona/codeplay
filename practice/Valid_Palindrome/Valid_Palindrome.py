import re

def isPalindrome(s: str) -> bool:
    # Use r"\W" for the regex pattern
    res = re.sub(r"[^a-zA-Z0-9]", "", s).lower()
    # Check if the string is equal to its reverse
    return res == res[::-1]

# Test cases
test1 = "A man, a plan, a canal: Panama"
test2 = "race a car"
test3 = "ab_a"

print(isPalindrome(test1))  # Should print True
print(isPalindrome(test2))  # Should print False
print(isPalindrome(test3))  # Should print True but is False.   