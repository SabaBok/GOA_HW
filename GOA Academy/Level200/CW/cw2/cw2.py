#2) შექმენით ტექსტური ფაილი შემდეგ კი წაიკითხეთ ის პითონიდან და დაბეჭდეთ

with open(r'D:\GOA_HW\GOA Academy\Level200\CW\cw2\Text.txt','w') as f:
    f.write('hello')

with open(r'D:\GOA_HW\GOA Academy\Level200\CW\cw2\Text.txt') as f:
    print(f.read())