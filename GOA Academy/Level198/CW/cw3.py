#3) sort ფუნქციის გამოყენებით დაალაგე (name, age) tuple-ების სია ასაკის მიხედვით. people = [("Nika", 21),("Ana", 19),("Gio", 25)]

people = [("Nika", 21),("Ana", 19),("Gio", 25)]
new = list(sorted(people, key=lambda a:a[1]))
print(new)