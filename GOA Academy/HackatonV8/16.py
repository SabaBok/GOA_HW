def number_guess():
    number = 49
    while True:
        user = int(input("guess the number :"))
        if user == number:
            print("correct")
            break
        else:
            print("try again")

number_guess()
