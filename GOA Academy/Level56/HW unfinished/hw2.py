#2)https://www.codewars.com/kata/58afce23b0e8046a960000eb
def withdraw(n):
    bills = [0, 0, 0]
    
    bills[0] = n // 100
    n %= 100

    bills[1] = n // 50
    n %= 50
    
    bills[2] = n // 20
    
    return bills
# not finished
print(withdraw(250))
