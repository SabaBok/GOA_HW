#  2) https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/python
def to_jaden_case(string):
    list = string.split()
    word = ""
    for i in list:
        word += i.capitalize() + " "
    return word[0:-1]

print(to_jaden_case("hello i am new"))
