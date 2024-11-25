#2)  შექმენით ფუნქცია რომელსაც არგუმენტად გადაეცემა რიცხვებით სავსე სია ამ ფუნქციამ კი უნდა დააბრუნოს ამ სიის რიცხვების ჯამი

list = [1,2,3,4,5,6,7,8,9]

def return_sum_list(numbers):
    total = sum(numbers)
    return total

print(return_sum_list(list))
