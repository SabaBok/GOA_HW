#1) https://www.codewars.com/kata/54edbc7200b811e956000556/train/python
def count_sheeps(sheep):
    number_of_sheeps = 0
    for i in sheep:
        if i == True:
            number_of_sheeps += 1
    return number_of_sheeps