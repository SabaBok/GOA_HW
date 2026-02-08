#3) შექმენი კლასი ExamResult: რომელსაც ექნება student_name, math, english, science. შექმენი 2 სტუდენტი და დაბეჭდე: ვის აქვს ჯამური ქულა მეტი.

class ExamResult:
	def __init__(self,student_name,math,english,science):
		self.student_name = student_name
		self.math = math
		self.english = english
		self.science = science
	
	def total_score(self):
		return (self.math + self.english + self.science)

st1 = ExamResult('saba',85,90,80)
st2 = ExamResult('beka',88,85,92)
student_list = list(sorted([st1,st2],key=lambda x:x.total_score()))

for i in range(0,len(student_list)):
	if i == len(student_list)-1:print(f'{student_list[i].student_name} <-- has the highest total score of {student_list[i].total_score()}')