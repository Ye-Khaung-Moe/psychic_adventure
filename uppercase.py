def make_upper_case(s):
    result = ""

    for char  in s: 
        if 'a' <= char <= 'z':
            result += chr(ord(char) - 32)
        else:
            result += char
    return result

print(make_upper_case('abcdefghijklm'))