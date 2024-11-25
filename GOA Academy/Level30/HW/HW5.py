#5) შექმენით ფუნქცია რომელსაც არგუმენტად გადაეცემა რიცხვი შემდეგ კი ფუნქციამ უნდა დაგვიბრუნოს მისი საპირისპირო რიცხვი 

number = int(input("enter number :"))

def return_opposite(numb):
    opposite = 0 - numb
    return opposite

print(return_opposite(number))