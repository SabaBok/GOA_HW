#6) შექმენით სია რომელშიც იქნება სახელები შემდეგ კი შექმენით პროგრამა რომელიც ამოშლის ყველა სახელს რომელიც "t" ასოზე იწყება და ჩაამატებს ახალ სიაში
names = ["tornike","tako","saba","levani","dachi","temuri"]
t_names = []
for i in names:
    if i[0] == "t":
        t_names.append(i)
print(t_names)