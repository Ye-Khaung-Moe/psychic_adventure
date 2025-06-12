def remove_every_other(my_list):
    result = []
    for i in range(len(my_list)):
        if i % 2 == 0:
            result.append(my_list[i])
    return result
    

print(remove_every_other(['1','2','3','4','5','6','7','8']))