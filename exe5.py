def first_last_same(numberlist):
    print("Original Numberlist:",numberlist)

    first_num = numberlist[0]
    last_num = numberlist[-1]

    if first_num == last_num:
        return True
    else:
        return False
    
number_x = [10, 20, 30, 40, 10]
print("Result is",first_last_same(number_x))

number_y = [75, 65, 35, 75, 30]
print("Result is",first_last_same(number_y))

