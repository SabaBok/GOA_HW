#2) შექმენი კლასი Phone, რომელსაც ექნება:brand, storage(GB), price შექმენი 2 ტელეეფონი და დაბეჭდე რომელის არის უფრო ძვირი (if და property-ების გამოყენებით)

class Phone:
	def __init__(self,brand,storage,price):
		self.brand = brand
		self.storage = storage
		self.price = price

price1 = None
price2 = None

while True:
	price1 = int(input('enter first phones price: '))
	price2 = int(input('enter second phones price: '))
	if price1 <= 0 or price2 <=0:continue
	else:break

ph1 = Phone('samsung',128,price1)
ph2 = Phone('iphone',64,price2)

if ph1.price > ph2.price:print(f"phone 1's price is higher and is --> {ph1.price}")
elif ph1.price == ph2.price:print(f"phone 1 and phone 2 are the same price --> {ph1.price}")
else:print(f"phone 2's price is higher and is --> {ph2.price}")

