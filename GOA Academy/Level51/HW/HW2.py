#2)https://www.codewars.com/kata/580878d5d27b84b64c000b51
def sum_triangular_numbers(n):
    my_int = 0
    sum = 0
    for i in range(1,n+1):
        sum +=i
        my_int+=sum
    return my_int

# print(sum_triangular_numbers(6))

