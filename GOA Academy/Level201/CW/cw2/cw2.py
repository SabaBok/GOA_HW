#2) მომხმარებელს კითხე საიტზე რეგისტრაცია სურს თუ შესვლა, თუ მან აირჩია რეგისტრაცია შევეკითხოთ სახელი, პაროლი შემდეგ ეს ინფორმაცია დავამატოთ ფაილში, 
# ამ ფაილში უნდა იყოს შენახული ყველა დარეგისტრირებული ექაუნთი, თითო ექაუნთს ქონდეს თითო ხაზი დათმობილი,თუ აირჩია შესვლა უთხარით რომ დროებით შესვლა შეუძლებელია

choice_1 = input('do you want to register or login (r/l): ')

if choice_1 == 'r':
    name = input('enter your name: ')
    password = input('enter your password: ')
    with open(r'D:\GOA_HW\GOA Academy\Level201\CW\cw2\user_info.txt','a') as file:
        file.write(f'{name}-{password}\n')
else: print('cannot login for now')
