# 3)https://www.codewars.com/kata/541c8630095125aba6000c00/train/python
def digital_root(n):
    while n >= 10:
        digit_sum = 0
        for i in str(n):
            digit_sum += int(i)
        n = digit_sum
    return n