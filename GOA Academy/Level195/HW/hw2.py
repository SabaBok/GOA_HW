#2) მომხმარებელს შეაყვანინე ასაკი. თუ ასაკი არ არის რიცხვი გამოიტანე ერორი, თუ ასაკი უარყოფითია გამოიტანე შეცდომა (ValueError), 
# თუ ყველაფერი სწორია დაბეჭდე "ასაკი მიღებულია".


while True:
	try:
		user_age = int(input('enter your age: '))
		if user_age < 0:raise ValueError("the age must be greater than 0\n")

	except ValueError as err:print(f'error: {err}\n')

	else: 
		print('everything is okay, age is accepted')
		break

