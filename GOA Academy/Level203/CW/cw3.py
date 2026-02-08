#3) შექმენი კლასი Movie, რომელსაც ექნება: title, rating, year, შექმენი 3 ფილმი და დაბეჭდე მხოლოდ  ის ფილმები, რომელთა რეიტინგი 8-ზე მეტია.
class Movie:
	def __init__(self,title,rating,year):
		self.title = title
		self.rating = rating
		self.year = year
	
	def printAll(self):
		print(self.title,self.rating,self.year)

mov1 = Movie('interstellar',9,2014)
mov2 = Movie('some movie',10,2026)
mov3 = Movie('new movie',7,2026)

movie_list = [mov1,mov2,mov3]
sorted_list = list(filter(lambda x:x.rating>8,movie_list))

for i in sorted_list:print(i.printAll())
