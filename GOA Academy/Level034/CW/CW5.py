#5)
def digitize(n):
    new_arr = []
    str_n = str(n)
    reverse = ""
    for i in range(len(str_n)):
        reverse += str_n[-i - 1]

    for i in reverse:
        new_arr.append(int(i))
    return new_arr

print(digitize(123))

