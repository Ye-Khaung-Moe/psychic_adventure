def better_than_average(class_points, your_points):
    total = sum(class_points)
    person = len(class_points)

    avg = total / person
    if avg < your_points:
        return True
    else:
        return False