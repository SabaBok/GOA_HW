#map ფუნქციის და lambdaს გამოყენებით ლისტის ყველა ელემენტი აქციე uppercaseებად. names = ["nika", "ana", "aleqsandre', "daviti", "gabrieli", "luka"]

names = ["nika", "ana", "aleqsandre", "daviti", "gabrieli", "luka"]

d = list(map(lambda a:a.upper(), names))
print(d)