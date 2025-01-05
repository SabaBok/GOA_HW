#1)https://www.codewars.com/kata/586f6741c66d18c22800010a
def sequence_sum(begin, end, step):
    if begin > end:
        return 0
    else:
        return begin + (sequence_sum(begin + step, end, step))