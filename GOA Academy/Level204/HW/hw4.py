#4) შექმენი კლასი BankAccount: რომელსაც ექნება owner, balance, currency. შექმენი 2 ანგარიში და დაბეჭდე: რომელი ანგარიშია უფრო დიდი თანხით.

class BankAccount:
	def __init__(self,owner,balance,currency):
		self.owner = owner
		self.balance = balance
		self.currency = currency		

acc1 = BankAccount('saba',1500,'USD')
acc2 = BankAccount('gio',2000,'USD')	
account_list = list(sorted([acc1,acc2],key=lambda x:x.balance))
for i in range(0,len(account_list)):
	if i == len(account_list)-1: print(f'{account_list[i].owner} <-- has the highest balance of {account_list[i].balance} {account_list[i].currency}')