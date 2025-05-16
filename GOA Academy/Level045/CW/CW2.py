#2) https://www.codewars.com/kata/54da539698b8a2ad76000228/train/python

def is_valid_walk(walk):
    n = walk.count("n")
    s = walk.count("s")
    e = walk.count("e")
    w = walk.count("w")
    
    if len(walk) != 10:
        return False
    
    if n == s and e == w:
        return True
    else:
        return False