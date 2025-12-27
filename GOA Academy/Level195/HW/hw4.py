#4) მომხმარებელს შემოაყვანინე 5 მნიშვნელობა, რომელსაც დაამატებ სიაში. თუ შემოყვანილი მნიშვნელობა არ არის რიცხვი დაბეჭდე ერორი, 
# თუ რიცხვი უარყოფითია -> valueError, თუ ყველაფერი კარგადაა გამოითვალე სიაში მყოფი რიცხვების საშუალო არითმეტიკული, საბოლოოდ დაბეჭდე 
# "რიცხვების დამუშავება დასრულებულია"

try:
    user_inp = input('enter the numbers: ').split(' ')
    for i in user_inp:
        if not i.isdigit():raise TypeError('The arguments must all be numbers\n')
        elif int(i) < 0:raise ValueError('The arguments must be positive numbers\n')
except TypeError as err:print(err)
except ValueError as err:print(err)
else:
    final = sum(int(x) for x in user_inp)/len(user_inp)
    print(f'the average of the numbers are: {final}')
finally:print('the numbers checking is over')
