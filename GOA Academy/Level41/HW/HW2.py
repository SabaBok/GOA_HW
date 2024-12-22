#  2) https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/python
def to_jaden_case(string):
    list = string.split()
    new_arr = []
    word = ""
    for i in list:
        new_arr.append(i.capitalize())
    for i in range(len(new_arr)):
        if i == len(new_arr) - 1:
            word += new_arr[i]
        else:
            word += new_arr[i] + " "
    return word

print(to_jaden_case("hello i am new"))
