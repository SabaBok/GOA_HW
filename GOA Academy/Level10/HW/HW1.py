# 1) შექმენით კალკულატორი, მომხმარებელს შეეკითხეთ ორი რიცხვი, შემდეგ შეეკითხეთ რა მოქმედების შესრულება სურს ამ ორ 
# რიცხვზე და მისი პასუხიდან გამომდინარე შეასრულეთ მოქმედება და დაბეჭდეთ მაგალითად თუ მომხმარებელი შემოიტანს რიცხვებს
#  5 და 7 , და შემოიტანს მოქმედებას მაგალითად დამატებას თქვენ უნდა დაუბეჭდოთ 5 + 7 = 12

num1 = int(input("enter first number :"))
num2 = int(input("enter second number :"))
oper = input("choose operation :")
if oper == "plus":
    print(num1 + num2)
elif oper == "minus":
    print(num1 - num2)
elif oper == "divide":
    print(num1 / num2)
elif oper == "multiply":
    print(num1 * num2)
