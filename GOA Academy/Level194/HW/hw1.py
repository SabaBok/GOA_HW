#1) მოცემულია რიცხვების სია: nums = [1, 2, 3, 4, 5, 6]. იპოვე ყველა უნიკალური წყვილი (a, b), სადაც: a + b == 7
nums = [1, 2, 3, 4, 5, 6]
new_list = []
for one in nums:
	for two in nums:
		if(one+two == 7):new_list.append((one,two))

print(new_list)