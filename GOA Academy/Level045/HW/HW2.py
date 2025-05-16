#2)https://www.codewars.com/kata/57096af70dad013aa200007b
def logical_calc(array, op):
    res = array[0]
    for i in array[1:]:
        if op == 'AND':
            res = res and i
        elif op == 'OR':
            res = res or i
        elif op == 'XOR':
            res = res != i
    return res
