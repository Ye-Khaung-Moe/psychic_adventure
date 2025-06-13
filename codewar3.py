def power_of_two(n):
    result = []

    for i in range(n+1):
        power = 2 ** i
        result.append(power)
    return result

print(power_of_two(3))