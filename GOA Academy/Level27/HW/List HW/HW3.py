#3) შექმენით სია რომელშიც გექნებათ ათიცალი სხვადასხვა რიცხვი შემდეგ კი დაბეჭდეთ ამ სიიდან მხოლოდ 10ზე დაბალი რიცხვები 
# გამოიყენეთ for loop
list = [] #shortcut :>
for i in range(-8,22,3):
    list.append(i)
print(len(list),"length of the list")

for i in list:
    if i <10:
        print(i)