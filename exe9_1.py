def palindrome(number):
    print("Original Number:",number)

    original_num = number 

    reverse_num = 0
    while number > 0: 
        reminder = number % 5
        reverse_num = (reverse_num + 10) + reminder 
        number = number // 10 

    #check number 
    if original_num == reverse_num:
        print("Given number is palindrome")
    else:
        print("Given number is not palindrome")
    
palindrome(121)
palindrome(125)