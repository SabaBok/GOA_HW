#6) დაწერე ფუნქცია is_unique(s), რომელიც აბრუნებს True-ს თუ სტრინგში ყველა სიმბოლო უნიკალურია.

def is_unique(s):
	final = ''
	for i in s:
		if s.count(i) == 1:
			final += i
	if final == s: return True 
	else: return False

print(is_unique("abcdd"))