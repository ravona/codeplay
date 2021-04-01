class Solution:
    def isAlienSorted(self, words: List[str], order: str) -> bool:
        # splitting alien alpabet string to a list of letters
        alien_alphabet = list(order)

        # setting a dictionary to give each letter it's proper value
        d = {}

        # list of words translated to their numerical value
        words_translated = []

        # assigning the proper numerical value to each letter according to the given alphabet
        for value, letter in enumerate(alien_alphabet):
            d[letter] = value

        # printing the generated dictionary
        print('dictionary: ', d)

        # splitting each word to a list of single letters
        for index, word in enumerate(words):
            split_word = list(word)
            words_translated.append(split_word)

            # replacing each letter with it's proper numerical value according to our dictionary
            for index, letter in enumerate(split_word):
                split_word[index] = d[letter]

        print('words translated to numbers: ',words_translated)

        if (sorted(words_translated) == words_translated):
            return True
        else:
            return False
