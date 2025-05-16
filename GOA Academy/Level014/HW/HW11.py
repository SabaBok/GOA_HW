#11)დაწერეთ ისეთი პროგრამა რომელიც მომხმარებელს უპრინტავს კვირის დღეს მომხმარებლის შემოტანილი რიცხვის მიხედვით 
# (1 არის ორშაბათი, 2 სამშაბათი და ა.შ) გამოიყენეთ if elif else
day = int(input("enter number :"))
if day == 1:
    print("orshabati")
elif day == 2:
    print("samshabati")
elif day == 3:
    print("otxshabati")
elif day == 4:
    print("xutshabati")
elif day == 5:
    print("paraskevi")
elif day == 6:
    print("shabati")
elif day == 7:
    print("kbira")
else:
    print("unkown")