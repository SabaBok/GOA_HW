list = [1,2,2,3,4,56,7]
number = list[0]

for i in list:
    if i < number:
        number = i
print(number)