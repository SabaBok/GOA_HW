#შეამოწმე, არის თუ არა მომხმარებლის შემოტანილი ორი რიცხვი ერთმანეთზე მეტი და 10-ის ჯერადი.
num1 = int(input("enter number :"))
num2 = int(input("enter number :"))
if num1 % 10 == 0 or num2 % 10 == 0:
    print("either of those numbers are a multiple of 10")