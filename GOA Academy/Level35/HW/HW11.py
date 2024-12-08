#11) https://www.codewars.com/kata/56676e8fabd2d1ff3000000c/train/python 
def find_needle(haystack):
    count = -1
    for i in haystack:
        count +=1
        if i == "needle":
            return f"found the needle at position {count}"
    return "there is no needle"