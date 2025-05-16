#8) https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/python
def abbrev_name(name):
    abr = name[0]+"."
    ind = 0
    for i in name:
        ind +=1
        if i == " ":
            abr += name[ind]
    return abr.upper()

print(abbrev_name("Saba Bokuchava"))