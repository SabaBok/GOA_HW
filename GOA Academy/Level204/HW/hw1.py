#1) შექმენი კლასი Player: რომელსაც ექნება name, score, level. შექმენი 3 მოთამაშე და დაბეჭდე: რომელი მოთამაშეა ყველაზე მაღალი score-ით

class Player:
	def __init__(self,name,score,level):
		self.name = name
		self.score = score
		self.level = level

pl1 = Player('saba',10,5)
pl2 = Player('gio',5,10)
pl3 = Player('nika',15,16)

player_list = [pl1,pl2,pl3]

sorted_list = list(sorted(player_list,key=lambda x:-x.score))

for i in range(0,len(sorted_list)):
	if i == 0: print(f'{sorted_list[i].score} <-- the highest score')
	else: print(sorted_list[i].score)