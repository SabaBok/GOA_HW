#2)https://www.codewars.com/kata/58afce23b0e8046a960000eb
def withdraw(n):
    sum = [0, 0, 0]
    while n > 0:
        if n - 100 >= 0 and n - 100 != 10 and n - 100 != 30:
            n = n - 100
            sum[0] += 1
        elif n - 50 >= 0 and n - 50 != 10 and n - 50 != 30:
            n = n - 50
            sum[1] += 1
        else:
            n = n - 20
            sum[2] += 1
    return sum
