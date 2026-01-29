#მოცემულია რიცხვების სია: numbers = [1, 2, 3, 4, 5]. შექმენი lambda რომელიც ამ რიცხვებს გაამრავლებს 2-ზე. გამოიყენე for  
#ციკლი რათა ახალ ლისთში ჩაამატო უკვე ორზე გამრავლებული რიცხვები.

numbers = [1, 2, 3, 4, 5]
double = lambda a:a*2

new_nums = []
for i in numbers:
    new_nums.append(double(i))

print(new_nums	)