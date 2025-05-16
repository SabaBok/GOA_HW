#9)შემოატანინეთ მომხმარებელს რიცხვი და დაადგინეთ არის თუ არა დადებითი უარყოფითი ან ნულის ტოლი 
num1 = iter(input("enter number :"))
if num1 > 0 :
    print("its positive")
elif num1 < 0:
    print("its negative")
elif num1 == 0:
    print("its zero")