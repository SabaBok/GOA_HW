#7) დაწერე ფუნქცია pair_sum(nums, target), რომელიც აბრუნებს ყველა უნიკალურ წყვილს (a, b) სადაც a + b == target. pair_sum([1,2,3,4,5,6], 7) 
# დააბრუნე სეტში ტუპლების წყვილები რომლის დროსაც პირობა შესრულდება

def pair_sum(nums, target):
	final_pairs = set()
	for one in nums:
		for two in nums:
			if one + two == target:
				final_pairs.add((one,two))
	return final_pairs


print(pair_sum([1,2,3,4,5,6], 7) )