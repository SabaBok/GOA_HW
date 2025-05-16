#5) შექმენით სია რომელშიც იქნება მოთავსებული რენდომ რიცხვები შემდეგ კი ამ სიიდან ამოშალეთ ყველა ლუწი რიცხვი
rand_number = [5,2,7]
for i in rand_number:
    if i %2 ==0:
        rand_number.remove(i)
print(rand_number)