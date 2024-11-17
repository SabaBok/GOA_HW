#2) შექმენით სია რომელშიც გექნებათ 1 დან 20მდე რიცხვები შემდეგ კი დაბეჭდეთ 3 ის ჯერადი რიცხვები
list = [] #shortcut :>
for i in range(1,21):
    list.append(i)

for i in list:
    if i%3 == 0:
        print(i,"multiple of 3")