list = [1,2,2,3,4,56,7]
def manual_max():

    number = list[0]

    for i in list:
        if i > number:
            number = i
    return number
print(manual_max())