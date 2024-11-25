#4) შექმენით ფუნქცია რომელსაც არგუმენტად გადაეცემა რიცხვი შემდეგ კი მან უნდა დაგვიბრუნოს ეს რიცხვი დადებითია თუ უარყოფითი

number = int(input("enter the numbers :"))

def return_positive_negative(num):
    if num > 0:
        return "it is positive"
    elif num < 0:
        return "it is negative"
    else:
        return "it is 0"
        

print(return_positive_negative(number),"it is even")