#დაწერე პროგრამა, რომელიც ამოწმებს, არის თუ არა რიცხვი ერთდროულად 50-ზე ნაკლები და 10-ის ჯერადი.
num = int(input("enter number :"))
if num %10 == 0 or num < 50:
    print("your number is either positive or multiple of 20")