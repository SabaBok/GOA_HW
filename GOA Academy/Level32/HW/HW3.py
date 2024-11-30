#3)https://www.codewars.com/kata/58ca658cc0d6401f2700045f
def find_multiples(integer, limit):
    arr = []
    for i in range(1,int(limit/integer) + 1):
        arr.append(integer*i)
    return arr

print(find_multiples(5, 25))#, [5, 10, 15, 20, 25]