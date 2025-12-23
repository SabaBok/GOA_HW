#2) დასორტეთ tuple-ში სიტყვები სიგრძის მიხედვით

words = ('ab','a','abcd','abc')
new_word = tuple(sorted(words, key=len))
print(new_word)