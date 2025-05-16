# 1) https://www.codewars.com/kata/631f0c3a0b9cb0de6ded0529/train/python
def evaluate(equation):
    a, *c = map(int, equation.split("@"))
    for b in c:
        if b == 0:
            return
        a = a * (b + 2) + a // b
    return a