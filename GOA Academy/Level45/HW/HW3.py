#3)https://www.codewars.com/kata/56a946cd7bd95ccab2000055
def lowercase_count(strng):
    final_count = 0
    for i in strng:
        if i.isalpha() == True and i == i.lower():
            final_count += 1
    return final_count