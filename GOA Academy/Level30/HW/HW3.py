#3) შექმენით ფუნქცია რომელსაც გადაეცემა არგუმენტად რიცხვი შემდეგ კი მან უნდა დაგვიბრუნოს ლუწია ეს რიცხვი თუ კენტი

number = int(input("enter the numbers :"))

def return_even_number(num):
    if num % 2==0:
        return num
    else:
        return None
        

print(return_even_number(number),"it is even")