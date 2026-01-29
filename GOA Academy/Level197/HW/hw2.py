#2) მოცემუმლია სია numbers = [1, 2, 3, 4, 5, 6], lambdaს გამოყენებით ახალ სიაში ჩაამატე მხოლოდ ლუწი რიცხვები

numbers = [1, 2, 3, 4, 5, 6]
new_list = []
even = lambda a:a%2==0
for i in numbers:
    if even(i):new_list.append(i)

print(new_list)