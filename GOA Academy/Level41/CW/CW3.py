def high_and_low(numbers):
    new_arr = numbers.split()
    high = int(new_arr[0])
    low = int(new_arr[0])
    
    for i in new_arr:
        if int(i) > high:
            high = int(i)
    for i in new_arr:
        if int(i) < low:
            low = int(i)
            
    return str(high)+ " " +str(low)