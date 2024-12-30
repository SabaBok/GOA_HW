# 3)https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/javascript

def expanded_form(num):
    num_str = str(num)
    expanded_parts = []
    length = len(num_str)
    
    for i in range(length):
        digit = num_str[i]
        if digit != '0':
            place_value = int(digit) * (10 ** (length - i - 1))
            expanded_parts.append(str(place_value))
    
    result = expanded_parts[0]
    for part in expanded_parts[1:]:
        result += " + " + part
    
    return result