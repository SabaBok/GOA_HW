#1)შექმენით სია რომელშიც გექნებათ 1 დან 20-მდე რიცხვები დაბეჭდეთ თითოეული სიის ელემენტი და თითოეულ მათგანს მიუწერეთ ლუწია 
# თუ კენტი, გამოიყენეთ for loop
list = [] #shortcut :>
for i in range(1,21):
    list.append(i)

for i in list:
    if i%2 == 0:
        print(i,"even")
    elif i %2 != 0:
        print(i,"odd")

