class Fibonacci:
    def __init__(self):
        print("Welcome to the Fibonacci calculator! \n")

        self._sequence = []
        self._ratio = []
        self._digits = int(input("How many digits would you like to compute? \n"))

        for digit in range(1, self._digits + 1):
            self._sequence.append(self.get_sequence(digit))
            self._ratio.append(self.get_ratio(digit))
        print(self._sequence)
        print(self._ratio)

    def get_ratio(self, n):
        return self.get_sequence(n + 2) / self.get_sequence(n + 1)

    def get_sequence(self, n):
        if n == 0:
            return 0
        elif n == 1:
            return 1
        else:
            return self.get_sequence(n - 1) + self.get_sequence(n - 2)


Fibonacci()