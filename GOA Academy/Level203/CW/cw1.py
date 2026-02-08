#1) შექმენი კლასი Student, რომელსაც ექნება:name,age,grade. init-ის გამოყენებით.შემდეგ: შექმენი 2 სტუდენტის ობიექტი და დაბეჭდე მათი მონაცემები

class Student:
	def __init__(self, name, age, grade):
		self.name = name
		self.age = age
		self.grade = grade

std1 = Student('saba',17,10)

print(std1.name)