#დაწერე პროგრამა, რომელიც ამოწმებს, არის თუ არა მომხმარებლის შემოტანილი რიცხვი 100-ზე მეტი და ლუწი.
num = int(input("enter a number :"))
if num > 100 and num % 2 == 0:
    print("its higher than 100 and is odd")