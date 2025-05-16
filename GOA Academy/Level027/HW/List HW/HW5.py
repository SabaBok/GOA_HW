#5) შექმენით სია რომელშიც გექნებათ ოცი სხვადასხვა რიცხვი შემდეგ კი დაბეჭდეთ მხოლოდ 20 ზე მეტი რიცხვები ისე რომ იყოს თან სამის ჯერადი გამოიყენეთ for loop
list = [] #shortcut :>
for i in range(0,59,3):
    list.append(i)
print(len(list))

for i in list:
    if i > 20 and i %3==0:
        print(i)