def persistence(n):
    if n < 10: return 0
    counter = 0
    while n >= 10:
        arr = list(str(n))
        mult = 1
        for i in arr:
            mult *= int(i)
        counter += 1
        n = mult
    if n <= 10: return counter

#https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec