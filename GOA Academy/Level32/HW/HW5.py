#5)https://www.codewars.com/kata/5966e33c4e686b508700002d
def sum_str(a, b):
    sum = 0
    if a != "" and b != "":
        sum = int(a) + int(b) 
    if a != "" and b == "":
        sum = a
    elif a == "" and b != "":
        sum = b
    return str(sum)

print(sum_str("5","4"))