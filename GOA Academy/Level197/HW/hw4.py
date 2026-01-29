#4) მოცემულია სია numbers = [2, 3, 4, 5, 7], lambdaს გამოყენებით სიის ყველა წევრი გაამრავლე საკუთარ ინდექსებზე და შემდეგ ჩაამატე ეს რიცხვები ახალ ცარიელ ლისტში

numbers = [2, 3, 4, 5, 7]
idk = lambda a,b:a*b

for i in range(0,len(numbers)):
    print(idk(numbers[i],i))