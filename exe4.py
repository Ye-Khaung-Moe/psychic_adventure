word = input("Enter your word:")

def remove_char(word, n):
    print("Original String:",word)
    x = word[:n]
    return x 

print("Removing characters from a string")
print(remove_char("pynative", 4))
print(remove_char("pynative", 2))
