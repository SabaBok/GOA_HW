#განაგრძეთ წინა დავალება, დავამატოთ ისეთი კოდი რომ არ შეგვეძლოს იგივე სახელით რეგისტრაცია რომელიც უკვე არსებობს, დაამატეთ რამდენიმე ვალიდაცია 
# რომ მომხმარებელს არ შეეძლოს 8 ასოზე ნაკლები პაროლის შეყვანა და მსგავსი ვალიდაციები.

choice_1 = input('do you want to register or login (r/l): ')

if choice_1 == 'r':
    while True:
        name = input('enter your name: ')
        password = input('enter your password: ')
        if name == '' or password == '':
            print("fields cannot be empty")
            continue
        elif len(password) < 8:
            print('the password must be longer than 8 characters')
            continue
        
        with open(r'D:\GOA_HW\GOA Academy\Level201\HW\user_info.txt','a+') as file: 
            file.seek(0)
            info = file.readlines()
            users = [line.split('-')[0] for line in info]
            
            if name in users: print('that name is taken alredy')
            else:
                file.write(f'{name}-{password}\n')
                break
        
else: print('cannot login for now')
