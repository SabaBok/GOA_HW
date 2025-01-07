#1)https://www.codewars.com/kata/586f6741c66d18c22800010a
def sequence_sum(begin_number, end_number, step):
    sum = 0
    for i in range(begin_number,end_number+1,step):
        sum += i
    return sum