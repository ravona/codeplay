# The Art of Doing: Code 40 Challenging Python Programs Today - by Michael Eramo
# Chapter 24 : Challenge Problem 19: Guess My Number Application

import random

# Game settings:
# - computer picks a random number between one and this value
highest_number = 20
# - player has this number of tries to correctly guess the computer's chosen number
number_of_tries = 5

# Greeting:
name = input("Hi there! What is your name? ").title().strip()
greeting = f"Hello {name}, I am thinking of a number between 1 and {highest_number}. Can you guess it in {number_of_tries} guesses or less?"
print(greeting)

# Game logic:
correct_guess = random.randint(1, highest_number)

for round in range(number_of_tries):
    guess = int(input("Type in your guess: "))
    print(f"\nRound #{round + 1}: You guess {guess}")

    if guess == correct_guess:
        print(f"\nGood job, {name}! You've guessed my number in {round + 1} guesses!")
        break

    if guess > correct_guess:
        print("Your guess is too high")

    if guess < correct_guess:
        print("Your guess is too low")

print(f"I was thinking of the number {correct_guess}")
