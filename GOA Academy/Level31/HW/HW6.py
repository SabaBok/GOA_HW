#6) https://www.codewars.com/kata/55685cd7ad70877c23000102/train/python
def make_negative( number ):
    if number < 0:
        return number
    elif number == 0:
        return 0
    else:
        return -number
print(make_negative(-109))