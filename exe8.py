def count_emma(statement):
    print("Original String:",statement)

    count = 0
    print(len(statement))
    for i in range(len(statement) - 1): 
        count += statement[i: i + 4] == "Emma"
    return count

count = count_emma("Emma is good developer. Emma is a writer")
print("Emma appear",count,"times")