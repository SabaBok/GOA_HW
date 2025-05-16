#5)https://www.codewars.com/kata/574b3b1599d8f897470018f6
def get_real_floor(n):
    if n == 0:
        return 0
    if n > 13:
        return n-2
    if n < 0:
        return n
    else:
        return n-1