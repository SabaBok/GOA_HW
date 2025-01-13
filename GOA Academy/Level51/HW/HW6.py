#https://www.codewars.com/kata/5679aa472b8f57fb8c000047
def find_even_index(arr):
    ind = arr[0]   
    for i in arr:
        if sum(arr[0:arr.index(i)-1]) == sum(arr[arr.index(i)-1:-1]):
            ind = arr.index(i)
    return ind

arr = [1,2,3,4,3,2,1]
print(find_even_index(arr))


