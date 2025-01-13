# https://www.codewars.com/kata/523f5d21c841566fde000009
def array_diff(a, b):
    new_arr = []
    for num in a:
        if num not in b:
            new_arr.append(num)
    return new_arr