#6)https://www.codewars.com/kata/560248d6ba06815d6f000098
def min_length_num(num_dig, ord_max): 
    def calculate_term(n):
        if n == 0:
            return 0
        term = 0
        for i in range(1, n + 1):
            term += i ** (n - i + 1)
        return term


    for i in range(1, ord_max + 1):
        term = calculate_term(i)
        if len(str(term)) == num_dig:
            return [True, i+1]
    return [False, -1]