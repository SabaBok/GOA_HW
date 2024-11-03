#1) მომხაარებელ შემოატანინეთ სახელი და გვარი ეს სახელი და გვარი გააერთიანეთ და შეაუბრუნეთ
name = input()
print(name[::-1])

# #2) მომხარებეს შემოატანითეტ საყვარელი ფერი და ამ ფერის შუა აოსები დააპრინტინეთ
color = input()
print(color[2:4])

#3 ) 3 ცხრილი , პირველში იქნება 5 ადამიანის სახელი 2 მისი გვარები და 3 ში გააერთიანეთ 
# სახელები და გვარები მაგ| ლუკა ლორთქიფანიძე  , გიორგი ცხადაძე
names = ["gio","saba","levan","nika","davit"]
surname = ["sharia","bokuchava","beruchashvili","kacitadze","lekiashvili"]
for i in names:
    for iss in surname:
        print(i,iss)

