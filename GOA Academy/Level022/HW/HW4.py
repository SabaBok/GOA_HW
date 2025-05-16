#4) შექმენით 3 ცრილი სამივე იქნება განსხვავებული მონაცემთა ტიპიები  | ბოლეანი არა საჭირო | და შექმენით ცარიელი ცხრილი სადაც იქნება დასაწყისში ინტეჯერების ცხრილი  სტრინგების ცხრილი და მერე ფლოათების ცხრილი
number_list = [1,2,3,4,5]
str_list = ["hello","ganabi","shavta mepe"]
float_list = [11.5,2.5,3.1]
emp_list = []
for ganabi in number_list:
    emp_list.append(ganabi)

for qurdi in str_list:
    emp_list.append(qurdi)

for shavi_mepe in float_list:
    emp_list.append(shavi_mepe)

for i in emp_list:
    print(i)
