#1) მომხმარებელს შეეკითხეთ სახელი სანამ ეს სახელი არიქნება გაბრიელი მაქამდე არ გაჩერდეს და შეეკითხოს ისევ ხელახლა თუ იქნება გაბრიელი გაჩერდეს

name = input("enter name :")
while name != "gabrieli":
    name = input("enter name again :")
    if name == "gabrieli":
        print("correct good job")
        break