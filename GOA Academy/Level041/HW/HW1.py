# 1) https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/python
def filter_list(l):
    new_arr = []
    for i in l:
        if type(i) == int:
            new_arr.append(i)
    return new_arr