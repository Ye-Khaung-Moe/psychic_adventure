def format_duration(second):
    minute = second // 60
    second %= 60
    hour = minute // 60
    minute %= 60

    return hour,minute,second

hour, minute, second = format_duration(4700)

print(hour,'hours',minute, 'minutes', second, 'second')

