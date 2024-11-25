#1) https://www.codewars.com/kata/55685cd7ad70877c23000102/train/python

def make_negative( number ):
    num = 0
    if number > 0:
        num = -number
    elif number < 0:
        num = number
    else:
        num = num
    return num

while True:
    num = int(input("enter number :"))
    print(make_negative(num))