#5) იმუშავეთ  .extend  გუნქციაზე და დაწერეთ 5-5 მაგალითი
list1 = [1,2,3]
list2 = [4,5,6]
list1.extend(list2)
print(list1)

list2.extend(list1)
print(list2)

list3 = [11,22,33,44]
list4 = [55,66,77,88]
list5 = [99,111,222,333]
print(list3.extend(list4))
print(list3.extend(list5))
print(list4.extend(list3))
print(list4.extend(list5))
print(list5.extend(list3))
print(list5.extend(list4))

