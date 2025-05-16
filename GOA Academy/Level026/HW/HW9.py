#15,15,16,16,16,16,16,16,15,17,17,17,17,19,21,21,23,25,25,26,32
# ეს არის თქვენი ჯგუფის წევრების ასაკები, 
# დავალება:

# შექმენით პროგრამა რომელიც გამოითვლის ჯგუფის საშუალო ასაკს. 
# ასევე გამოითვალეთ ყველაზე ხშირად რომელი ასაკი გვხვდება

ages = [15,15,16,16,16,16,16,16,15,17,17,17,17,19,21,21,23,25,25,26,32]
# print(sum(ages)/len(ages),"arithmetic medium")
every_diff_age = []
for i in ages:
    if every_diff_age.count(i) == 0:
        every_diff_age.append(i)


age_count = []
for i in every_diff_age:
    count = 0
    for el in ages:
        if i == el:
            count +=1
    age_count[i] = count






        


