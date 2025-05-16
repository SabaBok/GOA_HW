#დაწერე პროგრამა, რომელიც ამოწმებს, არის თუ არა რიცხვი უარყოფითი ან  ლუწი.
num = int(input("enter number :"))
if num %2 == 0 or num < 0:
    print("your number is either negative or even")