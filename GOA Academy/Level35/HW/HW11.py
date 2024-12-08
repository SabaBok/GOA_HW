#11) https://www.codewars.com/kata/56676e8fabd2d1ff3000000c/train/python 
def find_needle(haystack):
    counts = -1
    for i in haystack:
        counts +=1
        if i == "needle":
            return f"found the needle at position {counts}"
