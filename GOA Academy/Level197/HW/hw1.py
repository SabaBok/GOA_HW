#1) მოცემულია სია numbers = [1, 2, 3, 4, 5, 12, 24, -1, -3, 44, 65, 43], lambdaს გამოყენებით დააბრუნე მხოლოდ ის რიცხვები რომლებიც მეტია 3-ზე.

numbers = [1, 2, 3, 4, 5, 12, 24, -1, -3, 44, 65, 43]

greater_3 = lambda a:a>3
new_nums = []
for i in numbers:
	if greater_3(i):new_nums.append(i)	

print(new_nums)