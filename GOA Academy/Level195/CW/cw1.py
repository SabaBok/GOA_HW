#მომხმარებელს შემოაყვანინეთ ორი რიცხვი, პროგრამამ უნდა სცადოს რიცხვების წაკითხვა და მათი ერთმანეთზე გაყოფა, თუ მომხმარებელი შეიყვანს 
# სტრინგს ან სხვა რაიმე ტიპის მონაცემს გამოიტანეთ შესაბამისი ერორი, თუ შეცდომა არ მოხდა დაიბეჭდოს გაყოფის შედეგი, და ნებისმიერ შემთხვევაში 
# ასევე დაიბეჭდოს "პროგრამამ დაასრულა მუშაობა"


user_inp = input("enter the numbers: ").split(' ')
inp1,inp2 = user_inp

try:print(inp1/inp2)
except NameError:print('Enter 2 valid numbers')
except ZeroDivisionError:print('the second number can not be 0')
finally:print('try catch went through')
