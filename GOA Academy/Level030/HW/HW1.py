#1) მომხმარებელს შეეკითხეთ ორი რიცხვი შემდეგ კი შექმენით ფუნქცია რომელსაც არგუმენტად გადასცემთ ამ ორ რიცხვს ხოლო ფუნქცია დააბრუნებს ამ ორი რიცხვის ჯამს, ასევე გააკეთე ასეთი 4 ფუნქცია სხვადასხვა მათემატიკური მოქმედებებისთვის, გამოიყენეთ პარამეტრები და არგუმენტად გადაეცით მომხარებლის შემოტანილი რიცხვები

def plus(num1,num2):
    final = number1+number2
    return final

def minus(num1,num2):
    final = number1-number2
    return final

def multiply(num1,num2):
    final = number1*number2
    return final

def divide(num1,num2):
    final = number1/number2
    return final

while True:
    number1 = int(input("enter first number :"))
    number2 = int(input("enter second number :"))
    print(plus(number1,number2),"plus")
    print(minus(number1,number2),"plus")
    print(multiply(number1,number2),"plus")
    print(divide(number1,number2),"plus")