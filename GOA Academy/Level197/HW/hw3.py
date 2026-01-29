#3) მოცემულია words = ["hi", "hello", "world"], შექმენი lambda რომელიც აბრუნებს სტრინგების სიგრძეს

words = ["hi", "hello", "world"]

str_length = lambda a:len(a)

for i in words:
    print(str_length(i))