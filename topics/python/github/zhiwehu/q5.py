# Question 5:
# Define a class which has at least two methods:
# getString: to get a string from console input
# printString: to print the string in upper case.
# Also please include simple test function to test the class methods.
# Hints: Use init method to construct some parameters


class Solution:
    def __init__(self):
        self.string = ""

    def get_string(self):
        self.string = input("Enter a string ")

    def print_string(self):
        print(self.string.upper())


newString = Solution()
newString.get_string()
newString.print_string()
