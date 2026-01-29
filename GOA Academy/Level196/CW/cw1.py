def move_zeros(lst):
    new_arr = lst
    for i in lst:
        if i == 0:
            new_arr.remove(i)
            new_arr.append(i)
    return new_arr

#https://www.codewars.com/kata/52597aa56021e91c93000cb0