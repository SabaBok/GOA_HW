#4)https://www.codewars.com/kata/570e8ec4127ad143660001fd
def billboard(name, price=30):
    total = 0
    for i in name:
        total += price   
    return total

print(billboard("idk"))