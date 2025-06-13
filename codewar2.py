def accum(s):
    result = []

    for i in range(len(s)):
        char = s[i]
        first = char.upper()
        rest = char.lower()*i
        part = first + rest
        result.append(part)

        final_result = "-".join(result)
    return final_result

print(accum('abcde'))

