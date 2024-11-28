#8) https://www.codewars.com/kata/55a2d7ebe362935a210000b2/train/python

def find_smallest_int(arr):
    number = arr[0]
    for i in arr:
        if i < number:
            number = i
    return number
print(find_smallest_int([78, 56, 232, 12, 11, 43]))