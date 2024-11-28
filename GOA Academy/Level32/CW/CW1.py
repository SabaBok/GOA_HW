#1) https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/python
def remove_char(s):
    new_word = []
    empty = ""
    for i in s:
        new_word.append(i)
    new_word.pop(0)
    new_word.pop(-1)
    for i in new_word:
        empty += i
    return empty
        

    
print(remove_char("hello"))