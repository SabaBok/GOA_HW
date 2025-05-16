#4) https://www.codewars.com/kata/57f781872e3d8ca2a000007e/train/python
def maps(a):
    new_arr = []
    for i in a:
        num = i*2
        new_arr.append(num)
    return new_arr

print(maps([1,2,3]))