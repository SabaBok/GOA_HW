#2) filter ფუნქციის და lambdaს გამოყენებით შექმენი ახალი სია და ახალ სიაში ჩაამატე მხოლოდ ის სიტყვები რომელთა სიგრძეც მეტია 4-ზე.  
# names = ["nika", "ana", "aleqsandre', "daviti", "gabrieli", "luka"]

names = ["nika", "ana", "aleqsandre", "daviti", "gabrieli", "luka"]
new_names = list(filter(lambda a:len(a)>4, names))
print(new_names)
