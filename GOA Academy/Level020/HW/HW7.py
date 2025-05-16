#7) შექმენით ახალი სია მხოლოდ ლუწი რიცხვების ერთი დიდი სიიდან 
list = [1,2,3,4,5,6,7,8,9,10]
empty_list = []
for i in list:
    if i%2 == 0:
        empty_list.append(i)
for i in empty_list:
    print(i)
