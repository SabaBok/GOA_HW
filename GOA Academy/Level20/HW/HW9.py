# 9)შექმენით ცვლადები და დააჯამეთ ლუწი და კენტი რიცხვები სიიდან 
list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
even_list = []
odd_list = []
for i in list:
    if i%2 == 0:
        even_list.append(i)
    elif i%2 !=0:
        odd_list.append(i)

print(sum(even_list + odd_list))        