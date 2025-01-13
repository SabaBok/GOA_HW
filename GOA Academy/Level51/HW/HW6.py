def find_even_index(arr):
    ind = arr[0]   
    for i in arr:
        if sum(arr[0:arr.index(i)]) == sum(arr[arr.index(i):-1]):
            ind = arr.index(i)

    return ind
