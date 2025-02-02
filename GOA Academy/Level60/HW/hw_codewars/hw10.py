#10) https://www.codewars.com/kata/58ad317d1541651a740000c5
def middle_permutation(string):
    s = list(string)
    n = len(s)
    for i in range(n):
        min_idx = i
        for j in range(i + 1, n):
            if s[j] < s[min_idx]:
                min_idx = j
        s[i], s[min_idx] = s[min_idx], s[i]
    
    def factorial(x):
        result = 1
        for i in range(2, x + 1):
            result *= i
        return result
    
    middle_index = factorial(n) // 2 - 1

    result = []
    while s:
        n -= 1
        fact = factorial(n)
        index = middle_index // fact
        result.append(s.pop(index))
        middle_index %= fact

    return ''.join(result)
