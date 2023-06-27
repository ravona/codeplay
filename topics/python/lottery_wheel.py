import random
from typing import List


def generate_lottery_games(games: int = 7) -> List[List[int]]:
    numbers_pool = list(range(1, 38))
    lottery_games = []

    while len(lottery_games) < games and numbers_pool:
        game_numbers = random.sample(numbers_pool, min(6, len(numbers_pool)))
        lottery_games.append(game_numbers)

        # Remove the selected numbers from the pool
        for num in game_numbers:
            numbers_pool.remove(num)

    # Fill the remaining games with randomly chosen numbers
    while len(lottery_games) < games:
        game_numbers = random.choices(numbers_pool, k=6)
        lottery_games.append(game_numbers)

    return lottery_games


lottery_games = generate_lottery_games(7)

for game in lottery_games:
    print(game)
