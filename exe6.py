def divide_five(number):
    print("Original List:",number)
    print("Divisible by 5")

    for num in number:
        if num % 5 == 0:
            print(num)

num_list = [10, 20, 33, 46, 55]
divide_five(num_list)
        