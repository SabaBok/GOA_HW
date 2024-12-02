#2) https://www.codewars.com/kata/57eae20f5500ad98e50002c5/train/python
def no_space(x):
    word = ""
    for i in x:
        if i != " ":
            word += i
    return word