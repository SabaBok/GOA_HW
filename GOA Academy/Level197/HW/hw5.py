#5) მოცემულია სია numbers = [12, 24, 55, 67, 98], შექმენი lambda, რომელიც აბრუნებს რიცხვის ციფრების ჯამს.

numbers = [12, 24, 55, 67, 98]

sum_digits = lambda x: sum(int(d) for d in str(x))

for num in numbers:print(f"{num} --> {sum_digits(num)}")