word = input("Enter your word:")
print("Original String:", word)

size = len(word)
print(size)

print("Printing only even index chars")

for i in range(0,size-1,2):
    print("index[",i,"]",word[i])
