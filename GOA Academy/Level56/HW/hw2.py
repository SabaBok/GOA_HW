#2)https://www.codewars.com/kata/58afce23b0e8046a960000eb
def withdraw(n):
    hundreed = 0
    fifty = 0
    twenty = 0
    if n%100 == 0:
        hundreed += n/100
        n -= hundreed*100
        print(f"{hundreed} hundreed removed")
    elif n%50 == 0:
        fifty += n/50
        n -=fifty*50
        print(f"{fifty} fifty removed")
    elif n%20 == 0:
        twenty += n/20
        n -=twenty*20
        print(f"{twenty} twenty removed")
    return [int(hundreed),int(fifty),int(twenty)]
# not finished
print(withdraw(250))
