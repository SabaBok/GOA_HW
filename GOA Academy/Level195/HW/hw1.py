#1) მოცემულია სია: nums = [10, 20, 30], მომხმარებელს შეაყვანინე ინდექსი და დაბეჭდე შესაბამისი ელემენტი. 
# თუ ინდექსი არ არის რიცხვი გამოიტანე ერორი, თუ ინდექსი სცდება სიის ზომას გამოიტანე ერორი, თუ ყველაფერი სწორია დაბეჭდე ელემენტი, 
# ნებისმიერ შემთხვევაში დაბეჭდე "შემოწმება დასრულდა"

nums = [10, 20, 30]

while True:
	try:
		index = int(input("enter an index: "))
		element = nums[index]
	except ValueError:
		print("error: the index must be a number\n")
	except IndexError:
		print("error: the index surpasses the size of the list\n")
	else:
		print("element:", element)
		break