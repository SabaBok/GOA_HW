def calculator():
    first_number = int(input("enter first number :"))
    operator = input("enter operator :")
    second_number = int(input("enter second number :"))

    if operator == "+":
        plus = first_number+second_number
        return plus
    elif operator == "-":
        minus = first_number-second_number
        return minus
    elif operator == "*":
        multiply = first_number*second_number
        return multiply
    elif operator == "/":
        divide = first_number/second_number
        return divide
    else:
        return 0
print(calculator())
