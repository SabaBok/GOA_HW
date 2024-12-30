# 3)https://www.codewars.com/kata/541c8630095125aba6000c00/train/python
def digital_root(n):
    while n >= 10:
        sum = 0
        for i in str(n):
            sum += int(i)
        n = sum
    return n

print(digital_root(22))