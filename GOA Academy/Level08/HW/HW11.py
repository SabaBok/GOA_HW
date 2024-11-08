#შეამოწმე, არის თუ არა ციფრი მთელი რიცხვი. 
num = int(input("enter number :"))
if type(num) == int:
    print("it is a whole number")
elif type(num) == float:
    print("it is a fraction")