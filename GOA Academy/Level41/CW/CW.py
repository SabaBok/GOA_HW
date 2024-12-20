def get_count(sentence):
    vowels = "aeiou"
    counter = 0
    for i in sentence:
        if i in vowels:
            counter +=1 
    return counter
