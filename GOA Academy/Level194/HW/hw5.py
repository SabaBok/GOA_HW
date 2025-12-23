#5) მოცემულია სტრინგი "abccdefee" მოაშორე ის ასოები რომლებიც არის უნიკალური სტრინგში
str_inp = "abccdefee"
final = ''

for i in str_inp:
    if str_inp.count(i) > 1:
        final += i

print(final)