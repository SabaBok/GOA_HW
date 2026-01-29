#3) მოცემულია სია nums = [1, 2, 3, 4, 5, 6], filter -> map ის გამოყენებით დატოვე ლუწი რიცხვები და თითოეული გაამრავლე 2-ზე

nums = [1, 2, 3, 4, 5, 6]
new = list(map(lambda a:a*2,list(filter(lambda a:a%2==0,nums))))
print(new)