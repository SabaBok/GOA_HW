#4)https://www.codewars.com/kata/57cc981a58da9e302a000214
def small_enough(array, limit):
    num_of_tru = 0
    for i in array:
        if i <= limit:
            num_of_tru += 1
    if num_of_tru == len(array):
        return True
    else:
        return False