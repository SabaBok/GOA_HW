#3) მომხმარებელს შემოაყვანინე პაროლი, პაროლი უნდა შეიცავდეს მინიმუმ 8 სიმბოლოს, უნდა შეიცავდეს რიცხვს, არ უნდა შეიცავდეს 
# space,წესის დარღვევა -> valueError, წარმატება -> "პაროლი მიღებულია", საბოლოოდ გამოიტანე "შემოწმება დასრულებულია"

numbers = '1234567890'

try:
	user_pass = input('enter in your password of choice: ')
	
	has_number = False
	for i in user_pass:
		if i in numbers:
			has_number = True
			break
	
	if ' ' in user_pass:raise ValueError("must not contain spaces")
	elif(len(user_pass) < 8):raise ValueError('the password must be 8 characters or longer')
	elif(not has_number):raise ValueError('the password must contain numbers')

except ValueError as e:print(e)

else:print('the password is accepted')

finally:print('the check is over')

