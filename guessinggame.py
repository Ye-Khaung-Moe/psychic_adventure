def main():
    secret_word = 'apple'
    print("-"*len(secret_word))

    user_input = input("Guess the letter: ")

    if user_input in secret_word:
        for word in user_input:
            word == secret_word
            return secret_word
    else:
        return "Game Over !!!"

print(main())