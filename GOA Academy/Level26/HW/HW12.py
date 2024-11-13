#4) შექმენით სია რომელშიც იქნება რენდომ რიცხვები მოთავსებული შემდეგ კი შექმენით მეორე სია რომელშიც გადაიტანთ პირველი სიიდან მხოლოდ ლუწ რიცხვებს
rand_number = [5,2,10,7]
normal_number = []
for i in rand_number:
    if i %2 ==0:
        normal_number.append(i)
print(normal_number)