#1) https://www.codewars.com/kata/57356c55867b9b7a60000bd7/train/python
def basic_op(operator, value1, value2):
    if operator == "+":
        return value1 + value2
    elif operator == "-":
        return value1 - value2
    elif operator == "*":
        return value1 * value2
    elif operator == "/":
        return value1 / value2
    else:
        return None
    
print(basic_op("+",10,5))
 