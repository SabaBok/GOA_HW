#8) https://www.codewars.com/kata/555624b601231dc7a400017a
def josephus_survivor(n, k):
    survivor = 0
    for i in range(2, n + 1):
        survivor = (survivor + k) % i
    return survivor + 1