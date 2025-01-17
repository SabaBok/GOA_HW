#2)https://www.codewars.com/kata/580878d5d27b84b64c000b51
def sum_triangular_numbers(n):
    if n < 0:
        return 0
    total = 0
    for i in range(1, n + 1):
        triangular_number = (i * (i + 1)) // 2
        total += triangular_number
    return total