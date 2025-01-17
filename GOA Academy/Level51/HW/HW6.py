#6)https://www.codewars.com/kata/5679aa472b8f57fb8c000047
def find_even_index(arr):
    for i in range(len(arr)):
        left_sum = sum(arr[:i])
        right_sum = sum(arr[i+1:])
        if left_sum == right_sum:
            return i
    return -1


